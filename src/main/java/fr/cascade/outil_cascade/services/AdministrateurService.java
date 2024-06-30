package fr.cascade.outil_cascade.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fr.cascade.outil_cascade.entities.Administrateur;
import fr.cascade.outil_cascade.repositories.AdministrateurRepository;

@Service
public class AdministrateurService {

    @Autowired
    private AdministrateurRepository administrateurRepository;

    public List<Administrateur> getAllAdministrateurs() {
        return administrateurRepository.findAll();
    }

    public Administrateur getAdministrateurById(Long id) {
        return administrateurRepository.findById(id).orElse(null);
    }

    public Administrateur addAdministrateur(Administrateur administrateur) {
        return administrateurRepository.save(administrateur);
    }
    
    public void deleteAdministrateurById(Long id) {
        administrateurRepository.deleteById(id);
    }

    public void deleteAdministrateurByName(Administrateur administrateur) {
        administrateurRepository.delete(administrateur);
    }

    public Administrateur updateAdministrateur(Long id, Administrateur updatedAdministrateur) {
        Optional<Administrateur> existingAdministrateur = administrateurRepository.findById(id);
        if (existingAdministrateur.isPresent()) {
            Administrateur administrateur = existingAdministrateur.get();
            administrateur.setNom(updatedAdministrateur.getNom());
            administrateur.setPrenom(updatedAdministrateur.getPrenom());
            administrateur.setDateNaissance(updatedAdministrateur.getDateNaissance());
            administrateur.setBureau(updatedAdministrateur.getBureau());
            return administrateurRepository.save(administrateur);
        }
        return null; // Gérer le cas où la Administrateur n'est pas trouvée
    }


    // Ajouter d'autres méthodes pour mettre à jour, supprimer,

}
