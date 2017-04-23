package com.dicamo.web.controller;

import com.dicamo.model.Post;
import com.dicamo.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

/**
 * Created by Stefan on 14/11/2016.
 */
@RestController
@RequestMapping(value="/api/posts")
public class ApiPostController {

    @Autowired
    private PostService postService;

    @RequestMapping(method = RequestMethod.GET)
    public Page<Post> getAll(@RequestParam(defaultValue = "0") Integer page, @RequestParam(defaultValue = "10") Integer size){
        return postService.findAll(page, size);
    }

    @RequestMapping( method = RequestMethod.POST, consumes = "application/json")
    public Post addPost(@RequestBody Post post) {
        if(post != null){
            postService.save(post);
        }
        return post;
    }
}
