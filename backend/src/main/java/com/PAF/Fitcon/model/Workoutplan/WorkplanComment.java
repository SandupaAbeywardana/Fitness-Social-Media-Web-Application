package com.PAF.Fitcon.model.Workoutplan;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.UUID;

@Document(collection = "Workplancomment")
public class WorkplanComment {

    @Id
    private String commentId;

    private UUID planId;
    private String userId;
    private String userName;
    private String userImage;

    private String Comment;
    private LocalDateTime dateTime;

    public WorkplanComment() {
        super();
    }

    public WorkplanComment(String commentId, UUID planId, String userId, String userName, String userImage, String comment, LocalDateTime dateTime) {
        this.commentId = commentId;
        this.planId = planId;
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
