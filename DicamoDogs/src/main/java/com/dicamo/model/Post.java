package com.dicamo.model;

import javax.persistence.*;

/**
 * Created by Stefan on 14/11/2016.
 */
@Entity
@Table(name="posts")
public class Post {

    @Id
    @GeneratedValue
    @Column(name="id")
    private Long id;

    @Column(name = "post")
    private String post;

    public Post() {
    }

    public Post(String post) {
        this.post = post;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPost() {
        return post;
    }

    public void setPost(String post) {
        this.post = post;
    }
}
