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

import fr.cascade.outil_cascade.entities.Personne;
import fr.cascade.outil_cascade.services.PersonneService;

@RestController
@RequestMapping("/persons")
public class PersonneController {

    @Autowired
    private PersonneService personneService;

    @GetMapping
    public List<Personne> getAllPersons() {
        return personneService.getAllPersons();
    }

    @GetMapping("/{id}")
    public Personne getPersonById(@PathVariable Long id) {
        return personneService.getPersonById(id);
    }

    @PostMapping
    public Personne addPerson(@RequestBody Personne personne) {
        return personneService.addPerson(personne);
    }

    @PutMapping("/{id}")
    public Personne updatePerson(@PathVariable Long id, @RequestBody Personne updatedPerson) {
        return personneService.updatePerson(id, updatedPerson);
    }

    @DeleteMapping("/{id}")
    public void deletePersonById(@PathVariable Long id) {
        personneService.deletePersonById(id);
    }

    /* 
    @DeleteMapping("/{id}")
    public void deletePersonByName(@PathVariable Personne personne) {
        personneService.deletePersonByName(personne);
    }
*/
}
