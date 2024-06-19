package fr.cascade.outil_cascade.entities;

import java.sql.Date;

import jakarta.persistence.Entity;

//import jakarta.persistence.GeneratedValue;
//import jakarta.persistence.GenerationType;
//import jakarta.persistence.Id;

@Entity
public class ProfessionnelSante extends Personne {

   // @Id
   // @GeneratedValue(strategy = GenerationType.IDENTITY)
   // private Long id;
    private String hopital;
    private String service;

    // @OneToOne(mappedBy = "professionnelSante", fetch = FetchType.LAZY)
   // private Compte compte;
    
    public String getHopital() {
        return hopital;
    }
    public void setHopital(String hopital) {
        this.hopital = hopital;
    }
    public String getService() {
        return service;
    }
    public void setService(String service) {
        this.service = service;
    }
   
    public ProfessionnelSante() {
    }
    public ProfessionnelSante(String hopital, String service) {
        this.hopital = hopital;
        this.service = service;
    }
  
    public ProfessionnelSante(Long id, String firstName, String lastName, Date birthDate, String ville,
            String codePostal, String adresse, String numeroTelephone, Compte compte, String hopital, String service) {
        super(id, firstName, lastName, birthDate, ville, codePostal, adresse, numeroTelephone, compte);
        this.hopital = hopital;
        this.service = service;
    }
    @Override
    public String toString() {
        return "ProfessionnelSante [hopital=" + hopital + ", service=" + service + "]";
    }
    @Override
    public int hashCode() {
        final int prime = 31;
        int result = super.hashCode();
        result = prime * result + ((hopital == null) ? 0 : hopital.hashCode());
        result = prime * result + ((service == null) ? 0 : service.hashCode());
        return result;
    }
    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (!super.equals(obj))
            return false;
        if (getClass() != obj.getClass())
            return false;
        ProfessionnelSante other = (ProfessionnelSante) obj;
        if (hopital == null) {
            if (other.hopital != null)
                return false;
        } else if (!hopital.equals(other.hopital))
            return false;
        if (service == null) {
            if (other.service != null)
                return false;
        } else if (!service.equals(other.service))
            return false;
        return true;
    }
 

}
