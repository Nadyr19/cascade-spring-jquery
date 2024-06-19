package fr.cascade.outil_cascade.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fr.cascade.outil_cascade.entities.Personne;
import fr.cascade.outil_cascade.repositories.PersonneRepository;

@Service
public class PersonneService {

    @Autowired
    private PersonneRepository personneRepository;

    public List<Personne> getAllPersons() {
        return personneRepository.findAll();
    }

    public Personne getPersonById(Long id) {
        return personneRepository.findById(id).orElse(null);
    }

    public Personne addPerson(Personne personne) {
        return personneRepository.save(personne);
    }
    
    public void deletePersonById(Long id) {
        personneRepository.deleteById(id);
    }

    public void deletePersonByName(Personne personne) {
        personneRepository.delete(personne);
    }

    public Personne updatePerson(Long id, Personne updatedPerson) {
        Optional<Personne> existingPerson = personneRepository.findById(id);
        if (existingPerson.isPresent()) {
            Personne personne = existingPerson.get();
            personne.setFirstName(updatedPerson.getFirstName());
            personne.setLastName(updatedPerson.getLastName());
            return personneRepository.save(personne);
        }
        return null; // Gérer le cas où la personne n'est pas trouvée
    }

    // Ajouter d'autres méthodes pour mettre à jour, supprimer,
}
