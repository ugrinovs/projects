package com.dicamo.repository;

import com.dicamo.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by Stefan on 30/10/2016.
 */
@Repository
public interface PostRepository extends JpaRepository<Post, Long>{
}
