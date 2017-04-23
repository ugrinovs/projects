package com.dicamo;

import com.dicamo.model.Post;
import com.dicamo.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

/**
 * Created by Stefan on 30/10/2016.
 */
@Component
public class TestData {

    @Autowired
    private PostService postService;

    @PostConstruct
    public void init(){
        postService.save(new Post("Naslov", "Neki sadrzaj"));
    }
}
