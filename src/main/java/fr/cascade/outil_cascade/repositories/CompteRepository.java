package fr.cascade.outil_cascade.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import fr.cascade.outil_cascade.entities.Compte;

public interface CompteRepository extends JpaRepository<Compte, Long> {

}
