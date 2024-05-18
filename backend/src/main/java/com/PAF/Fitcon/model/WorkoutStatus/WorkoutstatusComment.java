package com.PAF.Fitcon.model.WorkoutStatus;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.UUID;

@Document(collection = "workoutstatuscomment")
public class WorkoutstatusComment {

    @Id
    private String commentId;

    private UUID statusId;
    private String userId;
    private String userName;
    private String userImage;

    private String Comment;
    private LocalDateTime dateTime;

    public WorkoutstatusComment() {
        super();
    }

    public WorkoutstatusComment(UUID statusId, String commentId, String userId, String userName, String userImage, String comment, LocalDateTime dateTime) {
        this.statusId = statusId;
        this.commentId = commentId;
        this.userId = userId;
        this.userName = userName;
        this.userImage = userImage;
        Comment = comment;
        this.dateTime = dateTime;
    }

    public UUID getStatusId() {
        return statusId;
    }

    public void setStatusId(UUID statusId) {
        this.statusId = statusId;
    }

    public String getCommentId() {
        return commentId;
    }

    public void setCommentId(String commentId) {
        this.commentId = commentId;
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
