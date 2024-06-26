/* 
package fr.cascade.outil_cascade;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import fr.cascade.outil_cascade.entities.Role;
import fr.cascade.outil_cascade.entities.User;
import fr.cascade.outil_cascade.repositories.RoleRepository;
import fr.cascade.outil_cascade.repositories.UserRepository;
import fr.cascade.outil_cascade.services.RoleService;

@SpringBootTest
@Transactional
public class RoleServiceIntegrationTest {

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleService roleService;

    @BeforeEach
    void setUp() {
        roleRepository.deleteAll();
        userRepository.deleteAll();

        // Create Roles
        Role role1 = new Role();
        role1.setName("Enfant_Autiste");

        Role role2 = new Role();
        role2.setName("Administrateur");

        roleRepository.save(role1);
        roleRepository.save(role2);
        
        // Create users
        User user1 = new User();
        user1.setEmail("fifi@gmail.com");
        user1.setPassword("fifi123!");
        user1.setRole(role1);
        
        
        User user2 = new User();
        user2.setEmail("toto@gmail.com");
        user2.setPassword("toto123!");
        user2.setRole(role1);
        
        userRepository.save(user1);
        userRepository.save(user2); 
    }


    @Test
    void testGetAllRoles() {
        List<Role> roles = roleService.getAllRoles();

        assertEquals(2, roles.size());
        assertEquals("Administrateur", roles.get(0).getName());
        assertEquals("Enfant_Autiste", roles.get(1).getName());
    }


    
    @Test
    void testGetRoleById() {
        Role role = roleRepository.findAll().get(0);
        Optional<Role> foundRole = roleService.getRoleById(role.getId());

        assertEquals(true, foundRole.isPresent());
        assertEquals(role.getName(), foundRole.get().getName());
    }

    @Test
    void testGetRoleUser() {
        Role role = roleRepository.findAll().get(0);
        List<User> users = roleService.getRoleUsers(role.getId());

        assertEquals(2, users.size());
        
        assertEquals("fifi@gmail.com", users.get(0).getEmail());
        assertEquals("fifi123!", users.get(0).getPassword());

        assertEquals("toto@gmail.com", users.get(1).getEmail());
        assertEquals("toto123!", users.get(1).getPassword());
    }

}
    */