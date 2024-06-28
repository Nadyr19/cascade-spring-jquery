package fr.cascade.outil_cascade;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import fr.cascade.outil_cascade.entities.Role;
import fr.cascade.outil_cascade.entities.User;
import fr.cascade.outil_cascade.repositories.RoleRepository;
import fr.cascade.outil_cascade.repositories.UserRepository;

@SpringBootTest
@Transactional
public class UserRoleIntegrationTest {

  @Autowired
  private UserRepository userRepository;

  @Autowired
  private RoleRepository roleRepository;

  @Test
  public void testUserRoleRelationship() {

    List<User> users = new ArrayList<>();

    // Create a new role
    Role role = new Role();
    role.setName("Enfant_Autiste");

    // Save the role to the repository
    // roleRepository.save(role);

    // Create new users
    User user1 = new User();
    user1.setEmail("fifi@gmail.com");
    user1.setPassword("fifi123!");
    user1.setFirstName("Fifi");
    user1.setLastName("Tata");
    users.add(user1);
    user1.setRole(role);

    User user2 = new User();
    user2.setEmail("toto@gmail.com");
    user2.setPassword("toto123!");
    user2.setFirstName("Toto");
    user2.setLastName("Riri");
    users.add(user2);
    user2.setRole(role);

    role.setUsers(users);

    roleRepository.save(role);

    role = roleRepository.findById(role.getId()).orElse(null);
    ArrayList<User> Liste = (ArrayList<User>) userRepository.findAll();

    // Assertions
    assertNotNull(role);

    assertEquals(2, role.getUsers().size());

  }

}
