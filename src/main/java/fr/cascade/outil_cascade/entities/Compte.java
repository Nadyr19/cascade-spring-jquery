package fr.cascade.outil_cascade.entities;

import java.util.Collection;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;

@Entity
public class Compte {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String email;
    private String password;
    /* 
    @OneToOne
    private Utilisateur utilisateur;
    @OneToOne
    private Administrateur administrateur;
    @OneToOne
    private ProfessionnelSante professionnelSante;
    */

    @OneToOne
    private Personne personne;

    @OneToMany(mappedBy = "compte", fetch = FetchType.LAZY)
    private Collection<Connexion> connexion;

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public Collection<Connexion> getConnexion() {
        return connexion;
    }
    public void setConnexion(Collection<Connexion> connexion) {
        this.connexion = connexion;
    }
    public Personne getPersonne() {
        return personne;
    }
    public void setPersonne(Personne personne) {
        this.personne = personne;
    }
    public Compte() {
    }
    public Compte(Long id, String email, String password, Personne personne, Collection<Connexion> connexion) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.personne = personne;
        this.connexion = connexion;
    }
    @Override
    public String toString() {
        return "Compte [id=" + id + ", email=" + email + ", password=" + password + ", personne=" + personne
                + ", connexion=" + connexion + "]";
    }
    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((id == null) ? 0 : id.hashCode());
        result = prime * result + ((email == null) ? 0 : email.hashCode());
        result = prime * result + ((password == null) ? 0 : password.hashCode());
        result = prime * result + ((personne == null) ? 0 : personne.hashCode());
        result = prime * result + ((connexion == null) ? 0 : connexion.hashCode());
        return result;
    }
    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Compte other = (Compte) obj;
        if (id == null) {
            if (other.id != null)
                return false;
        } else if (!id.equals(other.id))
            return false;
        if (email == null) {
            if (other.email != null)
                return false;
        } else if (!email.equals(other.email))
            return false;
        if (password == null) {
            if (other.password != null)
                return false;
        } else if (!password.equals(other.password))
            return false;
        if (personne == null) {
            if (other.personne != null)
                return false;
        } else if (!personne.equals(other.personne))
            return false;
        if (connexion == null) {
            if (other.connexion != null)
                return false;
        } else if (!connexion.equals(other.connexion))
            return false;
        return true;
    }

    
}