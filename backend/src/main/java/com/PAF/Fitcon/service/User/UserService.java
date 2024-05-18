package com.PAF.Fitcon.service.User;

import com.PAF.Fitcon.model.User.User;
import com.PAF.Fitcon.repository.User.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;

@Service
public class UserService {

    @Autowired
    UserRepo userRepo;

    public User submitMetaDataOfUser(User user){
        // Set creation timestamp
        LocalDateTime datetime = LocalDateTime.now();


        user.setActive(true);
        user.setJoiningDate(datetime);

        return userRepo.save(user);
    }
    public ArrayList<User> retrieveAllUserDetails(){
        return userRepo.findAll();
    }
    public User getUserData(String userId) {
        return userRepo.findAllByUserId(userId);
    }

    // Method to update user data
    public User updateUserData(String userId, User updatedUser) {
        User existingUser = userRepo.findAllByUserId(userId);
        if (existingUser != null) {

            existingUser.setUserName(updatedUser.getUserName());
            existingUser.setUserImage(updatedUser.getUserImage());

            return userRepo.save(existingUser);
        } else {

            return null;
        }
    }
}
