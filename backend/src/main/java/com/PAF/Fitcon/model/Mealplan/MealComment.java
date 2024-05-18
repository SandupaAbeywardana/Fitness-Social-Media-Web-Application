package com.PAF.Fitcon.model.Mealplan;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.UUID;

@Document(collection = "MealComment")
public class MealComment {

    @Id
    private String commentId;

    private UUID mealId;
    private String userId;
    private String userName;
    private String userImage;

    private String Comment;
    private LocalDateTime dateTime;


    public MealComment() {
        super();
    }

    public MealComment(String commentId, UUID mealId, String userId, String userName, String userImage, String comment, LocalDateTime dateTime) {
        this.commentId = commentId;
        this.mealId = mealId;
        this.userId = userId;
        this.userName = userName;
        this.userImage = userImage;
        Comment = comment;
        this.dateTime = dateTime;
    }

    public String getCommentId() {
        return commentId;
    }

    public void setCommentId(String commentId) {
        this.commentId = commentId;
    }

    public UUID getMealId() {
        return mealId;
    }

    public void setMealId(UUID mealId) {
        this.mealId = mealId;
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

    public String getComment() {
        return Comment;
    }

    public void setComment(String comment) {
        Comment = comment;
    }

    public LocalDateTime getDateTime() {
        return dateTime;
    }

    public void setDateTime(LocalDateTime dateTime) {
        this.dateTime = dateTime;
    }
}
