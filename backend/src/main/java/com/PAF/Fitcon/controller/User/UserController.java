package com.PAF.Fitcon.controller.User;

import com.PAF.Fitcon.model.User.User;
import com.PAF.Fitcon.service.User.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@CrossOrigin
@RestController
@RequestMapping("/api/userService")
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("/save")
    public User saveUserMetaData(@RequestBody User user){
        return userService.submitMetaDataOfUser(user);
    }
    @GetMapping("/getUserDetails")
    public ArrayList<User> getAllUserDetails(){
        return userService.retrieveAllUserDetails();
    }
    @GetMapping("/getAllUsers/{userId}")
    public User getUserDetail(@PathVariable("userId") String userId) {
        return userService.getUserData(userId);
    }
    @PutMapping("/update/{userId}")
    public User updateUserDetail(@PathVariable("userId") String userId, @RequestBody User user) {
        return userService.updateUserData(userId, user);
    }

}
