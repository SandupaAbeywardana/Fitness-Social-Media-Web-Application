import React, { Component } from "react";
import PropTypes from "prop-types";
import "./PostContainer.css";
import { Avatar, Paper } from "@mui/material";
import like from "../../../images/like.png";
import likebutton from "../../../images/likebutton.png";
import share from "../../../images/share.png";
import comment from "../../../images/comment.png";
import Divider from "@mui/material/Divider";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentList: [],
      showComments: false,
    };
    this.commentInputRef = React.createRef();
  }

  componentDidMount() {
    this.getComments();
  }

  getComments = () => {
    fetch(
      `http://localhost:8080/api/commentService/getAllComments/${this.props.object.postId}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch comments");
        }
        return response.json();
      })
      .then((data) => {
        this.setState({ commentList: data });
      })
      .catch((error) => {
        console.error("Error fetching comments:", error);
      });
  };

  submitComments = (event) => {
    if (event.key === "Enter") {
      const comment = event.currentTarget.value;
      if (comment.trim() !== "") {
        const user = JSON.parse(localStorage.getItem("user"));
        const payload = {
          commentId: Math.floor(Math.random() * 1000000).toString(),
          userId: user.userId,
          postId: this.props.object.postId,
          comment,
          userName: user.userName,
          userImage: user.userImage,
        };

        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        };

        fetch("http://localhost:8080/api/commentService/save", requestOptions)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Failed to submit comment");
            }
            return response.json();
          })
          .then(() => {
            this.getComments();
            this.commentInputRef.current.value = ""; // Clear the input field
          })
          .catch((error) => {
            console.error("Error submitting comment:", error);
          });
      }
    }
  };

  toggleComments = () => {
    this.setState((prevState) => ({ showComments: !prevState.showComments }));
  };

  isImageAvailable = (data) => {
    return data !== "";
  };

  render() {
    return (
      <div>
        <Paper className="post_container">
          {/*header*/}
          <div className="post_header">
            <div className="post_header_image">
              <Avatar src={this.props.object.userImage} className="post_img" />
            </div>
            <div className="post_header_text">{this.props.object.userName}</div>
          </div>

          {/*description*/}
          <div className="post_description">
            {this.props.object.description}
          </div>

          {/*image*/}
          <div className="post_image">
            {this.isImageAvailable(this.props.object.postImgURL) ? (
              <img src={this.props.object.postImgURL} width="600px" />
            ) : (
              <span></span>
            )}
          </div>

          <Divider
            sx={{
              marginTop: "15px",
              marginBottom: "15px",
            }}
          />
          <div className="post_likeshare">
            <div className="post_tab">
              <div className="post_tabfirst">
                <img className="post_tabing" src={likebutton} />
              </div>
              <div className="post_tabtext">Like</div>
            </div>

            <div
              className="post_tab"
              onClick={this.toggleComments}
              style={{
                cursor: "pointer",
              }}
            >
              <div className="post_tabfirst">
                <img className="post_tabing" src={comment} />
              </div>
              <div className="post_tabtext">Comment</div>
            </div>

            <div className="post_tab">
              <div className="post_tabfirst">
                <img className="post_tabing" src={share} />
              </div>
              <div className="post_tabtext">Share</div>
            </div>
          </div>

          {this.state.showComments ? (
            <div className="upload_comment">
              <div className="upload_top">
                <div></div>
                <div>
                  {this.state.commentList.map((item, index) =>
                    index < 4 ? (
                      <div className="post_comment" key={item.commentId}>
                        <img className="post_img" src={item.userImage} />

                        <div className="comment_user"> {item.userName} </div>
                        <div className="comment"> {item.comment}</div>
                      </div>
                    ) : (
                      <span key={item.commentId}></span>
                    )
                  )}
                  <div className="comment-box">
                    <Avatar
                      src={JSON.parse(localStorage.getItem("user")).userImage}
                      className="upload_img"
                    />
                    <input
                      className="upload_box"
                      onKeyPress={this.submitComments}
                      placeholder="Add Comment"
                      type="text"
                      ref={this.commentInputRef}
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </Paper>
      </div>
    );
  }
}

Post.propTypes = {
  object: PropTypes.shape({
    postId: PropTypes.string.isRequired,
    userImage: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    postImgURL: PropTypes.string,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Post;
