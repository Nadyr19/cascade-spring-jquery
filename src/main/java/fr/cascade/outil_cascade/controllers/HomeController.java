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

    // handler method to handle home page request
    @GetMapping("index")
    public String getHome() {
        return "index";
    }

    @GetMapping("/login")
    public String getLogin() {
        return "login";
    }


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

    @GetMapping("/admin")
    public String getAdministration() {
        return "administrateur";
    }

    @GetMapping("/enfant_autiste")
    public String getEnfantAutisteListe() {
        return "enfantAutisteList";
    }

    @GetMapping("/professionnel_sante")
    public String getProfessionnelSanteListe() {
        return "professionnelSanteList";
    }

    @GetMapping("/user")
    public String getUserListe() {
        return "userList";
    }
    
}
