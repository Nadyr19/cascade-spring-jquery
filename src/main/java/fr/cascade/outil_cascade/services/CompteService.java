package fr.cascade.outil_cascade.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fr.cascade.outil_cascade.entities.Compte;
import fr.cascade.outil_cascade.repositories.CompteRepository;

@Service
public class CompteService {

    @Autowired
    private CompteRepository compteRepository;

    public List<Compte> getAllComptes() {
        return compteRepository.findAll();
    }

    public Compte getCompteById(Long id) {
        return compteRepository.findById(id).orElse(null);
    }

    public Compte addCompte(Compte compte) {
        return compteRepository.save(compte);
    }
    
    public void deleteCompteById(Long id) {
        compteRepository.deleteById(id);
    }

    public void deleteCompteByName(Compte compte) {
        compteRepository.delete(compte);
    }

    public Compte updateCompte(Long id, Compte updatedCompte) {
        Optional<Compte> existingCompte = compteRepository.findById(id);
        if (existingCompte.isPresent()) {
            Compte compte = existingCompte.get();
            compte.setEmail(updatedCompte.getEmail());
            compte.setPassword(updatedCompte.getPassword());
            return compteRepository.save(compte);
        }
        return null; // Gérer le cas où la Compte n'est pas trouvée
    }

    // Ajouter d'autres méthodes pour mettre à jour, supprimer,

}
