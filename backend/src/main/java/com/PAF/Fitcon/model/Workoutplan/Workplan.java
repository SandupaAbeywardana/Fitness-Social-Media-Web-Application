package com.PAF.Fitcon.model.Workoutplan;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.UUID;

@Document(collection = "workoutplan")
public class Workplan {

    @Id
    private UUID planId;

    private String userId;
    private String userName;
    private String userImage;

    private String fitnessgoal;
    private String exercisedetails;
    private String restdays;
    private String fitnesslevel;
    private String description;
    private String postImgURL;

    private int likes;
    private LocalDateTime dateTime;

    public Workplan() {
        super();
    }

    public Workplan(UUID planId, String userId, String userName, String userImage, String fitnessgoal, String exercisedetails, String restdays, String fitnesslevel, String description, int likes, String postImgURL, LocalDateTime dateTime) {
        this.planId = planId;
        this.userId = userId;
        this.userName = userName;
        this.userImage = userImage;
        this.fitnessgoal = fitnessgoal;
        this.exercisedetails = exercisedetails;
        this.restdays = restdays;
        this.fitnesslevel = fitnesslevel;
        this.description = description;
        this.likes = likes;
        this.postImgURL = postImgURL;
        this.dateTime = dateTime;
    }

    public UUID getPlanId() {
        return planId;
    }

    public void setPlanId(UUID planId) {
        this.planId = planId;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserImage() {
        return userImage;
    }

    public void setUserImage(String userImage) {
        this.userImage = userImage;
    }

    public String getFitnessgoal() {
        return fitnessgoal;
    }

    public void setFitnessgoal(String fitnessgoal) {
        this.fitnessgoal = fitnessgoal;
    }

    public String getExercisedetails() {
        return exercisedetails;
    }

    public void setExercisedetails(String exercisedetails) {
        this.exercisedetails = exercisedetails;
    }

    public String getRestdays() {
        return restdays;
    }

    public void setRestdays(String restdays) {
        this.restdays = restdays;
    }

    public String getFitnesslevel() {
        return fitnesslevel;
    }

    public void setFitnesslevel(String fitnesslevel) {
        this.fitnesslevel = fitnesslevel;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPostImgURL() {
        return postImgURL;
    }

    public void setPostImgURL(String postImgURL) {
        this.postImgURL = postImgURL;
    }

    public LocalDateTime getDateTime() {
        return dateTime;
    }

    public void setDateTime(LocalDateTime dateTime) {
        this.dateTime = dateTime;
    }

    public int getLikes() {
        return likes;
    }

    public void setLikes(int likes) {
        this.likes = likes;
    }
}
