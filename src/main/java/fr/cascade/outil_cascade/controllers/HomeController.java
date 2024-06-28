package fr.cascade.outil_cascade.controllers;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
// import java.util.List;


// import org.springframework.ui.Model;
// import org.springframework.validation.BindingResult;
// import org.springframework.web.bind.annotation.ModelAttribute;
// import org.springframework.web.bind.annotation.PostMapping;
// import fr.cascade.outil_cascade.entities.User;
// import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.RequestMapping;

//import fr.cascade.outil_cascade.services.UserService;


@Controller
@RequestMapping("/")
public class HomeController {

    /* 
      @ModelAttribute("module")
    String module() {
        return "home";
    }
*/



   // handler method to handle home page request
    @GetMapping("index")
    public String getHome(){
        return "index";
    }
/*

     private UserService userService;

    public HomeController(UserService userService) {
        this.userService = userService;
    }

    // handler method to handle user registration form request
    @GetMapping("/register")
    public String showRegistrationForm(Model model){
        // create model object to store form data
        UserDto user = new UserDto();
        model.addAttribute("user", user);
        return "register";
    }

    // handler method to handle user registration form submit request
    @PostMapping("/register/save")
    public String registration(@Valid @ModelAttribute("user") UserDto userDto,
                               BindingResult result,
                               Model model){
        User existingUser = userService.findUserByEmail(userDto.getEmail());

        if(existingUser != null && existingUser.getEmail() != null && !existingUser.getEmail().isEmpty()){
            result.rejectValue("email", null,
                    "There is already an account registered with the same email");
        }

        if(result.hasErrors()){
            model.addAttribute("user", userDto);
            return "/register";
        }

        userService.saveUser(userDto);
        return "redirect:/register?success";
    }

    
    @GetMapping("/users")
    public String users(Model model){
        List<UserDto> users = userService.findAllUsers();
        model.addAttribute("users", users);
        return "users";
    } 
 */



  
@GetMapping("/login")
public String getLogin() {
    return "login";
}

/* 
     @GetMapping("/home")
    public String getHome() {
        return "index";
    }*/

    @GetMapping("/exercices")
    public String getExercices() {
        return "exercices";
    }

    @GetMapping("/identification")
    public String getIdentification() {
        return "identification";
    }

    
    @GetMapping("/inscription")
    public String getInscription() {
        return "inscription";
        }
    

    @GetMapping("/mon_tableau_de_bord")
    public String getMonTableauDeBord() {
        return "mon_tableau_de_bord";
    }

    @GetMapping("/administration")
    public String getAdministration() {
        return "administration";
    }


    
    @GetMapping("/professionnel-sante")
    public String getProfessionnelSanteListe() {
        return "professionnelSanteListe";
    }


    /*
    @GetMapping("/compte")
    public String getCompte() {
        return "compteListe";
    }
 */
    
    /* 
     
    @GetMapping("/")
    String index(Principal principal) {
        return principal != null ? "home/homeSignedIn" : "home/homeNotSignedIn";
        }
    */
}
