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
@RequestMapping("/professionnel_sante")
public class ProfessionnelSanteController {

     @Autowired
    private ProfessionnelSanteService professionnelSanteService;

    @GetMapping("/list")
    public String showProfessionnelSanteList(Model model) {
        List<ProfessionnelSante> professionnelSante = professionnelSanteService.getAllProfessionnelSantes();
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
    public String saveProfessionnelSante(@ModelAttribute ProfessionnelSante ProfessionnelSante) {
        professionnelSanteService.addProfessionnelSante(ProfessionnelSante);
        return "redirect:/professionnel_sante/list";
    }

    @GetMapping("/delete/{id}")
    public String deleteProfessionnelSante(@PathVariable Long id) {
        professionnelSanteService.deleteProfessionnelSanteById (id);
        return "redirect:/professionnel_sante/list";
    }

}
