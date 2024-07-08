package fr.cascade.outil_cascade.entities;

import java.util.List;

import jakarta.persistence.*;
//import jakarta.validation.constraints.NotBlank;
//import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "users")
public class User {
   // private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
   // @Column(name = "user_id")
    private Long id;

  //  @NotBlank(message = "Email is required")
  //  @Column(name = "Email", nullable = false, unique = true)
    private String email;

  //  @NotBlank(message = "Password is required")
  //  @Column(name = "Password", nullable = false)
    private String password;

    

    @OneToOne(mappedBy = "user")
    private EnfantAutiste enfantAutiste;

    @OneToOne(mappedBy = "user")
    private Administrateur administrateur;

    @OneToOne(mappedBy = "user")
    private ProfessionnelSante professionnelSante;
  
    @OneToMany(mappedBy = "user")
    private List<Connexion> connexion;

    @ManyToOne
    private Role role;

    @Override
    public String toString() {
        return "User [id=" + id + ", email=" + email + ", password=" + password + ", role=" + role + "]";
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((id == null) ? 0 : id.hashCode());
        result = prime * result + ((email == null) ? 0 : email.hashCode());
        result = prime * result + ((password == null) ? 0 : password.hashCode());
        result = prime * result + ((enfantAutiste == null) ? 0 : enfantAutiste.hashCode());
        result = prime * result + ((administrateur == null) ? 0 : administrateur.hashCode());
        result = prime * result + ((professionnelSante == null) ? 0 : professionnelSante.hashCode());
        result = prime * result + ((connexion == null) ? 0 : connexion.hashCode());
        result = prime * result + ((role == null) ? 0 : role.hashCode());
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
        User other = (User) obj;
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
        if (enfantAutiste == null) {
            if (other.enfantAutiste != null)
                return false;
        } else if (!enfantAutiste.equals(other.enfantAutiste))
            return false;
        if (administrateur == null) {
            if (other.administrateur != null)
                return false;
        } else if (!administrateur.equals(other.administrateur))
            return false;
        if (professionnelSante == null) {
            if (other.professionnelSante != null)
                return false;
        } else if (!professionnelSante.equals(other.professionnelSante))
            return false;
        if (connexion == null) {
            if (other.connexion != null)
                return false;
        } else if (!connexion.equals(other.connexion))
            return false;
        if (role == null) {
            if (other.role != null)
                return false;
        } else if (!role.equals(other.role))
            return false;
        return true;
    }


    
    

    
}
