package com.PAF.Fitcon.model.WorkoutStatus;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


import java.time.LocalDateTime;
import java.util.UUID;

@Document(collection = "workoutstatus")
public class Workoutstatus {

    @Id
    private UUID statusId;

    private String userId;
    private String userName;
    private String userImage;
    private String topic;
    private String burncalories;
    private String workouttime;
    private String workouttype;
    private String description;
    private String workoutstatusImgURL;

    private int likes;
    private LocalDateTime dateTime;

    public Workoutstatus() {
        super();
    }

    public Workoutstatus(UUID statusId, String userId, String userName, String userImage, String topic, String burncalories, String workouttime, String workouttype, String description, String workoutstatusImgURL, int likes, LocalDateTime dateTime) {
        this.statusId = statusId;
        this.userId = userId;
        this.userName = userName;
        this.userImage = userImage;
        this.topic = topic;
        this.burncalories = burncalories;
        this.workouttime = workouttime;
        this.workouttype = workouttype;
        this.description = description;
        this.workoutstatusImgURL = workoutstatusImgURL;
        this.likes = likes;
        this.dateTime = dateTime;
    }

    public UUID getStatusId() {
        return statusId;
    }

    public void setStatusId(UUID statusId) {
        this.statusId = statusId;
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

    public String getTopic() {
        return topic;
    }

    public void setTopic(String topic) {
        this.topic = topic;
    }

    public String getBurncalories() {
        return burncalories;
    }

    public void setBurncalories(String burncalories) {
        this.burncalories = burncalories;
    }

    public String getWorkouttime() {
        return workouttime;
    }

    public void setWorkouttime(String workouttime) {
        this.workouttime = workouttime;
    }

    public String getWorkouttype() {
        return workouttype;
    }

    public void setWorkouttype(String workouttype) {
        this.workouttype = workouttype;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getWorkoutstatusImgURL() {
        return workoutstatusImgURL;
    }

    public void setWorkoutstatusImgURL(String workoutstatusImgURL) {
        this.workoutstatusImgURL = workoutstatusImgURL;
    }

    public int getLikes() {
        return likes;
    }

    public void setLikes(int likes) {
        this.likes = likes;
    }

    public LocalDateTime getDateTime() {
        return dateTime;
    }

    public void setDateTime(LocalDateTime dateTime) {
        this.dateTime = dateTime;
    }
}
