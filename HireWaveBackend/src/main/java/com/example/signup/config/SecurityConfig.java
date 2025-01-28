package com.example.signup.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.cors().and() // Enable CORS
            .csrf().disable() // Disable CSRF for API endpoints
            .authorizeRequests()
            .requestMatchers("/api/users/register","/api/users/login", "/api/users/all", "/api/users/{id}","/api/jobs").permitAll() // Allow public access to this endpoint
            .requestMatchers(HttpMethod.DELETE, "/api/jobs/**").permitAll() // Allow DELETE requests to /api/jobs/{id} without authentication
            .anyRequest().authenticated(); // All other endpoints require authentication

        return http.build();
    }
    }



