package com.PAF.Fitcon.controller.Mealplan;

import com.PAF.Fitcon.model.Mealplan.MealPost;
import com.PAF.Fitcon.service.Mealplan.MealPostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.UUID;

@CrossOrigin
@RestController
@RequestMapping("/api/mealpostService")
public class MealPostController {

    @Autowired
    MealPostService mealPostService;

    @PostMapping("/save")
    public ResponseEntity<ArrayList<MealPost>> submitMealPost(@RequestBody MealPost body){
        ArrayList<MealPost> result = mealPostService.submitMealPostToDB(body);
        return ResponseEntity.ok(result);
    }
    @GetMapping("/getPost")
    public ResponseEntity<ArrayList<MealPost>> retrieveAllMealPost(){
        ArrayList<MealPost> result = mealPostService.retrieveMealPostFromDB();
        return ResponseEntity.ok(result);
    }
    @GetMapping("/getPost/{userId}")
    public ResponseEntity<ArrayList<MealPost>> retrieveOneUserMealPost(@PathVariable("userId") String userId){
        ArrayList<MealPost> result = mealPostService.retrieveOneUserMealPostFromDB(userId);
        return ResponseEntity.ok(result);
    }
    @DeleteMapping("/delete/{mealId}")
    public ResponseEntity<ArrayList<MealPost>> deleteParticularMealPost (@PathVariable("mealId") UUID mealId){
        ArrayList<MealPost> result = mealPostService.deleteMealPostFromDB(mealId);
        return ResponseEntity.ok(result);
    }
    @PatchMapping("/update/{mealId}")
    public ResponseEntity <MealPost> updateParticularMealpost (@PathVariable("mealId") UUID mealId , @RequestBody MealPost body)
    {
        MealPost result = mealPostService.updateMealpostbyId(mealId,body);

        return ResponseEntity.ok(result);
    }
}
