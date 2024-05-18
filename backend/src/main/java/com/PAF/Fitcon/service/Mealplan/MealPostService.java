package com.PAF.Fitcon.service.Mealplan;

import com.PAF.Fitcon.model.Mealplan.MealPost;

import com.PAF.Fitcon.repository.Mealplan.MealPostRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.UUID;

@Service
public class MealPostService {

    @Autowired
    MealPostRepo mealPostRepo;


    public ArrayList<MealPost> submitMealPostToDB(MealPost mealPostData)
    {
        // Set creation timestamp
        LocalDateTime datetime = LocalDateTime.now();

        //set random post id ,likes and date & time
        mealPostData.setMealId(UUID.randomUUID());
        mealPostData.setLikes(0);
        mealPostData.setDateTime(datetime);


        mealPostRepo.save(mealPostData);

        ArrayList<MealPost> result = retrieveMealPostFromDB();
        return result;


    }
    public ArrayList<MealPost> retrieveMealPostFromDB()
    {
        ArrayList<MealPost> result = mealPostRepo.findAll();
        return result;

    }
    public ArrayList<MealPost> deleteMealPostFromDB(UUID mealId)
    {
        mealPostRepo.deleteById(mealId);
        ArrayList<MealPost> result = retrieveMealPostFromDB();
        return result;
    }
    public ArrayList<MealPost> retrieveOneUserMealPostFromDB(String userId)
    {
        ArrayList<MealPost> result = mealPostRepo.findByUserId(userId);
        return result;

    }
    public MealPost updateMealpostbyId(UUID mealId,MealPost newmealpost)
    {
        MealPost mealPost = mealPostRepo.findByMealId(mealId);

        mealPost.setMealpreferences(newmealpost.getMealpreferences());
        mealPost.setCaloricgoals(newmealpost.getCaloricgoals());
        mealPost.setMealTiming(newmealpost.getMealTiming());
        mealPost.setHealthGoals(newmealpost.getHealthGoals());
        mealPost.setPortionSize(newmealpost.getPortionSize());
        mealPost.setDescription(newmealpost.getDescription());
        mealPost.setMealpostImgURL(newmealpost.getMealpostImgURL());

        return mealPostRepo.save(mealPost);


    }

}
