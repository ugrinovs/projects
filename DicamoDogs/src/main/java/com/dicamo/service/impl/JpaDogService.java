package com.dicamo.service.impl;

import com.dicamo.model.Dog;
import com.dicamo.repository.DogRepository;
import com.dicamo.service.DogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Stefan on 11/11/2016.
 */
@Service
public class JpaDogService implements DogService {

    @Autowired
    private DogRepository dogRepository;

    @Override
    public Dog save(Dog dog) {
        return dogRepository.save(dog);
    }

    @Override
    public void remove(Long id) {
        dogRepository.delete(id);
    }

    @Override
    public Dog findOne(Long id) {
        return dogRepository.findOne(id);
    }

    @Override
    public List<Dog> findAll() {
        return dogRepository.findAll();
    }
}
