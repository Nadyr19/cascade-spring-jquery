package fr.cascade.outil_cascade.controllers;


//import java.security.Principal;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.ModelAttribute;


@Controller
public class HomeController {

    /* 
      @ModelAttribute("module")
    String module() {
        return "home";
    }
*/
  
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
