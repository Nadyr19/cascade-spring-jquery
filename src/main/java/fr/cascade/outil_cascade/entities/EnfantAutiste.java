package fr.cascade.outil_cascade.entities;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
//import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Past;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class EnfantAutiste {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nom;
    private String prenom;

    @NotNull(message = "Date of birth is required")
    @Past(message = "Date of birth must be in the past")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date dateNaissance;
    private String etablissementScolaire;

    @OneToOne
    private User user;

    @OneToMany(mappedBy = "enfantAutiste")
    private Collection<Resultat> resultat = new ArrayList<>();

    @Override
    public String toString() {
        return "EnfantAutiste [id=" + id + ", nom=" + nom + ", prenom=" + prenom + ", dateNaissance=" + dateNaissance
                + ", etablissementScolaire=" + etablissementScolaire + ", user=" + user + "]";
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((id == null) ? 0 : id.hashCode());
        result = prime * result + ((nom == null) ? 0 : nom.hashCode());
        result = prime * result + ((prenom == null) ? 0 : prenom.hashCode());
        result = prime * result + ((dateNaissance == null) ? 0 : dateNaissance.hashCode());
        result = prime * result + ((etablissementScolaire == null) ? 0 : etablissementScolaire.hashCode());
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
        if (nom == null) {
            if (other.nom != null)
                return false;
        } else if (!nom.equals(other.nom))
            return false;
        if (prenom == null) {
            if (other.prenom != null)
                return false;
        } else if (!prenom.equals(other.prenom))
            return false;
        if (dateNaissance == null) {
            if (other.dateNaissance != null)
                return false;
        } else if (!dateNaissance.equals(other.dateNaissance))
            return false;
        if (etablissementScolaire == null) {
            if (other.etablissementScolaire != null)
                return false;
        } else if (!etablissementScolaire.equals(other.etablissementScolaire))
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
