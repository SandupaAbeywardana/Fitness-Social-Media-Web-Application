package com.PAF.Fitcon.service.Post;

import com.PAF.Fitcon.model.Post.Comment;
import com.PAF.Fitcon.repository.Post.CommentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.UUID;

@Service
public class CommentService {

    @Autowired
    CommentRepo commentRepo;

    public Comment saveComment(Comment comment)
    {
        // Set creation timestamp
        LocalDateTime datetime = LocalDateTime.now();

        
        comment.setDateTime(datetime);
        return commentRepo.save(comment);
    }

    //get all comment for one postId
    public ArrayList<Comment> getAllComments(UUID postId)
    {
        return commentRepo.findAllByPostId(postId);
    }
}
