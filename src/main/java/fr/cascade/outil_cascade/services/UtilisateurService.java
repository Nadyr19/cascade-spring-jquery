package fr.cascade.outil_cascade.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fr.cascade.outil_cascade.entities.Utilisateur;
import fr.cascade.outil_cascade.repositories.UtilisateurRepository;

@Service
public class UtilisateurService {

    @Autowired
    private UtilisateurRepository utilisateurRepository;

    public List<Utilisateur> getAllUtilisateurs() {
        return utilisateurRepository.findAll();
    }

    public Utilisateur getUtilisateurById(Long id) {
        return utilisateurRepository.findById(id).orElse(null);
    }

    public Utilisateur addUtilisateur(Utilisateur utilisateur) {
        return utilisateurRepository.save(utilisateur);
    }
    
    public void deleteUtilisateurById(Long id) {
        utilisateurRepository.deleteById(id);
    }

    public void deleteUtilisateurByName(Utilisateur utilisateur) {
        utilisateurRepository.delete(utilisateur);
    }

    public Utilisateur updateUtilisateur(Long id, Utilisateur updatedUtilisateur) {
        Optional<Utilisateur> existingUtilisateur = utilisateurRepository.findById(id);
        if (existingUtilisateur.isPresent()) {
            Utilisateur utilisateur = existingUtilisateur.get();
            utilisateur.setClasse(updatedUtilisateur.getClasse());
            utilisateur.setEcole(updatedUtilisateur.getClasse());
            return utilisateurRepository.save(utilisateur);
        }
        return null; // Gérer le cas où la utilisateur n'est pas trouvée
    }

    // Ajouter d'autres méthodes pour mettre à jour, supprimer,

}
