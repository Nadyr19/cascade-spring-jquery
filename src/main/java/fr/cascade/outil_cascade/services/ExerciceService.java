package fr.cascade.outil_cascade.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fr.cascade.outil_cascade.entities.Exercice;
import fr.cascade.outil_cascade.repositories.ExerciceRepository;

@Service
public class ExerciceService {

     @Autowired
    private ExerciceRepository exerciceRepository;

    public List<Exercice> getAllExercices() {
        return exerciceRepository.findAll();
    }

    public Exercice getExerciceById(Long id) {
        return exerciceRepository.findById(id).orElse(null);
    }

    public Exercice addExercice(Exercice exercice) {
        return exerciceRepository.save(exercice);
    }
    
    public void deleteExerciceById(Long id) {
        exerciceRepository.deleteById(id);
    }

    public void deleteExerciceByName(Exercice exercice) {
        exerciceRepository.delete(exercice);
    }

    public Exercice updateExercice(Long id, Exercice updatedPerson) {
        Optional<Exercice> existingExercice = exerciceRepository.findById(id);
        if (existingExercice.isPresent()) {
            Exercice exercice = existingExercice.get();
            exercice.setIntitule(updatedPerson.getIntitule());
            exercice.setNiveau(updatedPerson.getNiveau());
            return exerciceRepository.save(exercice);
        }
        return null; // Gérer le cas où la exercice n'est pas trouvée
    }


}
