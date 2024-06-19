package fr.cascade.outil_cascade.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import fr.cascade.outil_cascade.entities.Personne;

public interface PersonneRepository extends JpaRepository<Personne,Long> {

}
