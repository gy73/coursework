package com.example.coursework.library.service.MVC;

import com.example.coursework.library.dto.UserDTO;
import com.example.coursework.library.model.User;
import com.example.coursework.library.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;

import static com.example.coursework.library.constans.UserRolesConstans.ADMIN;

@Slf4j
@RequestMapping("/users")
@Controller
public class MVCUserController {

    private final UserService userService;


    public MVCUserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/registration")
    public String registration(@ModelAttribute("userForm")UserDTO userDTO,
                               BindingResult bindingResult) {
        if (userDTO.getLogin().equalsIgnoreCase(ADMIN) || userService.getUserByLogin(userDTO.getLogin()) !=null) {
            bindingResult.rejectValue("login", "error.login","Такой логин уже существует");
            return "registration";
        }
        if (userService.getUserByEmail(userDTO.getEmail()) !=null) {
            bindingResult.rejectValue("email","email.error", "Такой email уже существует");
            return "registration";
        }
        userService.create(userDTO);
        return "redirect:login";
    }

}
