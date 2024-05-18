import React, { Component } from "react";
import "./PostContainer.css";
import Post from "./Post";

class PostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  getData = () => {
    fetch("http://localhost:8080/api/postService/getPost")
      .then((response) => response.json())
      .then((json) => {
        json.reverse();

        this.setState({ data: json });
      })

      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
    //console print
    console.log(this.state.data);
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div>
        {this.state.data.map((item) => (
          <Post object={item} />
        ))}
      </div>
    );
  }
}

export default PostContainer;
