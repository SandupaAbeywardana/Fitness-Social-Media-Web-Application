import React, { Component } from "react";
import "./UploadSection.css";
import { Avatar, Paper, Dialog } from "@mui/material";
import live from "../../../images/video.png";
import image from "../../../images/image.png";
import feeling from "../../../images/feelings.png";
import firebase from "../../../firebase";
import "firebase/compat/storage";
import add from "../../../images/add.png";

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
      .ref("workout")
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
            fitnessgoal: thisContext.state.fitnessgoal,
            exercisedetails: thisContext.state.exercisedetails,
            restdays: thisContext.state.restdays,
            fitnesslevel: thisContext.state.fitnesslevel,
            postImgURL: downloadURL,
            userImage: JSON.parse(localStorage.getItem("user")).userImage,
          };

          const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          };

          fetch(
            "http://localhost:8080/api/workplanService/save",
            requestOptions
          )
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
          <div className="upload_header">Add workout plan</div>

          <select
            onChange={(event) =>
              this.setState({ fitnessgoal: event.currentTarget.value })
            }
            className="upload_fitnessgoal"
          >
            <option className="upload_fitnessgoal" value="">
              Select Fitness Goal
            </option>
            <option className="upload_fitnessgoal" value="Weight Loss">
              Weight Loss
            </option>
            <option className="upload_fitnessgoal" value="Muscle Gain">
              Muscle Gain
            </option>
            <option
              className="upload_fitnessgoal"
              value="Endurance Improvement"
            >
              Endurance Improvement
            </option>
            {/* Add more options as needed */}
          </select>

          <select
            onChange={(event) =>
              this.setState({ exercisedetails: event.currentTarget.value })
            }
            className="upload_exercisedetails"
          >
            <option className="upload_exercisedetails" value="">
              Select Exercise Details
            </option>
            <option className="upload_exercisedetails" value="Sets and Reps">
              Sets and Reps
            </option>
            <option className="upload_exercisedetails" value="Intensity">
              Intensity
            </option>
            <option className="upload_exercisedetails" value="Intensity">
              Intensity
            </option>
            {/* Add more options as needed */}
          </select>

          <select
            onChange={(event) =>
              this.setState({ restdays: event.currentTarget.value })
            }
            className="upload_restdays"
          >
            <option className="upload_restdays" value="">
              Select Rest Days
            </option>
            <option className="upload_restdays" value="1 day per week">
              1 day per week
            </option>
            <option className="upload_restdays" value="2 days per week">
              2 days per week
            </option>
            <option className="upload_restdays" value="3 days per week">
              3 days per week
            </option>
            {/* Add more options as needed */}
          </select>

          <select
            onChange={(event) =>
              this.setState({ fitnesslevel: event.currentTarget.value })
            }
            className="upload_fitnesslevel"
          >
            <option className="upload_fitnesslevel" value="">
              Select Fitness Level
            </option>
            <option className="upload_fitnesslevel" value="Beginner">
              Beginner
            </option>
            <option className="upload_fitnesslevel" value="Intermediate">
              Intermediate
            </option>
            <option className="upload_fitnesslevel" value="Advanced">
              Advanced
            </option>
            {/* Add more options as needed */}
          </select>

          <textarea
            onChange={(event) =>
              (this.state.description = event.currentTarget.value)
            }
            className="upload_area"
            placeholder="Type your exercise details...."
            rows={5}
          ></textarea>

          <img src={this.state.uploadImage} className="upload_preview" />
          <input
            type="button"
            value="Post"
            onClick={this.uploadToFireBase}
            className="upload_button"
          />
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
                <img src={add} width="35px" height="35px" />
                <div className="upload_text1">Add Workout plan</div>
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
