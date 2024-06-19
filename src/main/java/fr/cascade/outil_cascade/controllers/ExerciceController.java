package fr.cascade.outil_cascade.controllers;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
/* 
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
*/
import org.springframework.web.bind.annotation.RequestMapping;
/* 
import org.springframework.web.bind.annotation.RestController;
import fr.cascade.outil_cascade.entities.Exercice;
import fr.cascade.outil_cascade.services.ExerciceService;
*/
@Controller
@RequestMapping("/exercices")
public class ExerciceController {


     @GetMapping("/exo_patisserie")
    public String getExoPatisserie() {
        return "exo_patisserie.html";
    }

    /*
     
    @Autowired
    private ExerciceService exerciceService;
    
    @GetMapping
    public List<Exercice> getAllExercices() {
        return exerciceService.getAllExercices();
    }

    @GetMapping("/{id}")
    public Exercice getExerciceById(@PathVariable Long id) {
        return exerciceService.getExerciceById(id);
    }

    @PostMapping
    public Exercice addExercice(@RequestBody Exercice exercice) {
        return exerciceService.addExercice(exercice);
    }
    
    @PutMapping("/{id}")
    public Exercice updateExercice(@PathVariable Long id, @RequestBody Exercice updatedExercice) {
        return exerciceService.updateExercice(id, updatedExercice);
    }

    @DeleteMapping("/{id}")
    public void deleteExerciceById(@PathVariable Long id) {
        exerciceService.deleteExerciceById(id);
        }
        
        /* 
        @DeleteMapping("/{id}")
        public void deleteExerciceByName(@PathVariable Exercice exercice) {
            exerciceService.deleteExerciceByName(exercice);
            }
            
            
            */
}
