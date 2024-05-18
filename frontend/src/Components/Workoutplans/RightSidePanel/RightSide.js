import React, { Component } from "react";
import "./RightSide.css";

class RightSide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [], // Initialize data array inside the state
      error: null, // Initialize error state
    };
  }

  // Fetching data
  getData = () => {
    fetch("http://localhost:8080/api/userService/getUserDetails")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((json) => {
        this.setState({ data: json, error: null });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        this.setState({ error: error.message });
      });
  };

  // Fetch data on component mount
  componentDidMount() {
    this.getData();
  }

  render() {
    const { data, error } = this.state;

    return (
      <div className="rightside_container">
        {/* Customized header */}
        <div className="rightside_header">Meet Our FitCon Community</div>
        {/* Rendering member list or error */}
        <div className="rightside_content">
          {error ? (
            <div className="error_message">{error}</div>
          ) : (
            data.map((item, index) => (
              <div className="member_wrapper" key={index}>
                <img className="rounded_square" src={item.userImage} />
                <div className="username_txt">{item.userName}</div>
                <p>{item.text}</p>
              </div>
            ))
          )}
        </div>
        {/* Customized footer */}
        <div className="rightside_footer">
          <p>Join our vibrant community today!</p>
          <button className="join_button">Join FitCon</button>
        </div>
      </div>
    );
  }
}

export default RightSide;
