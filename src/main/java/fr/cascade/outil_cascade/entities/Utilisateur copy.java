/* 
package fr.cascade.outil_cascade.entities;

import java.sql.Date;
import java.util.ArrayList;
import java.util.Collection;

import jakarta.persistence.Entity;
import jakarta.persistence.ManyToMany;


@Entity
public class Utilisateur extends Personne {

  //  @Id
  //  @GeneratedValue(strategy = GenerationType.IDENTITY)
  //  private Long id;
    private String classe;
    private String ecole;

    @ManyToMany
    private Collection<Exercice> exercice= new ArrayList<>();

    // @OneToOne(mappedBy = "utilisateur", fetch = FetchType.LAZY)
   // private Compte compte;

    public String getClasse() {
        return classe;
    }
    public void setClasse(String classe) {
        this.classe = classe;
    }
    public String getEcole() {
        return ecole;
    }
    public void setEcole(String ecole) {
        this.ecole = ecole;
    }
    public Collection<Exercice> getExercice() {
        return exercice;
    }
    public void setExercice(Collection<Exercice> exercice) {
        this.exercice = exercice;
    }
  
    public Utilisateur() {
    }
    public Utilisateur(String classe, String ecole, Collection<Exercice> exercice) {
        this.classe = classe;
        this.ecole = ecole;
        this.exercice = exercice;
    }

    
   
    public Utilisateur(Long id, String firstName, String lastName, Date birthDate, String ville, String codePostal,
            String adresse, String numeroTelephone, Compte compte) {
        super(id, firstName, lastName, birthDate, ville, codePostal, adresse, numeroTelephone, compte);
    }


    
    public Utilisateur(Long id, String firstName, String lastName, Date birthDate, String ville, String codePostal,
            String adresse, String numeroTelephone, Compte compte, String classe, String ecole,
            Collection<Exercice> exercice) {
        super(id, firstName, lastName, birthDate, ville, codePostal, adresse, numeroTelephone, compte);
        this.classe = classe;
        this.ecole = ecole;
        this.exercice = exercice;
    }
    @Override
    public String toString() {
        return "Utilisateur [classe=" + classe + ", ecole=" + ecole + ", exercice=" + exercice + "]";
    }
    @Override
    public int hashCode() {
        final int prime = 31;
        int result = super.hashCode();
        result = prime * result + ((classe == null) ? 0 : classe.hashCode());
        result = prime * result + ((ecole == null) ? 0 : ecole.hashCode());
        result = prime * result + ((exercice == null) ? 0 : exercice.hashCode());
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
        Utilisateur other = (Utilisateur) obj;
        if (classe == null) {
            if (other.classe != null)
                return false;
        } else if (!classe.equals(other.classe))
            return false;
        if (ecole == null) {
            if (other.ecole != null)
                return false;
        } else if (!ecole.equals(other.ecole))
            return false;
        if (exercice == null) {
            if (other.exercice != null)
                return false;
        } else if (!exercice.equals(other.exercice))
            return false;
        return true;
    }
    

    
}
*/