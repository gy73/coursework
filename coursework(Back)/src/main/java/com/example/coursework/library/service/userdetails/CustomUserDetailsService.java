package com.example.coursework.library.service.userdetails;

import com.example.coursework.library.constans.UserRolesConstans;
import com.example.coursework.library.model.User;
import com.example.coursework.library.repository.UserRepository;
import lombok.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    @Value("${spring.security.user.name}")
    private String adminUsername;

    @Value("${spring.security.user.password}")
    private String adminPassword;

    public CustomUserDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        if (username.equals(adminUsername)) {
            return new CustomUserDetails(
                    null,
                    username,
                    adminPassword,
                    List.of(new SimpleGrantedAuthority("ROLE_ADMIN"))
            );
        } else {
            User user = userRepository.findUserByLogin(username)
                    .orElseThrow(() -> new UsernameNotFoundException("User not found with username: " + username));

            List<GrantedAuthority> authorities = new ArrayList<>();

            String role = user.getRole().getId() == 1L
                    ? "ROLE_" + UserRole.Contents.USER
                    : "ROLE_" + UserRole.Contents.LIBRARIAN;

            authorities.add(new SimpleGrantedAuthority(role));

            return new CustomUserDetails(
                    user.getId().intValue(),
                    username,
                    user.getPassword(),
                    authorities
            );
        }
    }
}