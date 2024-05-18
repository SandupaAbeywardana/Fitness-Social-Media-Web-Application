import React, { Component } from "react";
import "./UploadSection.css";
import {
  Avatar,
  Paper,
  Dialog,
  TextField,
  Grid,
  Select,
  MenuItem,
  Button,
  DialogContent,
  Typography,
  FormControl,
  InputLabel,
} from "@mui/material";

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
      .ref("mealplan")
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
            mealpreferences: thisContext.state.mealpreferences,
            caloricgoals: thisContext.state.caloricgoals,
            mealTiming: thisContext.state.mealTiming,
            healthGoals: thisContext.state.healthGoals,
            portionSize: thisContext.state.portionSize,
            mealpostImgURL: downloadURL,
            userImage: JSON.parse(localStorage.getItem("user")).userImage,
          };

          const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          };

          fetch(
            "http://localhost:8080/api/mealpostService/save",
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
          open={this.state.open}
        >
          <DialogContent>
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Typography variant="h6" textAlign="center">
                  Upload Meal Plan
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Meal Preferences
                  </InputLabel>
                  <Select
                    value={this.state.mealpreferences}
                    onChange={(event) =>
                      this.setState({ mealpreferences: event.target.value })
                    }
                    label="Meal Preferences"
                  >
                    <MenuItem value="vegetarian">Vegetarian</MenuItem>
                    <MenuItem value="vegan">Vegan</MenuItem>
                    <MenuItem value="gluten-free">Gluten-Free</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Calori Goals
                  </InputLabel>
                  <Select
                    value={this.state.caloricgoals}
                    onChange={(event) =>
                      this.setState({ caloricgoals: event.target.value })
                    }
                    label="Calori Goals"
                  >
                    <MenuItem value="less than 1500">less than 1500</MenuItem>
                    <MenuItem value="1500-2000">1500-2000</MenuItem>
                    <MenuItem value="2000-2500">2000-2500</MenuItem>
                    <MenuItem value="2500-4000">2500-4000</MenuItem>
                    <MenuItem value="more than 4000">more than 4000</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Meal Timing
                  </InputLabel>
                  <Select
                    value={this.state.mealTiming}
                    onChange={(event) =>
                      this.setState({ mealTiming: event.target.value })
                    }
                    label="Meal Timing"
                  >
                    <MenuItem value="breakfast">Breakfast</MenuItem>
                    <MenuItem value="lunch">Lunch</MenuItem>
                    <MenuItem value="dinner">Dinner</MenuItem>
                    <MenuItem value="snack">Snack</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Health Goals
                  </InputLabel>
                  <Select
                    value={this.state.healthGoals}
                    onChange={(event) =>
                      this.setState({ healthGoals: event.target.value })
                    }
                    label="Health Goals"
                  >
                    <MenuItem value="weight-loss">Weight Loss</MenuItem>
                    <MenuItem value="muscle-gain">Muscle Gain</MenuItem>
                    <MenuItem value="maintain-weight">Maintain Weight</MenuItem>
                    <MenuItem value="disease-management">
                      Disease Management
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Portion Size
                  </InputLabel>
                  <Select
                    value={this.state.portionSize}
                    onChange={(event) =>
                      this.setState({ portionSize: event.target.value })
                    }
                    label="Portion Size"
                  >
                    <MenuItem value="small">Small</MenuItem>
                    <MenuItem value="medium">Medium</MenuItem>
                    <MenuItem value="large">Large</MenuItem>
                    <MenuItem value="extra-large">Extra Large</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={(event) =>
                    this.setState({ description: event.currentTarget.value })
                  }
                  placeholder="Type your Ingrediants"
                  rows={5}
                  multiline
                  fullWidth
                ></TextField>
              </Grid>
              <Grid item xs={12}>
                <img
                  src={this.state.uploadImage}
                  style={{
                    width: "100%",
                    maxWidth: "600px",
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                {/* <input
            type="button"
            value="Post"
            onClick={this.uploadToFireBase}
            className="upload_button"
          /> */}
                <Button variant="contained" onClick={this.uploadToFireBase}>
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
                <img src={add} width="37px" height="35px" />
                <div className="upload_text">Add Meal Plan</div>
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
