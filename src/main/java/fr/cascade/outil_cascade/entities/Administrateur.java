package fr.cascade.outil_cascade.entities;

import java.sql.Date;

import jakarta.persistence.Entity;

@Entity
public class Administrateur extends Personne {

   // @Id
   // @GeneratedValue(strategy = GenerationType.IDENTITY)
   // private Long id;
    private String bureau;

  //   @OneToOne(mappedBy = "administrateur", fetch = FetchType.LAZY)
  //  private Compte compte;

    public String getBureau() {
        return bureau;
    }

    public void setBureau(String bureau) {
        this.bureau = bureau;
    }

    public Administrateur() {
    }

    public Administrateur(String bureau) {
        this.bureau = bureau;
    }

    
    public Administrateur(Long id, String firstName, String lastName, Date birthDate, String ville, String codePostal,
            String adresse, String numeroTelephone, Compte compte, String bureau) {
        super(id, firstName, lastName, birthDate, ville, codePostal, adresse, numeroTelephone, compte);
        this.bureau = bureau;
    }

    @Override
    public String toString() {
        return "Administrateur [bureau=" + bureau + ", getId()=" + getId() + ", getFirstName()="
                + getFirstName() + ", getLastName()=" + getLastName() + ", getBirthDate()=" + getBirthDate()
                + ", getVille()=" + getVille() + ", getCodePostal()=" + getCodePostal() + ", getAdresse()="
                + getAdresse() + ", getNumeroTelephone()=" + getNumeroTelephone() + "]";
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = super.hashCode();
        result = prime * result + ((bureau == null) ? 0 : bureau.hashCode());
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
        Administrateur other = (Administrateur) obj;
        if (bureau == null) {
            if (other.bureau != null)
                return false;
        } else if (!bureau.equals(other.bureau))
            return false;
        return true;
    }


   
}
