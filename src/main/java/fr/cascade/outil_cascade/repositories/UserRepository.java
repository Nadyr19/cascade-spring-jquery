package fr.cascade.outil_cascade.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import fr.cascade.outil_cascade.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {

    Iterable<User> findAllByRoleId(long roleId);
    User findByEmail(String email);

}