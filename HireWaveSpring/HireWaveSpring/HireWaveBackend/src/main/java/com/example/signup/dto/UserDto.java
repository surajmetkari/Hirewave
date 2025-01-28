package com.example.signup.dto;

import jakarta.validation.constraints.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserDto {
    private Long id; // Added for unique identification of users in getAllUsers response

    @NotBlank
    @Pattern(regexp = "^[a-zA-Z][a-zA-Z0-9_]*$", message = "Invalid username.")
    private String name;

    @NotBlank
    @Email
    private String email;

    public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getUserType() {
		return userType;
	}

	public void setUserType(String userType) {
		this.userType = userType;
	}

	@NotBlank
    @Size(min = 8, message = "Password must be at least 8 characters long.")
    private String password;

    @NotBlank
    private String userType;
}
