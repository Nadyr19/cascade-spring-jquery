package fr.cascade.outil_cascade.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fr.cascade.outil_cascade.entities.EnfantAutiste;
import fr.cascade.outil_cascade.repositories.EnfantAutisteRepository;

@Service
public class EnfantAutisteService {

    @Autowired
    private EnfantAutisteRepository enfantAutisteRepository;

    public List<EnfantAutiste> getAllEnfantAutistes() {
        return enfantAutisteRepository.findAll();
    }

    public EnfantAutiste getEnfantAutisteById(Long id) {
        return enfantAutisteRepository.findById(id).orElse(null);
    }

    public EnfantAutiste addEnfantAutiste(EnfantAutiste EnfantAutiste) {
        return enfantAutisteRepository.save(EnfantAutiste);
    }
    
    public void deleteEnfantAutisteById(Long id) {
        enfantAutisteRepository.deleteById(id);
    }

    public void deleteEnfantAutisteByName(EnfantAutiste EnfantAutiste) {
        enfantAutisteRepository.delete(EnfantAutiste);
    }

    public EnfantAutiste updateEnfantAutiste(Long id, EnfantAutiste updatedEnfantAutiste) {
        Optional<EnfantAutiste> existingEnfantAutiste = enfantAutisteRepository.findById(id);
        if (existingEnfantAutiste.isPresent()) {
            EnfantAutiste enfantAutiste = existingEnfantAutiste.get();
            enfantAutiste.setNom(updatedEnfantAutiste.getNom());
            enfantAutiste.setPrenom(updatedEnfantAutiste.getPrenom());
            enfantAutiste.setDateNaissance(updatedEnfantAutiste.getDateNaissance());
            enfantAutiste.setClasse(updatedEnfantAutiste.getClasse());
            enfantAutiste.setEcole(updatedEnfantAutiste.getEcole());
            return enfantAutisteRepository.save(enfantAutiste);
        }
        return null; // Gérer le cas où la EnfantAutiste n'est pas trouvée
    }


    // Ajouter d'autres méthodes pour mettre à jour, supprimer,

}
