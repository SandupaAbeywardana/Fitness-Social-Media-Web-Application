package com.PAF.Fitcon.controller.WorkoutStatus;


import com.PAF.Fitcon.model.WorkoutStatus.Workoutstatus;
import com.PAF.Fitcon.service.WorkoutStatus.WorkoutstatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.UUID;

@CrossOrigin
@RestController
@RequestMapping("/api/workoutService")
public class Workoutstatuscontroller {

    @Autowired
    WorkoutstatusService workoutstatusservice;


    @PostMapping("/save")
    public ResponseEntity<ArrayList<Workoutstatus>> submitworkoutstatus(@RequestBody Workoutstatus body){
        ArrayList<Workoutstatus> result = workoutstatusservice.submitWorkoutstatusToDB(body);
        return ResponseEntity.ok(result);
    }
    @GetMapping("/getPost")
    public ResponseEntity<ArrayList<Workoutstatus>> retrieveAllworkoutstatus(){
        ArrayList<Workoutstatus> result = workoutstatusservice.retrieveWorkoutstatusFromDB();
        return ResponseEntity.ok(result);
    }
    @GetMapping("/getPost/{userId}")
    public ResponseEntity<ArrayList<Workoutstatus>> retrieveOneUserPost(@PathVariable("userId") String userId){
        ArrayList<Workoutstatus> result = workoutstatusservice.retrieveOneUserPostFromDB(userId);
        return ResponseEntity.ok(result);
    }
    @DeleteMapping("/delete/{statusId}")
    public ResponseEntity<ArrayList<Workoutstatus>> deleteParticularworkoutstatus (@PathVariable("statusId") UUID statusId){
        ArrayList<Workoutstatus> result = workoutstatusservice.deleteWorkoutstatusFromDB(statusId);
        return ResponseEntity.ok(result);
    }

    @PatchMapping("/update/{statusId}")
    public ResponseEntity <Workoutstatus> updateParticularworkoutstatus(@PathVariable("statusId") UUID statusId,@RequestBody Workoutstatus body)
    {
        Workoutstatus result = workoutstatusservice.updateworkoutstatus(statusId,body);

        return ResponseEntity.ok(result);
    }


}
