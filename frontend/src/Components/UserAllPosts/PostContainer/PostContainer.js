import React, { Component } from "react";
import "./PostContainer.css";
import Post from "./Post";
import Post2 from "./MealPost";
import Post3 from "./WorkoutPlan";
import Post4 from "./WorkoutStatus";

class PostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      mealPosts: [],
      workoutstatus: [],
      workoutplans: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    const userId = JSON.parse(localStorage.getItem("user")).userId;

    fetch(`http://localhost:8080/api/postService/getPost/${userId}`)
      .then((response) => response.json())
      .then((json) => {
        this.setState({ posts: json });
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });

    fetch(`http://localhost:8080/api/mealpostService/getPost/${userId}`)
      .then((response) => response.json())
      .then((json) => {
        this.setState({ mealPosts: json });
      })
      .catch((error) => {
        console.error("Error fetching meal posts:", error);
      });

    fetch(`http://localhost:8080/api/workplanService/getPost/${userId}`)
      .then((response) => response.json())
      .then((json) => {
        this.setState({ workoutplans: json });
      })
      .catch((error) => {
        console.error("Error fetching workout plans:", error);
      });

    fetch(`http://localhost:8080/api/workoutService/getPost/${userId}`)
      .then((response) => response.json())
      .then((json) => {
        this.setState({ workoutstatus: json });
      })
      .catch((error) => {
        console.error("Error fetching workout status:", error);
      });
  };

  render() {
    const { posts, mealPosts, workoutstatus, workoutplans } = this.state;

    // Rendering regular posts
    const regularPostComponents = posts.map((item) => (
      <Post key={item.id} object={item} />
    ));

    // Rendering meal posts
    const mealPostComponents = mealPosts.map((item) => (
      <Post2 key={item.id} object={item} />
    ));

    const workoutstatusComponents = workoutstatus.map((item) => (
      <Post4 key={item.id} object={item} />
    ));

    const workoutplansComponents = workoutplans.map((item) => (
      <Post3 key={item.id} object={item} />
    ));

    return (
      <div className="post-container">
        <div className="regular-posts">{regularPostComponents}</div>

        <div className="meal-posts">{mealPostComponents}</div>

        <div className="workout-status">{workoutstatusComponents}</div>

        <div className="workout-plans">{workoutplansComponents}</div>
      </div>
    );
  }
}

export default PostContainer;
