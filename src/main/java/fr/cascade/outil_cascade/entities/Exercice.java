package fr.cascade.outil_cascade.entities;

import java.util.ArrayList;
import java.util.Collection;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class Exercice {

      @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String intitule;
    private String niveau;
    @OneToMany(mappedBy = "exercice", fetch = FetchType.LAZY)
    private Collection<Resultat> resultat= new ArrayList<>();

 
    public Collection<Resultat> getResultat() {
        return resultat;
    }
    public void setResultat(Collection<Resultat> resultat) {
        this.resultat = resultat;
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
    public Exercice() {
    }
    public Exercice(String intitule, String niveau, Collection<Resultat> resultat) {
        this.intitule = intitule;
        this.niveau = niveau;
        this.resultat = resultat;
    }
    @Override
    public String toString() {
        return "Exercice [intitule=" + intitule + ", niveau=" + niveau + ", resultat=" + resultat + "]";
    }
    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((intitule == null) ? 0 : intitule.hashCode());
        result = prime * result + ((niveau == null) ? 0 : niveau.hashCode());
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
        Exercice other = (Exercice) obj;
        if (intitule == null) {
            if (other.intitule != null)
                return false;
        } else if (!intitule.equals(other.intitule))
            return false;
        if (niveau == null) {
            if (other.niveau != null)
                return false;
        } else if (!niveau.equals(other.niveau))
            return false;
        if (resultat == null) {
            if (other.resultat != null)
                return false;
        } else if (!resultat.equals(other.resultat))
            return false;
        return true;
    }
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
  
    

}
