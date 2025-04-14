package com.example.coursework.library.dto;

import com.example.coursework.library.model.Role;
import lombok.*;

@Getter
@Setter
@ToString
@NoArgsConstructor
public class UserDTO
        extends GenericDTO{
    private String login;
    private String password;
    private String email;
    private String firstName;
    private String lastName;
    private RoleDTO role;

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public RoleDTO getRole() {
        return role;
    }

    public void setRole(RoleDTO role) {
        this.role = role;
    }
}
