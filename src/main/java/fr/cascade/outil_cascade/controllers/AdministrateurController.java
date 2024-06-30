package fr.cascade.outil_cascade.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import fr.cascade.outil_cascade.entities.Administrateur;
import fr.cascade.outil_cascade.services.AdministrateurService;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@RequestMapping("/administrateur")
public class AdministrateurController {

     @Autowired
    private AdministrateurService administrateurService;

    @GetMapping("/list")
    public String showAdministrateurList(Model model) {
        List<Administrateur> administrateurs = administrateurService.getAllAdministrateurs();
        model.addAttribute("administrateurs", administrateurs);
        return "administrateurList";
    }

    @GetMapping("/add")
    public String showAddAdministrateurForm(Model model) {
        model.addAttribute("administrateur", new Administrateur());
        return "addEditAdministrateur";
    }

    @GetMapping("/edit/{id}")
    public String showEditAdministrateurForm(@PathVariable Long id, Model model) {
        Administrateur administrateur = administrateurService.getAdministrateurById(id);
        model.addAttribute("administrateur", administrateur);
        return "addEditAdministrateur";
    }

    @PostMapping("/save")
    public String saveAdministrateur(@ModelAttribute Administrateur administrateur) {
        administrateurService.addAdministrateur(administrateur);
        return "redirect:/administrateur/list";
    }

    @GetMapping("/delete/{id}")
    public String deleteAdministrateur(@PathVariable Long id) {
        administrateurService.deleteAdministrateurById(id);
        return "redirect:/administrateur/list";
    }

}
