package com.dicamo.repository;

import com.dicamo.model.Dog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by Stefan on 11/11/2016.
 */

@Repository
public interface DogRepository extends JpaRepository<Dog, Long> {

}
