package fr.cascade.outil_cascade.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.cascade.outil_cascade.entities.Utilisateur;
import fr.cascade.outil_cascade.services.UtilisateurService;

@RestController
@RequestMapping("/utilisateur")
public class UtilisateurController {

    @Autowired
    private UtilisateurService utilisateurService;

    @GetMapping
    public List<Utilisateur> getAllUtilisateurs() {
        return utilisateurService.getAllUtilisateurs();
    }

    @GetMapping("/{id}")
    public Utilisateur getUtilisateurById(@PathVariable Long id) {
        return utilisateurService.getUtilisateurById(id);
    }

    @PostMapping
    public Utilisateur addUtilisateur(@RequestBody Utilisateur utilisateur) {
        return utilisateurService.addUtilisateur(utilisateur);
    }

    @PutMapping("/{id}")
    public Utilisateur updateUtilisateur(@PathVariable Long id, @RequestBody Utilisateur updatedUtilisateur) {
        return utilisateurService.updateUtilisateur(id, updatedUtilisateur);
    }

    @DeleteMapping("/{id}")
    public void deleteUtilisateurById(@PathVariable Long id) {
        utilisateurService.deleteUtilisateurById(id);
    }


   // @DeleteMapping("/{id}")
   // public void deleteUtilisateurByName(@PathVariable Utilisateur utilisateur) {
   //     utilisateurService.deleteUtilisateurByName(utilisateur);
   // }

}