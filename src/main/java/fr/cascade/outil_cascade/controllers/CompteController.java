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

import fr.cascade.outil_cascade.entities.Compte;
import fr.cascade.outil_cascade.services.CompteService;

@RestController
@RequestMapping("/compte")
public class CompteController {

    @Autowired
    private CompteService compteService;

    @GetMapping
    public List<Compte> getAllComptes() {
        return compteService.getAllComptes();
    }

    @GetMapping("/{id}")
    public Compte getCompteById(@PathVariable Long id) {
        return compteService.getCompteById(id);
    }

    @PostMapping
    public Compte addCompte(@RequestBody Compte compte) {
        return compteService.addCompte(compte);
    }

    @PutMapping("/{id}")
    public Compte updateCompte(@PathVariable Long id, @RequestBody Compte updatedCompte) {
        return compteService.updateCompte(id, updatedCompte);
    }

    @DeleteMapping("/{id}")
    public void deleteCompteById(@PathVariable Long id) {
        compteService.deleteCompteById(id);
    }
    /*
     * @DeleteMapping("/{id}")
     * public void deleteByName(@PathVariable Compte compte) {
     * compteService.deleteCompteByName(compte);
     * }
     */

}
