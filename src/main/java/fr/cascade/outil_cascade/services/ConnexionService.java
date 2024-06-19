package fr.cascade.outil_cascade.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fr.cascade.outil_cascade.entities.Connexion;
import fr.cascade.outil_cascade.repositories.ConnexionRepository;

@Service
public class ConnexionService {

     @Autowired
    private ConnexionRepository connexionRepository;

    public List<Connexion> getAllConnexion() {
        return connexionRepository.findAll();
    }

    public Connexion getConnexionById(Long id) {
        return connexionRepository.findById(id).orElse(null);
    }

    public Connexion addConnexion(Connexion connexion) {
        return connexionRepository.save(connexion);
    }
    
    public void deleteConnexionById(Long id) {
        connexionRepository.deleteById(id);
    }

    public void deleteConnexionByName(Connexion connexion) {
        connexionRepository.delete(connexion);
    }

    public Connexion updateConnexion(Long id, Connexion updatedConnexion) {
        Optional<Connexion> existingConnexion = connexionRepository.findById(id);
        if (existingConnexion.isPresent()) {
            Connexion connexion = existingConnexion.get();
            connexion.setDateHeureConnexion(updatedConnexion.getDateHeureConnexion());
            return connexionRepository.save(connexion);
        }
        return null; // Gérer le cas où la connexion n'est pas trouvée
    }

}
