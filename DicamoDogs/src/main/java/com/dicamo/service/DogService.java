package com.dicamo.service;

import com.dicamo.model.Dog;

import java.util.List;

/**
 * Created by Stefan on 11/11/2016.
 */
public interface DogService {

    Dog save(Dog dog);

    void remove(Long id);

    Dog findOne(Long id);

    List<Dog> findAll();
}
