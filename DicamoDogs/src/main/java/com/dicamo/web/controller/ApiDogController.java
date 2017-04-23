package com.dicamo.web.controller;

import com.dicamo.model.Dog;
import com.dicamo.service.DogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by Stefan on 11/11/2016.
 */
@RestController
@RequestMapping(value = "/api/dog")
public class ApiDogController
{
    @Autowired
    private DogService dogService;

    @RequestMapping(method = RequestMethod.GET)
    public List<Dog> getDogs() {
        return dogService.findAll();
    }

    @RequestMapping(value="/{id}", method = RequestMethod.GET)
    public Dog getDog(@PathVariable Long id){
        return dogService.findOne(id);
    }
}
