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

import fr.cascade.outil_cascade.entities.Utilisateur;
import fr.cascade.outil_cascade.services.UtilisateurService;

@Controller
@RequestMapping("/utilisateur")
public class ThymeleafController {

    @Autowired
    private UtilisateurService utilisateurService;

    @GetMapping("/list")
    public String showUtilisateurList(Model model) {
        List<Utilisateur> utilisateurs = utilisateurService.getAllUtilisateurs();
        model.addAttribute("utilisateurs", utilisateurs);
        return "utilisateurList";
    }

    @GetMapping("/add")
    public String showAddUtilisateurForm(Model model) {
        model.addAttribute("utilisateur", new Utilisateur());
        return "addEditUtilisateur";
    }

    @GetMapping("/edit/{id}")
    public String showEditUtilisateurForm(@PathVariable Long id, Model model) {
        Utilisateur utilisateur = utilisateurService.getUtilisateurById(id);
        model.addAttribute("utilisateur", utilisateur);
        return "addEditUtilisateur";
    }

    @PostMapping("/save")
    public String saveUtilisateur(@ModelAttribute Utilisateur utilisateur) {
        utilisateurService.addUtilisateur(utilisateur);
        return "redirect:/list";
    }

    @GetMapping("/delete/{id}")
    public String deleteUtilisateur(@PathVariable Long id) {
        utilisateurService.deleteUtilisateurById (id);
        return "redirect:/list";
    }
}
