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

import fr.cascade.outil_cascade.entities.EnfantAutiste;
import fr.cascade.outil_cascade.services.EnfantAutisteService;

@Controller
@RequestMapping("/enfant_autiste")
public class EnfantAutisteController {

    @Autowired
    private EnfantAutisteService enfantAutisteService;

    @GetMapping("/list")
    public String showEnfantAutisteList(Model model) {
        List<EnfantAutiste> enfantAutistes = enfantAutisteService.getAllEnfantAutistes();
        model.addAttribute("enfantAutistes", enfantAutistes);
        return "enfantAutisteList";
    }

    @GetMapping("/add")
    public String showAddEnfantAutisteForm(Model model) {
        model.addAttribute("enfantAutiste", new EnfantAutiste());
        return "addEditEnfantAutiste";
    }

    @GetMapping("/edit/{id}")
    public String showEditEnfantAutisteForm(@PathVariable Long id, Model model) {
        EnfantAutiste enfantAutiste = enfantAutisteService.getEnfantAutisteById(id);
        model.addAttribute("enfantAutiste", enfantAutiste);
        return "addEditEnfantAutiste";
    }

    @PostMapping("/save")
    public String saveEnfantAutiste(@ModelAttribute EnfantAutiste EnfantAutiste) {
        enfantAutisteService.addEnfantAutiste(EnfantAutiste);
        return "redirect:/enfant_autiste/list";
    }

    @GetMapping("/delete/{id}")
    public String deleteEnfantAutiste(@PathVariable Long id) {
        enfantAutisteService.deleteEnfantAutisteById (id);
        return "redirect:/enfant_autiste/list";
    }
}
    
