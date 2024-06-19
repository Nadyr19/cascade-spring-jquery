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

    public List<ProfessionnelSante> getAllProfessionnelSante() {
        return professionnelSanteRepository.findAll();
    }

    public ProfessionnelSante getProfessionnelSanteById(Long id) {
        return professionnelSanteRepository.findById(id).orElse(null);
    }

    public ProfessionnelSante addProfessionnelSante(ProfessionnelSante professionnelSante) {
        return professionnelSanteRepository.save(professionnelSante);
    }
    
    public void deleteProfessionnelSanteById(Long id) {
        professionnelSanteRepository.deleteById(id);
    }

    public void deleteProfessionnelSanteByName(ProfessionnelSante professionnelSante) {
        professionnelSanteRepository.delete(professionnelSante);
    }

    public ProfessionnelSante updateProfessionnelSante(Long id, ProfessionnelSante updatedProfessionnelSante) {
        Optional<ProfessionnelSante> existingProfessionnelSante = professionnelSanteRepository.findById(id);
        if (existingProfessionnelSante.isPresent()) {
            ProfessionnelSante professionnelSante = existingProfessionnelSante.get();
            professionnelSante.setHopital(updatedProfessionnelSante.getHopital());
            professionnelSante.setService(updatedProfessionnelSante.getService());
            return professionnelSanteRepository.save(professionnelSante);
        }
        return null; // Gérer le cas où la professionnelSante n'est pas trouvée
    }

}
