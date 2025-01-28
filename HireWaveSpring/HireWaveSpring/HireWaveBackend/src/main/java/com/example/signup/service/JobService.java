
package com.example.signup.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.signup.entity.Job;
import com.example.signup.repository.JobRepository;

//@Service
//public class JobService {
//
//    @Autowired
//    private JobRepository jobRepository;
//
//    public Job saveJob(Job job) {
//        return jobRepository.save(job);
//    }
//
//    public List<Job> getAllJobs() {
//        return jobRepository.findAll(); // This fetches all jobs from the database
//    }
//}


@Service
public class JobService {

    @Autowired
    private JobRepository jobRepository;

    // Save a new job
    public Job saveJob(Job job) {
        return jobRepository.save(job);
    }

    // Get all jobs
    public List<Job> getAllJobs() {
        return jobRepository.findAll();
    }

    // Delete job by ID
    public boolean deleteJobById(Long id) {
        try {
            if (jobRepository.existsById(id)) { // Check if the job exists
                jobRepository.deleteById(id); // Delete the job
                return true; // Successfully deleted
            } else {
                return false; // Job not found
            }
        } catch (Exception e) {
            throw new RuntimeException("Error deleting job", e); // Catch and throw any exception
        }
    }
}
