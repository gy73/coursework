package com.example.coursework.library.constans;

import java.util.List;

public interface SecurityConstants {

    List<String> RESOURCES_WHITE_LIST = List.of("/resources/**",
            "/static/**",
            "/js/**",
            "/css/**",
            "/",
            "/swagger-ui/**",
            "/v3/api-docs/**");

    List<String> BOOKS_WHITE_LIST = List.of("/products");
    List<String> BOOKS_PERMISSION_LIST = List.of("/products/add",
            "/products/update",
            "/products/delete");

    List<String >  USERS_WHITE_LIST = List.of("/login",
            "/users/registration",
            "/users/remember-password");

    List<String> USERS_REST_WHITE_LIST = List.of("/users/auth");

}
