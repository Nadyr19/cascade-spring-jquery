package fr.cascade.outil_cascade.entities;

import java.time.LocalDateTime;


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
    private LocalDateTime dateHeureDebutConnexion;
    private LocalDateTime dateHeureFinConnexion;

    @ManyToOne
    private User user;

    

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public LocalDateTime getDateHeureDebutConnexion() {
        return dateHeureDebutConnexion;
    }
    public void setDateHeureDebutConnexion(LocalDateTime dateHeureDebutConnexion) {
        this.dateHeureDebutConnexion = dateHeureDebutConnexion;
    }
    public LocalDateTime getDateHeureFinConnexion() {
        return dateHeureFinConnexion;
    }
    public void setDateHeureFinConnexion(LocalDateTime dateHeureFinConnexion) {
        this.dateHeureFinConnexion = dateHeureFinConnexion;
    }
    public User getUser() {
        return user;
    }
    public void setUser(User user) {
        this.user = user;
    }
    public Connexion(Long id, LocalDateTime dateHeureDebutConnexion, LocalDateTime dateHeureFinConnexion, User user) {
        this.id = id;
        this.dateHeureDebutConnexion = dateHeureDebutConnexion;
        this.dateHeureFinConnexion = dateHeureFinConnexion;
        this.user = user;
    }
    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((id == null) ? 0 : id.hashCode());
        result = prime * result + ((dateHeureDebutConnexion == null) ? 0 : dateHeureDebutConnexion.hashCode());
        result = prime * result + ((dateHeureFinConnexion == null) ? 0 : dateHeureFinConnexion.hashCode());
        result = prime * result + ((user == null) ? 0 : user.hashCode());
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
        Connexion other = (Connexion) obj;
        if (id == null) {
            if (other.id != null)
                return false;
        } else if (!id.equals(other.id))
            return false;
        if (dateHeureDebutConnexion == null) {
            if (other.dateHeureDebutConnexion != null)
                return false;
        } else if (!dateHeureDebutConnexion.equals(other.dateHeureDebutConnexion))
            return false;
        if (dateHeureFinConnexion == null) {
            if (other.dateHeureFinConnexion != null)
                return false;
        } else if (!dateHeureFinConnexion.equals(other.dateHeureFinConnexion))
            return false;
        if (user == null) {
            if (other.user != null)
                return false;
        } else if (!user.equals(other.user))
            return false;
        return true;
    }
   
   
   
    
}
    
    

