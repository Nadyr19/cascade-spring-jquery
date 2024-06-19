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

import fr.cascade.outil_cascade.entities.Connexion;
import fr.cascade.outil_cascade.services.ConnexionService;

@RestController
@RequestMapping("/connexion")
public class ConnexionController {

     @Autowired
    private ConnexionService connexionService;

    @GetMapping
    public List<Connexion> getAllConnexions() {
        return connexionService.getAllConnexion();
    }

    @GetMapping("/{id}")
    public Connexion getConnexionById(@PathVariable Long id) {
        return connexionService.getConnexionById(id);
    }

    @PostMapping
    public Connexion addConnexion(@RequestBody Connexion connexion) {
        return connexionService.addConnexion(connexion);
    }

    @PutMapping("/{id}")
    public Connexion updateConnexion(@PathVariable Long id, @RequestBody Connexion updatedConnexion) {
        return connexionService.updateConnexion(id, updatedConnexion);
    }

    @DeleteMapping("/{id}")
    public void deleteConnexionById(@PathVariable Long id) {
        connexionService.deleteConnexionById(id);
    }

    /*
    @DeleteMapping("/{id}")
    public void deleteConnexionByName(@PathVariable Connexion connexion) {
        connexionService.deleteConnexionByName(connexion);
    }
 */
}
