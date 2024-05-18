package com.PAF.Fitcon.controller.Workoutplan;

import com.PAF.Fitcon.model.Workoutplan.Workplan;
import com.PAF.Fitcon.service.Workoutplan.WorkplanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.UUID;

@CrossOrigin
@RestController
@RequestMapping("/api/workplanService")
public class WorkplanController {

    @Autowired
    WorkplanService workplanService;

    @PostMapping("/save")
    public ResponseEntity<ArrayList<Workplan>> submitPost(@RequestBody Workplan body){
        ArrayList<Workplan> result = workplanService.submitPostToDB(body);
        return ResponseEntity.ok(result);
    }
    @GetMapping("/getPost")
    public ResponseEntity<ArrayList<Workplan>> retrieveAllPost(){
        ArrayList<Workplan> result = workplanService.retrievePostFromDB();
        return ResponseEntity.ok(result);
    }
    @GetMapping("/getPost/{userId}")
    public ResponseEntity<ArrayList<Workplan>> retrieveOneUserPost(@PathVariable("userId") String userId){
        ArrayList<Workplan> result = workplanService.retrieveOneUserPostFromDB(userId);
        return ResponseEntity.ok(result);
    }
    @DeleteMapping("/delete/{planId}")
    public ResponseEntity<ArrayList<Workplan>> deleteParticularPost (@PathVariable("planId") UUID planId){
        ArrayList<Workplan> result = workplanService.deletePostFromDB(planId);
        return ResponseEntity.ok(result);
    }

    @PatchMapping("/update/{planId}")
    public ResponseEntity <Workplan> updateParticularPost(@PathVariable("planId") UUID planId,@RequestBody Workplan body)
    {
        Workplan result = workplanService.updatePostbyId(planId,body);

        return ResponseEntity.ok(result);
    }


}
