package com.PAF.Fitcon.repository.Mealplan;

import com.PAF.Fitcon.model.Mealplan.MealPost;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.UUID;

@Repository
public interface MealPostRepo extends MongoRepository<MealPost, UUID> {

    ArrayList<MealPost> findAll();
    MealPost save(MealPost mealPost);
    void deleteById(UUID mealId);
    ArrayList<MealPost> findByUserId(String userId);
    MealPost findByMealId(UUID mealId);
}
