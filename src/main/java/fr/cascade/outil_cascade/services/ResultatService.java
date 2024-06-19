/* 
package fr.cascade.outil_cascade.services;

import java.util.List;
//import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fr.cascade.outil_cascade.entities.Resultat;
import fr.cascade.outil_cascade.repositories.ResultatRepository;

@Service
public class ResultatService {

     @Autowired
    private ResultatRepository resultatRepository;

    public List<Resultat> getAllresultats() {
        return resultatRepository.findAll();
    }

    public Resultat getResultatById(Long id) {
        return resultatRepository.findById(id).orElse(null);
    }

    public Resultat addResultat(Resultat resultat) {
        return resultatRepository.save(resultat);
    }
    
    public void deleteResultatById(Long id) {
        resultatRepository.deleteById(id);
    }

    public void deleteResultatByName(Resultat resultat) {
        resultatRepository.delete(resultat);
    }


    /* 
    public Resultat updateResultat(Long id, Resultat updatedResultat) {
        Optional<Resultat> existingResultat = resultatRepository.findById(id);
        if (existingResultat.isPresent()) {
            Resultat resultat = existingResultat.get();
            resultat.set(updatedResultat.getClass());
            resultat.setPassword(updatedresultat.getPassword());
            return resultatRepository.save(resultat);
        }
        return null; // Gérer le cas où la resultat n'est pas trouvée
    }
     

    // Ajouter d'autres méthodes pour mettre à jour, supprimer,

}
*/