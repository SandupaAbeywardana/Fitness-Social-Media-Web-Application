package com.PAF.Fitcon.repository.Mealplan;

import com.PAF.Fitcon.model.Mealplan.MealComment;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.UUID;

@Repository
public interface MealCommentRepo extends MongoRepository<MealComment, String> {

    MealComment save(MealComment mealComment);

    //get all comment for one postId
    ArrayList<MealComment> findAllByMealId(UUID mealId);
}
