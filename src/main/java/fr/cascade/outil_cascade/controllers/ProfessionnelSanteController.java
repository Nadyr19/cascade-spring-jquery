package fr.cascade.outil_cascade.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestMapping;
import fr.cascade.outil_cascade.entities.ProfessionnelSante;
import fr.cascade.outil_cascade.services.ProfessionnelSanteService;

@Controller
@RequestMapping("/professionnelSante")
public class ProfessionnelSanteController {

    @Autowired
    private ProfessionnelSanteService professionnelSanteService;


    @GetMapping("/list")
    public String showProfessionnelSanteList(Model model) {
        List<ProfessionnelSante> professionnelSante = professionnelSanteService.getAllProfessionnelSante();
        model.addAttribute("professionnelSante", professionnelSante);
        return "professionnelSanteListe";
    }

    @GetMapping("/add")
    public String showAddProfessionnelSanteForm(Model model) {
        model.addAttribute("professionnelSante", new ProfessionnelSante());
        return "addEditProfessionnelSante";
    }

    @GetMapping("/edit/{id}")
    public String showEditProfessionnelSanteForm(@PathVariable Long id, Model model) {
        ProfessionnelSante professionnelSante = professionnelSanteService.getProfessionnelSanteById(id);
        model.addAttribute("professionnelSante", professionnelSante);
        return "addEditProfessionnelSante";
    }

    @PostMapping("/save")
    public String saveProfessionnelSante(@ModelAttribute ProfessionnelSante professionnelSante) {
        professionnelSanteService.addProfessionnelSante(professionnelSante);
        return "redirect:/professionnelSante/list";
    }

    @GetMapping("/delete/{id}")
    public String deleteProfessionnelSanteById(@PathVariable Long id) {
        professionnelSanteService.deleteProfessionnelSanteById(id); 
        return "redirect:/professionnelSante/list";
    }

    /* 
    @DeleteMapping("/{id}")
    public void deleteProfessionnelSanteByName(@PathVariable ProfessionnelSante professionnelSante) {
        professionnelSanteService.deleteProfessionnelSanteByName(professionnelSante);
    }
*/
}
