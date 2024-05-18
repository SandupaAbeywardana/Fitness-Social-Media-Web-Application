package com.PAF.Fitcon.service.Workoutplan;

import com.PAF.Fitcon.model.Workoutplan.Workplan;
import com.PAF.Fitcon.repository.Workoutplan.WorkplanRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.UUID;

@Service
public class WorkplanService {

    @Autowired
    WorkplanRepo workplanRepo;


    public ArrayList<Workplan> submitPostToDB(Workplan postData)
    {
        // Set creation timestamp
        LocalDateTime datetime = LocalDateTime.now();

        //set random post id ,likes and date & time
        postData.setPlanId(UUID.randomUUID());
        postData.setLikes(0);
        postData.setDateTime(datetime);


        workplanRepo.save(postData);

        ArrayList<Workplan> result = retrievePostFromDB();
        return result;
    }
    public ArrayList<Workplan> retrievePostFromDB()
    {
        ArrayList<Workplan> result = workplanRepo.findAll();
        return result;

    }
    public ArrayList<Workplan> deletePostFromDB(UUID planId)
    {
        workplanRepo.deleteById(planId);
        ArrayList<Workplan> result = retrievePostFromDB();
        return result;
    }
    public ArrayList<Workplan> retrieveOneUserPostFromDB(String userId)
    {
        ArrayList<Workplan> result = workplanRepo.findByUserId(userId);
        return result;

    }

    public Workplan updatePostbyId(UUID planId,Workplan newworkplan)
    {
        Workplan workplan = workplanRepo.findByPlanId(planId);

        workplan.setDescription(newworkplan.getDescription());
        workplan.setFitnessgoal(newworkplan.getFitnessgoal());
        workplan.setExercisedetails(newworkplan.getExercisedetails());
        workplan.setPostImgURL(newworkplan.getPostImgURL());
        workplan.setRestdays(newworkplan.getRestdays());
        workplan.setFitnesslevel(newworkplan.getFitnesslevel());


        return workplanRepo.save(workplan);
    }



}
