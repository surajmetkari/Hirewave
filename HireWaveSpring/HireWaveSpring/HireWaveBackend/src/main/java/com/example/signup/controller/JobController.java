
package com.example.signup.controller;



import com.example.signup.entity.Job;
import com.example.signup.service.JobService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

//@RestController
//@RequestMapping("/api/jobs")
//@CrossOrigin(origins = "http://localhost:3000") // Allow requests from React app
//public class JobController {
//
//    @Autowired
//    private JobService jobService;
//
//    @PostMapping
//    public ResponseEntity<Job> postJob(@RequestBody Job job) {
//        Job savedJob = jobService.saveJob(job);
//        return ResponseEntity.status(201).body(savedJob);
//    }
//
//    @GetMapping
//    public ResponseEntity<List<Job>> getJobs() {
//        List<Job> jobs = jobService.getAllJobs(); // Assuming you have this method in your service
//        return ResponseEntity.ok(jobs); // This returns the list of jobs in the response body
//    }
//
//}


@RestController
@RequestMapping("/api/jobs")
@CrossOrigin(origins = "http://localhost:3000") // Allow requests from React app
public class JobController {

    @Autowired
    private JobService jobService;

    // Create a new job
    @PostMapping
    public ResponseEntity<Job> postJob(@RequestBody Job job) {
        Job savedJob = jobService.saveJob(job);
        return ResponseEntity.status(201).body(savedJob);
    }

    // Get all jobs
    @GetMapping
    public ResponseEntity<List<Job>> getJobs() {
        List<Job> jobs = jobService.getAllJobs();
        return ResponseEntity.ok(jobs);
    }

    // Delete a job by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteJob(@PathVariable Long id) {
        boolean isDeleted = jobService.deleteJobById(id);
        if (isDeleted) {
            return ResponseEntity.ok("Job deleted successfully.");
        } else {
            return ResponseEntity.status(404).body("Job not found.");
        }
    }
}
