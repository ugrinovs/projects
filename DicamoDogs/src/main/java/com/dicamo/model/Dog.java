package com.dicamo.model;

import javax.persistence.*;

/**
 * Created by Stefan on 11/11/2016.
 */
@Entity
@Table(name="dogs")
public class Dog {
    @Id
    @Column(name = "id")
    @GeneratedValue
    private Long id;


    @Column(name="name")
    private String name;

    public Dog() {
    }

    public Dog(String name) {
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
