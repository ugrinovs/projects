package com.dicamo.service;

import com.dicamo.model.Post;
import org.springframework.data.domain.Page;

import java.util.List;

/**
 * Created by Stefan on 14/11/2016.
 */
public interface PostService {

    Post save(Post post);

    Post remove(Post post);

    List<Post> save(List<Post> posts);

    List<Post> remove(List<Post> post);

    Post findOne(Long id);

    Page<Post> findAll(int page, int size);
}
