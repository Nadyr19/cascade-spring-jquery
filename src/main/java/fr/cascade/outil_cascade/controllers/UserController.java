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
import fr.cascade.outil_cascade.repositories.UserRepository;
import fr.cascade.outil_cascade.services.UserService;


@Controller
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/list/professionnel-sante") 
    public String getAllprofessionelsSante(Model model){
        Iterable<User> User = userRepository.findAllByRoleName("Professionnel de Santé");
         model.addAttribute("user", User);
         return "professionnelSanteListe";

    }

    @GetMapping("/list/enfant-autiste") 
    public String getAllEnfnatsAutistes(Model model){
        Iterable<User> User = userRepository.findAllByRoleName("Enfant Autiste");
         model.addAttribute("user", User);
         return "enfantAutisteList";

    }

    

    // @GetMapping("user/list/{id}")
    // public String getUsersByRoleId(@PathVariable Long id, Model model) {
    //     Iterable<User> User = userRepository.findAllByRoleId(id);
    //     model.addAttribute("user", User);
    //     return "professionnelSanteListe";
    // }
    

/* 
     @GetMapping(path="/list/{id}")
    public String getUser(@PathVariable("id")long customerId, Model model){
        Optional<Customer> customer = this.customerRepository.findById(customerId);
        if (customer.isEmpty()) {
            throw new ResponseStatusException(
                    HttpStatus.NOT_FOUND, "entity not found"
            );
        }
        model.addAttribute("customer", customer.get());
        Iterable<Order> ordersIterable = this.orderRepository.findAllByCustomerId(customer.get().getId());
        List<Order> orders = new ArrayList<>();
        ordersIterable.forEach(orders::add);
        model.addAttribute("orders", orders);
        model.addAttribute("module", "customers");
        return "detailed_customer";
    }
 */

    @GetMapping("/list")
    public String showUserList(Model model) {
        List<User> users = userService.getAllUsers();
        model.addAttribute("users", users);
        return "userList";
    }


    @GetMapping("/add")
    public String showAddUserForm(Model model) {
        model.addAttribute("user", new User());
        return "addEditUser";
    }

    @GetMapping("/edit/{id}")
    public String showEditUserForm(@PathVariable Long id, Model model) {
        User User = userService.getUserById(id);
        model.addAttribute("user", User);
        return "addEditUser";
    }

    @PostMapping("/save")
    public String saveUser(@ModelAttribute User User) {
        userService.addUser(User);
        return "redirect:/user/list";
    }

    @GetMapping("/delete/{id}")
    public String deleteUser(@PathVariable Long id) {
        userService.deleteUserById (id);
        return "redirect:/user/list";
    }
}
