package fr.cascade.outil_cascade.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import fr.cascade.outil_cascade.entities.Connexion;

public interface ConnexionRepository extends JpaRepository<Connexion,Long> {
    Iterable<Connexion> findAllByUserId(Long userId);
}
