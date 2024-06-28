package fr.cascade.outil_cascade.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import fr.cascade.outil_cascade.entities.User;
import fr.cascade.outil_cascade.services.UserService;

@Controller
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/list")
    public String showUserList(Model model) {
        List<User> User = userService.getAllUsers();
        model.addAttribute("User", User);
        return "UserList";
    }

    @GetMapping("/add")
    public String showAddUserForm(Model model) {
        model.addAttribute("User", new User());
        return "addEditUser";
    }

    @GetMapping("/edit/{id}")
    public String showEditUserForm(@PathVariable Long id, Model model) {
        User User = userService.getUserById(id);
        model.addAttribute("User", User);
        return "addEditUser";
    }

    @PostMapping("/save")
    public String saveUser(@ModelAttribute User User) {
        userService.addUser(User);
        return "redirect:/User/list";
    }

    @GetMapping("/delete/{id}")
    public String deleteUser(@PathVariable Long id) {
        userService.deleteUserById (id);
        return "redirect:/User/list";
    }
}
