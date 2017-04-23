package com.dicamo.controller;

import com.dicamo.model.Post;
import com.dicamo.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by Stefan on 30/10/2016.
 */
@RestController
@RequestMapping(value="/api/posts")
public class ApiPostController {

    @Autowired
    private PostService postService;

    @RequestMapping(method = RequestMethod.GET)
    public List<Post> getPosts(){
        return postService.findAll();
    }
}
