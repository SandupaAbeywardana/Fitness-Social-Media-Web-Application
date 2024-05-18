package com.PAF.Fitcon.model.Post;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


import java.time.LocalDateTime;
import java.util.UUID;

@Document(collection = "posts")
public class Post {

    @Id
    private UUID postId;

    private String userId;
    private String userName;
    private String userImage;

    private String description;
    private String postImgURL;

    private int likes;
    private LocalDateTime dateTime;

    public Post(String userId, UUID postId, String userName, String userImage, String description, String postImgURL, int likes, LocalDateTime dateTime) {
        this.userId = userId;
        this.postId = postId;
        this.userName = userName;
        this.userImage = userImage;
        this.description = description;
        this.postImgURL = postImgURL;
        this.likes = likes;
        this.dateTime = dateTime;
    }

    public UUID getPostId() {
        return postId;
    }

    public void setPostId(UUID postId) {
        this.postId = postId;
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
