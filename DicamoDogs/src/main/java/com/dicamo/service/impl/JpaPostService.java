package com.dicamo.service.impl;

import com.dicamo.model.Post;
import com.dicamo.repository.PostRepository;
import com.dicamo.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by Stefan on 14/11/2016.
 */
@Service
@Transactional
public class JpaPostService implements PostService{

    @Autowired
    private PostRepository postRepository;

    @Override
    public Post save(Post post) {
        return postRepository.save(post);
    }

    @Override
    public Post remove(Post post) {
        postRepository.delete(post);
        return post;
    }

    @Override
    public List<Post> save(List<Post> posts) {
        postRepository.save(posts);
        return posts;
    }

    @Override
    public List<Post> remove(List<Post> posts) {
        postRepository.delete(posts);
        return posts;
    }

    @Override
    public Post findOne(Long id) {
        return postRepository.findOne(id);
    }

    @Override
    public Page<Post> findAll(int page, int size) {
        return postRepository.findAll(new PageRequest(page, size));
    }
}
