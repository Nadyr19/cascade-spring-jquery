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
@Table(name = "Resultat")
@org.hibernate.annotations.Immutable
public class Resultat {

    @Embeddable
    public static class Id implements Serializable {
        @Column(name = "EnfantAutiste_ID")
        protected Long EnfantAutisteId;
        @Column(name = "Exercice_ID")
        protected Long exerciceId;

        public Id() {
        }

        public Id(Long utilisateurId, Long exerciceId) {
            this.EnfantAutisteId = utilisateurId;
            this.exerciceId = exerciceId;
        }

        public boolean equals(Object o) {
            if (o != null && o instanceof Id) {
                Id that = (Id) o;
                return this.EnfantAutisteId.equals(that.EnfantAutisteId)
                        && this.exerciceId.equals(that.exerciceId);
            }
            return false;
        }

        public int hashCode() {
            return EnfantAutisteId.hashCode() + exerciceId.hashCode();
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
    @JoinColumn(name = "EnfantAutiste_ID", insertable = false, updatable = false)
    protected EnfantAutiste enfantAutiste;
    @ManyToOne
    @JoinColumn(name = "Exercice_ID", insertable = false, updatable = false)
    protected Exercice exercice;


    public Resultat(Date date, int nombreEssais, Date duree, int score, EnfantAutiste enfantAutiste, Exercice exercice) {
        this.date = date;
        this.nombreEssais = nombreEssais;
        this.duree = duree;
        this.score = score;
        this.enfantAutiste = enfantAutiste;
        this.exercice = exercice;
        this.id.exerciceId = exercice.getId();
        this.id.EnfantAutisteId = enfantAutiste.getId();
        exercice.getResultat().add(this);
        enfantAutiste.getResultat().add(this);

    }
    


}