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

import fr.cascade.outil_cascade.entities.Administrateur;
import fr.cascade.outil_cascade.services.AdministrateurService;

@RestController
@RequestMapping("/administrateur")
public class AdministrateurController {

    @Autowired
    private AdministrateurService administrateurService;

    @GetMapping
    public List<Administrateur> getAllAdministrateurs() {
        return administrateurService.getAllAdministrateurs();
    }

    @GetMapping("/{id}")
    public Administrateur getAdministrateurById(@PathVariable Long id) {
        return administrateurService.getAdministrateurById(id);
    }

    @PostMapping
    public Administrateur addAdministrateur(@RequestBody Administrateur administrateur) {
        return administrateurService.addAdministrateur(administrateur);
    }

    @PutMapping("/{id}")
    public Administrateur updateAdministrateur(@PathVariable Long id,
            @RequestBody Administrateur updatedAdministrateur) {
        return administrateurService.updateAdministrateur(id, updatedAdministrateur);
    }

    @DeleteMapping("/{id}")
    public void deleteAdministrateurById(@PathVariable Long id) {
        administrateurService.deleteAdministrateurById(id);
    }
/*
@DeleteMapping("/{id}")
public void deleteAdministrateurByName(@PathVariable Administrateur administrateur) {
    administrateurService.deleteAdministrateurByName(administrateur);
}
 * 
 */

}
