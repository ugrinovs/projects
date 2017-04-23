package com.dicamo.repository;

import com.dicamo.model.Post;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by Stefan on 14/11/2016.
 */
@Repository
public interface PostRepository extends PagingAndSortingRepository<Post, Long> {
}
