/* 
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

import fr.cascade.outil_cascade.entities.Resultat;
import fr.cascade.outil_cascade.services.ResultatService;

@RestController
@RequestMapping("/resultat")
public class ResultatController {

    @Autowired
    private ResultatService resultatService;

    @GetMapping
    public List<Resultat> getAllResultats() {
        return resultatService.getAllResultats();
    }

    @GetMapping("/{id}")
    public Resultat getResultatById(@PathVariable Long id) {
        return resultatService.getResultatById(id);
    }

    @PostMapping
    public Resultat addresultat(@RequestBody Resultat resultat) {
        return resultatService.addResultat(resultat);
    }

    @PutMapping("/{id}")
    public Resultat updateResultat(@PathVariable Long id, @RequestBody Resultat updatedResultat) {
        return resultatService.updateResultat(id, updatedResultat);
    }

    @DeleteMapping("/{id}")
    public void deleteResultatById(@PathVariable Long id) {
        resultatService.deleteResultatById(id);
    }
    
}
*/