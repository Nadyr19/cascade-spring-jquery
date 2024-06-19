package fr.cascade.outil_cascade.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.cascade.outil_cascade.entities.ProfessionnelSante;
import fr.cascade.outil_cascade.services.ProfessionnelSanteService;

@RestController
@RequestMapping("professionnelsante")
public class ProfessionnelSanteController {

    @Autowired
    private ProfessionnelSanteService professionnelSanteService;

    @GetMapping
    public List<ProfessionnelSante> getAllProfessionnelSante() {
        return professionnelSanteService.getAllProfessionnelSante();
    }

    @GetMapping("/{id}")
    public ProfessionnelSante getProfessionnelSanteById(@PathVariable Long id) {
        return professionnelSanteService.getProfessionnelSanteById(id);
    }

    @PostMapping
    public ProfessionnelSante addProfessionnelSante(@RequestBody ProfessionnelSante professionnelSante) {
        return professionnelSanteService.addProfessionnelSante(professionnelSante);
    }

    @PutMapping("/{id}")
    public ProfessionnelSante updateProfessionnelSante(@PathVariable Long id, @RequestBody ProfessionnelSante updatedProfessionnelSante) {
        return professionnelSanteService.updateProfessionnelSante(id, updatedProfessionnelSante);
    }

    @DeleteMapping("/{id}")
    public void deleteProfessionnelSanteById(@PathVariable Long id) {
        professionnelSanteService.deleteProfessionnelSanteById(id);
    }

    /* 
    @DeleteMapping("/{id}")
    public void deleteProfessionnelSanteByName(@PathVariable ProfessionnelSante professionnelSante) {
        professionnelSanteService.deleteProfessionnelSanteByName(professionnelSante);
    }
*/
}
