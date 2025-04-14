package com.example.coursework.library.repository;

import com.example.coursework.library.model.User;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends GenericRepository<User> {

    User findUserByLogin(String login);

    User findUserByEmail(String email);
}
