package com.PAF.Fitcon.controller.Mealplan;

import com.PAF.Fitcon.model.Mealplan.MealComment;
import com.PAF.Fitcon.service.Mealplan.MealCommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.UUID;

@CrossOrigin
@RestController
@RequestMapping("/api/mealcommentService")
public class MealCommentController {

    @Autowired
    MealCommentService mealCommentService;

    @PostMapping("/save")
    public MealComment saveMealComment(@RequestBody MealComment mealComment)
    {
        return mealCommentService.saveMealComment(mealComment);
    }

    //get all comment for one postId
    @GetMapping("/getAllComments/{mealId}")
    public ArrayList<MealComment> getAllMealComments(@PathVariable("mealId") UUID mealId)
    {
        return mealCommentService.getAllMealComments(mealId);
    }
}
