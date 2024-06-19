/*
package fr.cascade.outil_cascade.entities;

import java.util.ArrayList;
import java.util.Collection;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;

@Entity
public class Exercice {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;
    @Column(unique = true)
    private String intitule;
    private String niveau;
    @ManyToMany(mappedBy = "exercice", fetch = FetchType.LAZY)
    private Collection<Utilisateur> utilisateur= new ArrayList<>();

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getIntitule() {
        return intitule;
    }
    public void setIntitule(String intitule) {
        this.intitule = intitule;
    }
    public String getNiveau() {
        return niveau;
    }
    public void setNiveau(String niveau) {
        this.niveau = niveau;
    }
    public Collection<Utilisateur> getUtilisateur() {
        return utilisateur;
    }
    public void setUtilisateur(Collection<Utilisateur> utilisateur) {
        this.utilisateur = utilisateur;
    }
    public Exercice() {
    }
    public Exercice(Long id, String intitule, String niveau, Collection<Utilisateur> utilisateur) {
        this.id = id;
        this.intitule = intitule;
        this.niveau = niveau;
        this.utilisateur = utilisateur;
    }
   
    

}
 */
