package com.PAF.Fitcon.model.Mealplan;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.UUID;

@Document(collection = "mealposts")
public class MealPost {

    @Id
    private UUID mealId;

    private String userId;
    private String userName;
    private String userImage;

    private String mealpreferences;
    private String caloricgoals;
    private String mealTiming;
    private String healthGoals;
    private String portionSize;
    private String description;
    private String mealpostImgURL;

    private int likes;
    private LocalDateTime dateTime;

    public MealPost() {
        super();
    }

    public MealPost(String userId, String userName, UUID mealId, String userImage, String mealpreferences, String caloricgoals, String mealTiming, String healthGoals, String portionSize, String description, String mealpostImgURL, int likes, LocalDateTime dateTime) {
        this.userId = userId;
        this.userName = userName;
        this.mealId = mealId;
        this.userImage = userImage;
        this.mealpreferences = mealpreferences;
        this.caloricgoals = caloricgoals;
        this.mealTiming = mealTiming;
        this.healthGoals = healthGoals;
        this.portionSize = portionSize;
        this.description = description;
        this.mealpostImgURL = mealpostImgURL;
        this.likes = likes;
        this.dateTime = dateTime;
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

    public String getMealpreferences() {
        return mealpreferences;
    }

    public void setMealpreferences(String mealpreferences) {
        this.mealpreferences = mealpreferences;
    }

    public String getCaloricgoals() {
        return caloricgoals;
    }

    public void setCaloricgoals(String caloricgoals) {
        this.caloricgoals = caloricgoals;
    }

    public String getMealTiming() {
        return mealTiming;
    }

    public void setMealTiming(String mealTiming) {
        this.mealTiming = mealTiming;
    }

    public String getHealthGoals() {
        return healthGoals;
    }

    public void setHealthGoals(String healthGoals) {
        this.healthGoals = healthGoals;
    }

    public String getPortionSize() {
        return portionSize;
    }

    public void setPortionSize(String portionSize) {
        this.portionSize = portionSize;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getLikes() {
        return likes;
    }

    public void setLikes(int likes) {
        this.likes = likes;
    }

    public String getMealpostImgURL() {
        return mealpostImgURL;
    }

    public void setMealpostImgURL(String mealpostImgURL) {
        this.mealpostImgURL = mealpostImgURL;
    }

    public LocalDateTime getDateTime() {
        return dateTime;
    }

    public void setDateTime(LocalDateTime dateTime) {
        this.dateTime = dateTime;
    }
}
