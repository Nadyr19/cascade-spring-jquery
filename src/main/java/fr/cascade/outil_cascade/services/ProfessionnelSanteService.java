package fr.cascade.outil_cascade.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fr.cascade.outil_cascade.entities.ProfessionnelSante;
import fr.cascade.outil_cascade.repositories.ProfessionnelSanteRepository;

@Service
public class ProfessionnelSanteService {

    @Autowired
    private ProfessionnelSanteRepository professionnelSanteRepository;

    public List<ProfessionnelSante> getAllProfessionnelSantes() {
        return professionnelSanteRepository.findAll();
    }

    public ProfessionnelSante getProfessionnelSanteById(Long id) {
        return professionnelSanteRepository.findById(id).orElse(null);
    }

    public ProfessionnelSante addProfessionnelSante(ProfessionnelSante ProfessionnelSante) {
        return professionnelSanteRepository.save(ProfessionnelSante);
    }
    
    public void deleteProfessionnelSanteById(Long id) {
        professionnelSanteRepository.deleteById(id);
    }

    public void deleteProfessionnelSanteByName(ProfessionnelSante ProfessionnelSante) {
        professionnelSanteRepository.delete(ProfessionnelSante);
    }

    public ProfessionnelSante updateProfessionnelSante(Long id, ProfessionnelSante updatedProfessionnelSante) {
        Optional<ProfessionnelSante> existingProfessionnelSante = professionnelSanteRepository.findById(id);
        if (existingProfessionnelSante.isPresent()) {
            ProfessionnelSante professionnelSante = existingProfessionnelSante.get();
            professionnelSante.setNom(updatedProfessionnelSante.getNom());
            professionnelSante.setPrenom(updatedProfessionnelSante.getPrenom());
            professionnelSante.setDateNaissance(updatedProfessionnelSante.getDateNaissance());
            professionnelSante.setSpecialite(updatedProfessionnelSante.getSpecialite());
            return professionnelSanteRepository.save(professionnelSante);
        }
        return null; // Gérer le cas où la ProfessionnelSante n'est pas trouvée
    }


    // Ajouter d'autres méthodes pour mettre à jour, supprimer,

}
