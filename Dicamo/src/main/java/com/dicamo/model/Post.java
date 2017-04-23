package com.dicamo.model;


import javax.persistence.*;

/**
 * Created by Stefan on 30/10/2016.
 */
@Entity
@Table(name="posts")
public class Post {

    @Id
    @GeneratedValue
    @Column(name="id")
    private Long id;

    @Column(name="title")
    private String title;

    @Column(name="content")
    private String content;

    public Post() {
    }

    public Post(String title, String content) {
        this.title = title;
        this.content = content;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
