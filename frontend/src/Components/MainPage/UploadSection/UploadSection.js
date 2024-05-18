import React, { Component } from "react";
import "./UploadSection.css";
import {
  Avatar,
  Paper,
  Dialog,
  Grid,
  Typography,
  TextField,
  DialogContent,
  Button,
} from "@mui/material";
import live from "../../../images/video.png";
import image from "../../../images/image.png";
import add from "../../../images/add.png";
import feeling from "../../../images/feelings.png";
import firebase from "../../../firebase";
import "firebase/compat/storage";

class UploadSection extends Component {
  constructor(props) {
    super(props);
    const userData = JSON.parse(localStorage.getItem("user"));
    this.state = {
      open: false,
      uploadImage: null,
      description: "",
      //1 change
      userImage: "",
    };
  }

  componentDidMount() {
    const userId = JSON.parse(localStorage.getItem("user")).userId;
    fetch(`http://localhost:8080/api/userService/getAllUsers/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ userImage: data.userImage });
      })
      .catch((error) => {
        console.error("Error fetching user image URL:", error);
      });
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  openDialog = (event) => {
    this.setState({ open: true });
    this.setState({ uploadImage: URL.createObjectURL(event.target.files[0]) });
    this.setState({ image: event.target.files[0] });
  };
  uploadToFireBase = (event) => {
    const thisContext = this;
    var storage = firebase.storage();
    var uploadTask = storage
      .ref("images")
      .child(this.state.image.name)
      .put(this.state.image);
    uploadTask.on(
      "state_changed",
      function (snapshot) {},
      function (error) {},
      function () {
        uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
          let payload = {
            userId: JSON.parse(localStorage.getItem("user")).userId,
            userName: JSON.parse(localStorage.getItem("user")).userName,
            description: thisContext.state.description,
            postImgURL: downloadURL,
            userImage: JSON.parse(localStorage.getItem("user")).userImage,
          };

          const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          };

          fetch("http://localhost:8080/api/postService/save", requestOptions)
            .then((response) => response.json())
            .then((data) => {
              thisContext.setState({ open: false });
              thisContext.props.update();
            })
            .catch((error) => {
              throw new Error("Failed to save post");
            });
        });
      }
    );
  };
  render() {
    return (
      <div>
        <Dialog
          onClose={this.handleClose}
          aria-labelledby="simple-dialog-title"
          className="upload_dialogbox"
          open={this.state.open}
        >
          <DialogContent>
            {/* <div className="upload_header">Create Post</div>
                   <input type="text" onChange={(event)=> this.state.description = event.currentTarget.value}  className="upload_textbox" placeholder="What's on your mind .."/>
                   <img src={this.state.uploadImage} className="upload_preview"/> 
                   <input type="button" value="Post" onClick={this.uploadToFireBase} className="upload_button"/> */}
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h6">Create Post</Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Description"
                  variant="outlined"
                  onChange={(event) =>
                    (this.state.description = event.currentTarget.value)
                  }
                  multiline
                  rows={4}
                />
              </Grid>
              <Grid item xs={12}>
                <img
                  src={this.state.uploadImage}
                  style={{
                    width: "100%",
                    height: "100%",
                      objectFit: "contain",
                    maxWidth: "600px",
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.uploadToFireBase}
                >
                  Post
                </Button>
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>

        <Paper className="upload_container">
          <div className="upload_top">
            <div>
              <Avatar src={this.state.userImage} className="upload_img" />
            </div>
            <div>
              <input
                className="upload_box"
                placeholder="what's on your mind?"
                type="text"
              />
            </div>
          </div>
          <div className="upload_bottom">
            <div className="upload_tabs">
              {/* <img src={live} width="35px"/>
                    <div className="upload_text">Live Video</div> */}
            </div>
            <div className="upload_tabs">
              <label for="file-upload" class="upload_tabs">
                <img src={add} width="35px" />
                <div className="upload_text">Add Post</div>
              </label>
              <input type="file" id="file-upload" onChange={this.openDialog} />
            </div>
            <div className="upload_tabs">
              {/* <img src={feeling}width="35px"/>
                    <div className="upload_text">Feeling/Activity</div> */}
            </div>
          </div>
        </Paper>
      </div>
    );
  }
}

export default UploadSection;
