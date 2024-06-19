package fr.cascade.outil_cascade.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import fr.cascade.outil_cascade.entities.Exercice;

public interface ExerciceRepository extends JpaRepository<Exercice,Long> {

}
