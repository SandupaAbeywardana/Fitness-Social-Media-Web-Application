import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import React, { Component } from "react";
import logo from "../../images/logo/6339887-05.png";
import "./NavBar.css";

import { Icon } from "@iconify/react";

import UserDropDown from "./UserDropdown";
import { Link, useNavigate } from "react-router-dom";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userImage: "",
      userName: "",
    };
  }

  componentDidMount() {
    const userId = JSON.parse(localStorage.getItem("user")).userId;
    fetch(`http://localhost:8080/api/userService/getAllUsers/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ userImage: data.userImage });
        this.setState({ userName: data.userName });
      })
      .catch((error) => {
        console.error("Error fetching user image URL:", error);
      });
  }
  state = {};
  render() {
    return (
      <div>
        <Grid container className="navbar_main">
          <Grid item xs={5}>
            <div className="navbar_leftbar">
              <img class="navbar_logo" src={logo} width="160px" />
              <input
                className="navbar_search"
                type="text"
                placeholder="Search FitCon"
              />
            </div>
          </Grid>
          <Grid item xs={5}>
            <div className="navbar_container">
              <div className="navbar_tabs">
                <Link
                  to={"/"}
                  style={{
                    textDecoration: "none",
                    color: "black",
                    underline: "none",
                  }}
                >
                  <Icon icon="mdi:feedback-outline" fontSize={30} />
                </Link>
              </div>

              <div className="navbar_tabs">
                <Link
                  to={"/workoutplans"}
                  style={{
                    textDecoration: "none",
                    color: "black",
                    underline: "none",
                  }}
                >
                  <Icon icon="akar-icons:calendar" fontSize={30} />
                </Link>
              </div>

              <div
                className="navbar_tabs"
                style={{
                  textDecoration: "none",
                  color: "black",
                  underline: "none",
                }}
              >
                <Link
                  to={"/workoutstatus"}
                  style={{
                    textDecoration: "none",
                    color: "black",
                    underline: "none",
                  }}
                >
                  <Icon icon="majesticons:chat-status-line" fontSize={30} />
                </Link>
              </div>

              <div className="navbar_tabs">
                <Link
                  to={"/mealplans"}
                  style={{
                    textDecoration: "none",
                    color: "black",
                    underline: "none",
                  }}
                >
                  <Icon icon="cbi:mealie" fontSize={30} />
                </Link>
              </div>
            </div>
          </Grid>
          <Grid item xs={1}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                my: 1,
                mx: 2,
              }}
            >
              <UserDropDown />
            </Box>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default NavBar;
