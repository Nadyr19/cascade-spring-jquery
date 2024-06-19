package fr.cascade.outil_cascade.entities;

import java.io.Serializable;
import java.util.Date;
 
import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "RESULTAT")
@org.hibernate.annotations.Immutable
public class Resultat {

    @Embeddable
    public static class Id implements Serializable {
        @Column(name = "UTILISATEUR_ID")
        protected Long utilisateurId;
        @Column(name = "EXERCICE_ID")
        protected Long exerciceId;

        public Id() {
        }

        public Id(Long utilisateurId, Long exerciceId) {
            this.utilisateurId = utilisateurId;
            this.exerciceId = exerciceId;
        }

        /* 
         private Long id;
         private Date date;
         private int nombreEssais;
         private Date duree;
         private int score;
         */

        public boolean equals(Object o) {
            if (o != null && o instanceof Id) {
                Id that = (Id) o;
                return this.utilisateurId.equals(that.utilisateurId)
                        && this.exerciceId.equals(that.exerciceId);
            }
            return false;
        }

        public int hashCode() {
            return utilisateurId.hashCode() + exerciceId.hashCode();
        }
    }

    @EmbeddedId
    protected Id id = new Id();
    @Column(updatable = false)
    private Date date = new Date();;
    @Column(updatable = false)
    private int nombreEssais;
    // protected Date addedOn = new Date();
    @Column(updatable = false)
    private Date duree;
    @Column(updatable = false)
    private int score;
    @ManyToOne
    @JoinColumn(name = "UTILISATEUR_ID", insertable = false, updatable = false)
    protected Utilisateur utilisateur;
    @ManyToOne
    @JoinColumn(name = "EXERCICE_ID", insertable = false, updatable = false)
    protected Exercice exercice;

   

    /* 
 public CategorizedItem(
 String addedByUsername,
 Category category,
 Item item) {
 this.addedBy = addedByUsername;
 this.category = category;
 this.item = item;
 this.id.categoryId = category.getId();
 this.id.itemId = item.getId();
 category.getCategorizedItems().add(this);
 item.getCategorizedItems().add(this);
 }
    // ...
    */

    public Resultat(Date date, int nombreEssais, Date duree, int score, Utilisateur utilisateur, Exercice exercice) {
        this.date = date;
        this.nombreEssais = nombreEssais;
        this.duree = duree;
        this.score = score;
        this.utilisateur = utilisateur;
        this.exercice = exercice;
        this.id.exerciceId = exercice.getId();
        this.id.utilisateurId = utilisateur.getId();
        exercice.getResultat().add(this);
        utilisateur.getResultat().add(this);

    }
    


}