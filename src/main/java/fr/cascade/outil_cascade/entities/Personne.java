package fr.cascade.outil_cascade.entities;

import java.sql.Date;

import org.springframework.format.annotation.DateTimeFormat;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.OneToOne;

@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public abstract class Personne {

    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    private Long id;
    private String firstName;
    private String lastName;
    @DateTimeFormat(pattern="dd-mm-yyyy")
    private Date birthDate;
    private String ville;
    private String codePostal;
    private String adresse;
    private String numeroTelephone;

    @OneToOne(mappedBy = "personne", fetch = FetchType.LAZY)
    private Compte compte;

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getFirstName() {
        return firstName;
    }
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
    public String getLastName() {
        return lastName;
    }
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
    public Date getBirthDate() {
        return birthDate;
    }
    public void setBirthDate(Date birthDate) {
        this.birthDate = birthDate;
    }
    public String getVille() {
        return ville;
    }
    public void setVille(String ville) {
        this.ville = ville;
    }
    public String getCodePostal() {
        return codePostal;
    }
    public void setCodePostal(String codePostal) {
        this.codePostal = codePostal;
    }
    public String getAdresse() {
        return adresse;
    }
    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }
    public String getNumeroTelephone() {
        return numeroTelephone;
    }
    public void setNumeroTelephone(String numeroTelephone) {
        this.numeroTelephone = numeroTelephone;
    }
    public Compte getCompte() {
        return compte;
    }
    public void setCompte(Compte compte) {
        this.compte = compte;
    }
    public Personne() {
    }
    public Personne(Long id, String firstName, String lastName, Date birthDate, String ville, String codePostal,
            String adresse, String numeroTelephone, Compte compte) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.ville = ville;
        this.codePostal = codePostal;
        this.adresse = adresse;
        this.numeroTelephone = numeroTelephone;
        this.compte = compte;
    }
    @Override
    public String toString() {
        return "Personne [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", birthDate=" + birthDate
                + ", ville=" + ville + ", codePostal=" + codePostal + ", adresse=" + adresse + ", numeroTelephone="
                + numeroTelephone + ", compte=" + compte + "]";
    }
    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((id == null) ? 0 : id.hashCode());
        result = prime * result + ((firstName == null) ? 0 : firstName.hashCode());
        result = prime * result + ((lastName == null) ? 0 : lastName.hashCode());
        result = prime * result + ((birthDate == null) ? 0 : birthDate.hashCode());
        result = prime * result + ((ville == null) ? 0 : ville.hashCode());
        result = prime * result + ((codePostal == null) ? 0 : codePostal.hashCode());
        result = prime * result + ((adresse == null) ? 0 : adresse.hashCode());
        result = prime * result + ((numeroTelephone == null) ? 0 : numeroTelephone.hashCode());
        result = prime * result + ((compte == null) ? 0 : compte.hashCode());
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
        Personne other = (Personne) obj;
        if (id == null) {
            if (other.id != null)
                return false;
        } else if (!id.equals(other.id))
            return false;
        if (firstName == null) {
            if (other.firstName != null)
                return false;
        } else if (!firstName.equals(other.firstName))
            return false;
        if (lastName == null) {
            if (other.lastName != null)
                return false;
        } else if (!lastName.equals(other.lastName))
            return false;
        if (birthDate == null) {
            if (other.birthDate != null)
                return false;
        } else if (!birthDate.equals(other.birthDate))
            return false;
        if (ville == null) {
            if (other.ville != null)
                return false;
        } else if (!ville.equals(other.ville))
            return false;
        if (codePostal == null) {
            if (other.codePostal != null)
                return false;
        } else if (!codePostal.equals(other.codePostal))
            return false;
        if (adresse == null) {
            if (other.adresse != null)
                return false;
        } else if (!adresse.equals(other.adresse))
            return false;
        if (numeroTelephone == null) {
            if (other.numeroTelephone != null)
                return false;
        } else if (!numeroTelephone.equals(other.numeroTelephone))
            return false;
        if (compte == null) {
            if (other.compte != null)
                return false;
        } else if (!compte.equals(other.compte))
            return false;
        return true;
    }
 
   

}
