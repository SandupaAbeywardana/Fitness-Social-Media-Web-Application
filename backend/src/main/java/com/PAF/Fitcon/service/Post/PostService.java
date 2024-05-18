package com.PAF.Fitcon.service.Post;

import com.PAF.Fitcon.model.Post.Post;
import com.PAF.Fitcon.repository.Post.PostRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.UUID;

@Service
public class PostService {

    @Autowired
    PostRepo postRepo;


    public ArrayList<Post> submitPostToDB(Post postData)
    {
        // Set creation timestamp
        LocalDateTime datetime = LocalDateTime.now();

        //set random post id ,likes and date & time
        postData.setPostId(UUID.randomUUID());
        postData.setLikes(0);
        postData.setDateTime(datetime);


        postRepo.save(postData);

        ArrayList<Post> result = retrievePostFromDB();
        return result;
    }
    public ArrayList<Post> retrievePostFromDB()
    {
        ArrayList<Post> result = postRepo.findAll();
        return result;

    }
    public ArrayList<Post> deletePostFromDB(UUID postId)
    {
        postRepo.deleteById(postId);
        ArrayList<Post> result = retrievePostFromDB();
        return result;
    }
    public ArrayList<Post> retrieveOneUserPostFromDB(String userId)
    {
        ArrayList<Post> result = postRepo.findByUserId(userId);
        return result;

    }

    public Post updatePostbyId(UUID postId , Post newpost)
    {
        Post post = postRepo.findByPostId(postId);

        post.setPostImgURL(newpost.getPostImgURL());
        post.setDescription(newpost.getDescription());

       return  postRepo.save(post);




    }



}
