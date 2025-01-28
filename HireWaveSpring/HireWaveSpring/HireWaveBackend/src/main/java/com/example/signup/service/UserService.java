package com.example.signup.service;

import com.example.signup.dto.LoginRequestDTO;
import com.example.signup.dto.UserDto;
import com.example.signup.entity.User;
import com.example.signup.enums.UserType;
import com.example.signup.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public String registerUser(UserDto userDto) {
        // Check if the email is already registered
        if (userRepository.existsByEmail(userDto.getEmail())) {
            return "Email is already registered.";
        }

        User user = new User();
        user.setName(userDto.getName());
        user.setEmail(userDto.getEmail());
        user.setPassword(userDto.getPassword()); // Encrypt password in real projects

        try {
            // Convert String userType from DTO to the UserType enum
            UserType userType = UserType.valueOf(userDto.getUserType().toUpperCase());
            user.setUserType(userType);

            // Save the user
            userRepository.save(user);

            // Construct and return the role-based success message
            switch (userType) {
                case JOB_SEEKER:
                    return "Job Seeker registration successful!";
                case ADMIN:
                    return "Admin registration successful!";
                case RECRUITER:
                    return "Recruiter registration successful!";
                default:
                    return "Registration successful!";
            }
        } catch (IllegalArgumentException e) {
            return "Invalid user type. Please provide one of the following: JOB_SEEKER, ADMIN, RECRUITER.";
        }
    }
    
    //// Login user
    public User loginUser(LoginRequestDTO loginRequest) {
        // Check if a user exists with the given email and password
        Optional<User> userOptional = userRepository.findByEmailAndPassword(loginRequest.getEmail(), loginRequest.getPassword());
       return  userOptional.orElseThrow();
    }
    
    //get data
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
    
    public String updateUserById(Long id, UserDto userDto) {
        Optional<User> userOptional = userRepository.findById(id);

        if (userOptional.isEmpty()) {
            return "User not found with ID: " + id;
        }

        User user = userOptional.get();
        user.setName(userDto.getName());
        user.setEmail(userDto.getEmail());

        try {
            // Convert String userType from DTO to the UserType enum
            UserType userType = UserType.valueOf(userDto.getUserType().toUpperCase());
            user.setUserType(userType);
        } catch (IllegalArgumentException e) {
            return "Invalid user type. Please provide one of the following: JOB_SEEKER, ADMIN, RECRUITER.";
        }

        userRepository.save(user);
        return "User with ID " + id + " has been updated successfully.";
    }
    
    public String deleteUserById(Long id) {
        // Logic to delete the user from the database (e.g., using a repository)
        userRepository.deleteById(id);
        return "User with ID " + id + " deleted successfully.";
    }
}
