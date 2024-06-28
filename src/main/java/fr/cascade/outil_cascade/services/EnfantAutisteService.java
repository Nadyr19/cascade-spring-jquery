package fr.cascade.outil_cascade.services;

import java.util.List;
//import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fr.cascade.outil_cascade.entities.EnfantAutiste;
import fr.cascade.outil_cascade.repositories.EnfantAutisteRepository;

@Service
public class EnfantAutisteService {

    @Autowired
    private EnfantAutisteRepository utilisateurRepository;

    public List<EnfantAutiste> getAllUtilisateurs() {
        return utilisateurRepository.findAll();
    }

    public EnfantAutiste getUtilisateurById(Long id) {
        return utilisateurRepository.findById(id).orElse(null);
    }

    public EnfantAutiste addUtilisateur(EnfantAutiste utilisateur) {
        return utilisateurRepository.save(utilisateur);
    }
    
    public void deleteUtilisateurById(Long id) {
        utilisateurRepository.deleteById(id);
    }

    public void deleteUtilisateurByName(EnfantAutiste utilisateur) {
        utilisateurRepository.delete(utilisateur);
    }
/* 
    public EnfantAutiste updateUtilisateur(Long id, EnfantAutiste updatedUtilisateur) {
        Optional<EnfantAutiste> existingUtilisateur = utilisateurRepository.findById(id);
        if (existingUtilisateur.isPresent()) {
            EnfantAutiste utilisateur = existingUtilisateur.get();
            utilisateur.setClasse(updatedUtilisateur.getClasse());
            utilisateur.setEcole(updatedUtilisateur.getEcole());
            return utilisateurRepository.save(utilisateur);
        }
        return null; // Gérer le cas où la utilisateur n'est pas trouvée
    }
    */

    // Ajouter d'autres méthodes pour mettre à jour, supprimer,

}
