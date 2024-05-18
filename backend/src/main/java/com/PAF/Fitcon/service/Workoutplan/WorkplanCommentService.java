package com.PAF.Fitcon.service.Workoutplan;

import com.PAF.Fitcon.model.Workoutplan.WorkplanComment;
import com.PAF.Fitcon.repository.Workoutplan.WorkplanCommentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.UUID;

@Service
public class WorkplanCommentService {

    @Autowired
    WorkplanCommentRepo workplanCommentRepo;

    public WorkplanComment saveWorkplanComment(WorkplanComment workplanComment)
    {
        // Set creation timestamp
        LocalDateTime datetime = LocalDateTime.now();


        workplanComment.setDateTime(datetime);

        return workplanCommentRepo.save(workplanComment);
    }

    //get all comment for one postId
    public ArrayList<WorkplanComment> getAllWorkplanComment(UUID planId)
    {
        return workplanCommentRepo.findAllByplanId(planId);
    }
}
