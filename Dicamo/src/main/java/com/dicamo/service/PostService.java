package com.dicamo.service;

import com.dicamo.model.Post;

import java.util.List;

/**
 * Created by Stefan on 30/10/2016.
 */
public interface PostService {

    List<Post> findAll();

    Post save(Post post);

    List<Post> save(List<Post> posts);
}
