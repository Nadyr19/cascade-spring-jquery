package fr.cascade.outil_cascade.repositories;

//import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;

import fr.cascade.outil_cascade.entities.User;


public interface UserRepository extends JpaRepository<User, Long> {

    Iterable<User> findAllByRoleId(long roleId);
    User findByEmail(String email);

    Iterable<User> findAllByRoleNom(String roleNom);

    User findUserByNom(String nom);

     //@Query(value="select nom, prenom, date_naissance, role_id from users, roles where user.aId.id=?1")
    // @Query(value="SELECT nom, prenom, date_naissance FROM user FULL JOIN roles ON user.role_id = roles.role_id WHERE roles.roles_id = 1")
     //  List<User> findAllProfSante(String aId);
}

//SELECT nom, prenom, date_naissance FROM user FULL JOIN roles ON user.role_id = roles.role_id WHERE roles.roles_id = 1
