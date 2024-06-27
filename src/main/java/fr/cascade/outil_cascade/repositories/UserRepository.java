package fr.cascade.outil_cascade.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import fr.cascade.outil_cascade.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByEmail(String email);

}