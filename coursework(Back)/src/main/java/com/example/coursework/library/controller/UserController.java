package com.example.coursework.library.controller;

import com.example.coursework.library.config.jwt.JWTTokenFilter;
import com.example.coursework.library.config.jwt.JWTTokenUtil;
import com.example.coursework.library.dto.LoginDTO;
import com.example.coursework.library.dto.UserDTO;
import com.example.coursework.library.model.User;
import com.example.coursework.library.repository.UserRepository;
import com.example.coursework.library.service.GenericService;
import com.example.coursework.library.service.UserService;
import com.example.coursework.library.service.userdetails.CustomUserDetailsService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

@RestController
@RequestMapping
@Slf4j
@CrossOrigin("Http://localhost:5173")
@Tag(name = "Пользователи",
        description = "Контроллкр для работы с пользователями")
public class UserController extends GenericController<User, UserDTO>{

    private CustomUserDetailsService customUserDetailsService;
    private JWTTokenUtil jwtTokenUtil;
    private  UserService userService;

    public UserController(GenericController<User, UserDTO> genericService,
                          CustomUserDetailsService customUserDetailsService,
                          JWTTokenUtil jwtTokenUtil,
                          UserService userService) {
        super(genericService);
        this.customUserDetailsService = customUserDetailsService;
        this.jwtTokenUtil = jwtTokenUtil;
        this.userService = userService;
    }

    @PostMapping("/auth")
    public ResponseEntity<?> auth(@RequestBody LoginDTO loginDTO){
        Map<String, Object> response = new HashMap<>();
        UserDetails foundUser =  customUserDetailsService.loadUserByUsername(loginDTO.getLogin());
        log.info("foundUser: {}", foundUser);
        )

    }

    public UserController(UserRepository userRepository) {
        super((GenericService<User, UserDTO>) userRepository);
    }
}
