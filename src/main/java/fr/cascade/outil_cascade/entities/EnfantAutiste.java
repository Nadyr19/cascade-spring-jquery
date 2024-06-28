package fr.cascade.outil_cascade.entities;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
//import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;

@Entity
public class EnfantAutiste {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Date dateNaissance;

    @OneToOne
    private User user;

    @OneToMany(mappedBy = "enfantAutiste")
    private Collection<Resultat> resultat = new ArrayList<>();

    public Collection<Resultat> getResultat() {
        return resultat;
    }

    public void setResultat(Collection<Resultat> resultat) {
        this.resultat = resultat;
    }

    public EnfantAutiste(Collection<Resultat> resultat) {
        this.resultat = resultat;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getDateNaissance() {
        return dateNaissance;
    }

    public void setDateNaissance(Date dateNaissance) {
        this.dateNaissance = dateNaissance;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public EnfantAutiste() {
    }

    public EnfantAutiste(Long id, Date dateNaissance, User user, Collection<Resultat> resultat) {
        this.id = id;
        this.dateNaissance = dateNaissance;
        this.user = user;
        this.resultat = resultat;
    }

    @Override
    public String toString() {
        return "EnfantAutiste [id=" + id + ", dateNaissance=" + dateNaissance + ", user=" + user + ", resultat="
                + resultat + "]";
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((id == null) ? 0 : id.hashCode());
        result = prime * result + ((dateNaissance == null) ? 0 : dateNaissance.hashCode());
        result = prime * result + ((user == null) ? 0 : user.hashCode());
        result = prime * result + ((resultat == null) ? 0 : resultat.hashCode());
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
        EnfantAutiste other = (EnfantAutiste) obj;
        if (id == null) {
            if (other.id != null)
                return false;
        } else if (!id.equals(other.id))
            return false;
        if (dateNaissance == null) {
            if (other.dateNaissance != null)
                return false;
        } else if (!dateNaissance.equals(other.dateNaissance))
            return false;
        if (user == null) {
            if (other.user != null)
                return false;
        } else if (!user.equals(other.user))
            return false;
        if (resultat == null) {
            if (other.resultat != null)
                return false;
        } else if (!resultat.equals(other.resultat))
            return false;
        return true;
    }

}
