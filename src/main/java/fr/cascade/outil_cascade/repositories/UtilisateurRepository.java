package fr.cascade.outil_cascade.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import fr.cascade.outil_cascade.entities.Utilisateur;

public interface UtilisateurRepository extends JpaRepository<Utilisateur,Long> {

}
