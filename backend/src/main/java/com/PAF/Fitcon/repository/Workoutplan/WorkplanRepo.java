package com.PAF.Fitcon.repository.Workoutplan;

import com.PAF.Fitcon.model.Workoutplan.Workplan;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.ArrayList;
import java.util.UUID;

public interface WorkplanRepo extends MongoRepository<Workplan, UUID>
{
    ArrayList<Workplan> findAll();
    Workplan save(Workplan workplan);
    void deleteById(UUID planId);
    ArrayList<Workplan> findByUserId(String userId);
    Workplan findByPlanId(UUID planId);
}
