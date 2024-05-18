package com.PAF.Fitcon.controller.Post;

import com.PAF.Fitcon.model.Post.Post;
import com.PAF.Fitcon.service.Post.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.UUID;

@CrossOrigin
@RestController
@RequestMapping("/api/postService")
public class PostController {

    @Autowired
    PostService postService;

    @PostMapping("/save")
    public ResponseEntity<ArrayList<Post>> submitPost(@RequestBody Post body){
        ArrayList<Post> result = postService.submitPostToDB(body);
        return ResponseEntity.ok(result);
    }

    @GetMapping("/getPost")
    public ResponseEntity<ArrayList<Post>> retrieveAllPost(){
        ArrayList<Post> result = postService.retrievePostFromDB();
        return ResponseEntity.ok(result);
    }

    @GetMapping("/getPost/{userId}")
    public ResponseEntity<ArrayList<Post>> retrieveOneUserPost(@PathVariable("userId") String userId){
        ArrayList<Post> result = postService.retrieveOneUserPostFromDB(userId);
        return ResponseEntity.ok(result);
    }

    @DeleteMapping("/delete/{postId}")
    public ResponseEntity<ArrayList<Post>> deleteParticularPost (@PathVariable("postId") UUID postId){
        ArrayList<Post> result = postService.deletePostFromDB(postId);

        return ResponseEntity.ok(result);
    }

    @PatchMapping("/update/{postId}")
    public ResponseEntity <Post> updateParticularPost (@PathVariable("postId") UUID postId , @RequestBody Post body){

        Post result = postService.updatePostbyId(postId,body);

        return  ResponseEntity.ok(result);

    }










}
