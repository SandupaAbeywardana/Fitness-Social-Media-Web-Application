import React, { Component, createRef } from "react";
import "./MainPage.css";
import Grid from "@mui/material/Grid";
import LeftSide from "./LeftSidePanel/LeftSide";
import PostContainer from "./PostContainer/PostContainer";
import RightSide from "./RightSidePanel/RightSide";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  letUpdate = () => {
    this.refs.child.getData();
    console.log(this.refs.child.getData());
  };

  render() {
    return (
      <div className="mainpage_container">
        <Grid container>
          <Grid item xs={2}></Grid>
          <Grid item xs={6} className="middleContainer">
            {/* <StatusBar/> */}
            {/* <UploadSection update={this.letUpdate} /> */}
            <PostContainer ref="child" />
          </Grid>
          <Grid item xs={4}>
            <RightSide />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Layout;
