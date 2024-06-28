package fr.cascade.outil_cascade;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.when;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;

import fr.cascade.outil_cascade.entities.User;
import fr.cascade.outil_cascade.entities.Role;
import fr.cascade.outil_cascade.repositories.UserRepository;
import fr.cascade.outil_cascade.repositories.RoleRepository;
import fr.cascade.outil_cascade.services.RoleService;

@ExtendWith(MockitoExtension.class)
@SpringBootTest
public class RoleServiceTest {

    @Mock
    private RoleRepository roleRepository;

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private RoleService roleService;

    @Test
    void testGetAllRoles() {
        Role role1 = new Role();
        role1.setId(1L);
        role1.setName("Enfant_Autiste");

        Role role2 = new Role();
        role2.setId(2L);
        role2.setName("Administrateur");

        when(roleRepository.findAll()).thenReturn(Arrays.asList(role1, role2));

        List<Role> roles = roleService.getAllRoles();

        assertEquals(2, roles.size());
        assertEquals("Administrateur", roles.get(0).getName());
        assertEquals("Enfant_Autiste", roles.get(1).getName());
    }

    @Test
    void testGetRoleById() {
        Role role = new Role();
        role.setId(1L);
        role.setName("Enfant_Autiste");

        when(roleRepository.findById(anyLong())).thenReturn(Optional.of(role));

        Optional<Role> foundRole = roleService.getRoleById(1L);

        assertEquals(true, foundRole.isPresent());
        assertEquals("Enfant_Autiste", foundRole.get().getName());
    }

    @Test
    void testGetRoleUser() {

        //Create a Role
        Role role = new Role();
        role.setId(1L);
        role.setName("Enfant_Autiste");

        // Create new Users

        User user1 = new User();
        user1.setId(100L);
        user1.setEmail("fifi@gmail.com");
        user1.setPassword("fifi123!");
        user1.setFirstName("Fifi");
        user1.setLastName("Tata");
        user1.setRole(role);

        User user2 = new User();
        user2.setId(101L);
        user2.setEmail("toto@gmail.com");
        user2.setPassword("toto123!");
        user2.setFirstName("Toto");
        user2.setLastName("Riri");
        user2.setRole(role);
        when(userRepository.findAllByRoleId(anyLong())).thenReturn(Arrays.asList(user1, user2));

        List<User> users = roleService.getRoleUsers(1L);
        
    
        assertEquals(2, users.size());

        assertEquals("fifi@gmail.com", users.get(0).getEmail());
        assertEquals("fifi123!", users.get(0).getPassword());
        assertEquals("Fifi", users.get(0).getFirstName());
        assertEquals("Tata", users.get(0).getLastName());

        assertEquals("toto@gmail.com", users.get(1).getEmail());
        assertEquals("toto123!", users.get(1).getPassword());
        assertEquals("Toto", users.get(1).getFirstName());
        assertEquals("Riri", users.get(1).getLastName());
    }

}
