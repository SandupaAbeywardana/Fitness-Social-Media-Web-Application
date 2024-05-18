import React, { Component } from "react";
import "./LoginHome.css";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { Paper } from "@mui/material";
import logo from "../../images/logo/6339887-01-02.png";
import firebase from "../../firebase";

class LoginHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signIN: true,

      //signin
      signin_email: null,
      signin_password: null,
      //signup
      signup_name: null,
      signup_email: null,
      signup_password: null,
    };
  }
  switchPanel = () => {
    if (this.state.signIN) this.setState({ signIN: false });
    else this.setState({ signIN: true });
  };

  signUP = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(
        this.state.signup_email,
        this.state.signup_password
      )
      .then((userCredential) => {
        var user = userCredential.user;

        let payload = {
          userId: user.uid,
          userName: this.state.signup_name,
          userImage:
            "https://images.unsplash.com/photo-1633332755192-727a05c4013d",
        };

        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        };

        fetch("http://localhost:8080/api/userService/save", requestOptions)
          .then((response) => response.json())
          .then((data) => {
            localStorage.setItem("user", JSON.stringify(data));
            window.location.reload();
          });
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error("Sign up error:", errorCode, errorMessage);
        this.setState({ signUpError: errorMessage });

        alert("Failed to sign up: " + errorMessage);
      });
  };
  signInMethod = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(
        this.state.signin_email,
        this.state.signin_password
      )
      .then((userCredential) => {
        var user = userCredential.user;
        fetch("http://localhost:8080/api/userService/getAllUsers/" + user.uid)
          .then((response) => response.json())
          .then((data) => {
            localStorage.setItem("user", JSON.stringify(data));
            window.location.reload();
          });
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;

        console.error("Sign in error:", errorCode, errorMessage);
        this.setState({ signInError: errorMessage });

        alert("Failed to sign in: " + errorMessage);
      });
  };
  render() {
    return (
      <Grid className="main_container">
        <Grid className="main_content" container>
          <Grid item xs={3.5}></Grid>
          <Grid item xs={5}>
            <div className="logo">
              <img src={logo} width="300px" />
            </div>
            <Paper className="logincard_container">
              {this.state.signIN == true ? (
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="outlined-basic"
                      label="Email"
                      variant="outlined"
                      onChange={(event) => {
                        this.state.signin_email = event.currentTarget.value;
                      }}
                      type="email"
                      placeholder="Email address"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="outlined-basic"
                      label="Password"
                      variant="outlined"
                      onChange={(event) => {
                        this.state.signin_password = event.currentTarget.value;
                      }}
                      type="password"
                      placeholder="Password"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    {/* <button
                      onClick={this.signInMethod}
                      className="login_button"
                    >
                      Log In
                    </button> */}
                    <Button
                      onClick={this.signInMethod}
                      variant="contained"
                      color="warning"
                      style={{ width: "100%" }}
                    >
                      Log In
                    </Button>
                    <div>
                      <div className="divider"></div>
                    </div>
                    <div>
                      {/* <button
                        className="login_createnew"
                        onClick={this.switchPanel}
                      >
                        Create New Account
                      </button> */}
                      <Button
                        onClick={this.switchPanel}
                        variant="outlined"
                        color="warning"
                        style={{ width: "100%" }}
                      >
                        Create New Account
                      </Button>
                    </div>
                  </Grid>
                </Grid>
              ) : (
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    {/* <input
                      onChange={(event) => {
                        this.state.signup_name = event.currentTarget.value;
                      }}
                      type="text"
                      className="login_input"
                      placeholder="Name"
                    /> */}
                    <TextField
                      fullWidth
                      id="outlined-basic"
                      label="Name"
                      variant="outlined"
                      onChange={(event) => {
                        this.state.signup_name = event.currentTarget.value;
                      }}
                      type="text"
                      placeholder="Name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="outlined-basic"
                      label="Email"
                      variant="outlined"
                      onChange={(event) => {
                        this.state.signup_email = event.currentTarget.value;
                      }}
                      type="email"
                      placeholder="Email address"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="outlined-basic"
                      label="Password"
                      variant="outlined"
                      onChange={(event) => {
                        this.state.signup_password = event.currentTarget.value;
                      }}
                      type="password"
                      placeholder="Password"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      onClick={this.signUP}
                      variant="contained"
                      color="warning"
                      style={{ width: "100%" }}
                    >
                      Sign Up
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      onClick={this.switchPanel}
                      variant="body2"
                      style={{ cursor: "pointer", color: "#ed6c02" }}
                    >
                      Already have an account?
                    </Typography>
                  </Grid>
                </Grid>
              )}
            </Paper>
          </Grid>
          <Grid item xs={3.5}></Grid>
        </Grid>
      </Grid>
    );
  }
}

export default LoginHome;
