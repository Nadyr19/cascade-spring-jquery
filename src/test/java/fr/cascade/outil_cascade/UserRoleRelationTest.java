package fr.cascade.outil_cascade;


import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.Arrays;

import org.junit.jupiter.api.Test;

import fr.cascade.outil_cascade.entities.Role;
import fr.cascade.outil_cascade.entities.User;

public class UserRoleRelationTest {

    @Test
    public void testUsersRole() {
        //Create a role
        Role role = new Role();
        role.setId(1L);
        role.setName("Enfant_Autiste");

        //Create users
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


        //Set users to role
        role.setUsers(Arrays.asList(user1, user2));

        //Assertions
        assertEquals(2, role.getUsers().size());
        assertEquals(role, user1.getRole());
        assertEquals(role, user2.getRole());
        assertEquals(1L, user1.getRole().getId());
        assertEquals(1L, user2.getRole().getId());

    }

}
