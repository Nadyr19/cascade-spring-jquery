package fr.cascade.outil_cascade.entities;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class Connexion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Date dateHeureConnexion;
    @ManyToOne
    private Compte compte;
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public Date getDateHeureConnexion() {
        return dateHeureConnexion;
    }
    public void setDateHeureConnexion(Date dateHeureConnexion) {
        this.dateHeureConnexion = dateHeureConnexion;
    }
    public Compte getCompte() {
        return compte;
    }
    public void setCompte(Compte compte) {
        this.compte = compte;
    }
    public Connexion() {
    }
    public Connexion(Long id, Date dateHeureConnexion, Compte compte) {
        this.id = id;
        this.dateHeureConnexion = dateHeureConnexion;
        this.compte = compte;
    }
    
    
   
    }
    
    

