package com.PAF.Fitcon.model.User;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Document(collection = "user")
public class User {

    @Id
    private String userId;

    private String userName;
    private String userImage;
    private boolean active;
    private LocalDateTime joiningDate;

    public User() {
        super();
    }

    public User(String userId, String userName, String userImage, boolean active, LocalDateTime joiningDate) {
        super();
        this.userId = userId;
        this.userName = userName;
        this.userImage = userImage;
        this.active = active;
        this.joiningDate = joiningDate;
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

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public LocalDateTime getJoiningDate() {
        return joiningDate;
    }

    public void setJoiningDate(LocalDateTime joiningDate) {
        this.joiningDate = joiningDate;
    }
}
