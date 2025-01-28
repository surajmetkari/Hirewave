

package com.example.signup.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.signup.entity.Job;

@Repository
public interface JobRepository extends JpaRepository<Job, Long> {
}
