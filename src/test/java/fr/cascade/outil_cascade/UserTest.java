package fr.cascade.outil_cascade;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;
import fr.cascade.outil_cascade.entities.User;
// import fr.cascade.outil_cascade.entities.Utilisateur;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
// import fr.cascade.outil_cascade.repositories.UserRepository;
// import fr.cascade.outil_cascade.repositories.UtilisateurRepository;

public class UserTest {

    @Test
    public void affichertest() {
        System.out.println("premier test");
    }

    // @Autowired
    // private TestEntityManager entityManager;

    // @Autowired
    // private UserRepository repo;

    @Test
    public void testUserGetterAndSetter() {
        User user = new User();
        user.setId(1L);
        user.setEmail("riri@gmail.com");
        user.setPassword("riri2024");

        assertEquals(1L, user.getId());
        assertEquals("riri@gmail.com", user.getEmail());
        assertEquals("riri2024", user.getPassword());
    }

    @Test
    public void testUserToString() {
        User user = new User();
        user.setId(1L);
        user.setEmail("riri@gmail.com");
        user.setPassword("riri2024");


        String expectedString = "User [id=1, email=riri@gmail.com, password=riri2024]";
        assertEquals(expectedString, user.toString());

    }

    // User savedUser = repo.save(user);

    // User userVerified = new User("Riri","Fafa","riri@gmail.com","riri2024");
    // assertEquals(userVerified, savedUser);
    // assertEquals(User("Riri","Fafa","riri@gmail.com","riri2024"));

    /*
     * private UtilisateurRepository utilisateurRepo;
     * 
     * @Test
     * public void testCreateUtilisateur() {
     * Utilisateur utilisateur = new Utilisateur();
     * utilisateur.setId(null);
     * utilisateur.setFirstName("Riri");
     * utilisateur.setLastName("Fafa");
     * utilisateur.setBirthDate(New Date(1980-01-01));
     * utilisateur.setVille("Paris");
     * utilisateur.setCodePostal("75000");
     * utilisateur.setAdresse("10 rue de la paix");
     * utilisateur.setNumeroTelephone("123654789");
     * 
     * User user = new User();
     * user.setEmail("riri@gmail.com");
     * user.setPassword("riri2024");
     * user.setFirstName("Riri");
     * user.setLastName("Fafa");
     * 
     * utilisateur.setClasse("CM2");
     * utilisateur.setEcole("Victor Hugo");
     * 
     * 
     * 
     * Utilisateur savedUtilisateur = utilisateurRepo.save(utilisateur);
     * 
     * User userVerified = new User("Riri","Fafa","riri@gmail.com","riri2024");
     * assertEquals(userVerified, savedUtilisateur);
     * 
     * // Long id, String firstName, String lastName, Date birthDate, String ville,
     * String codePostal,
     * // String adresse, String numeroTelephone, User user, String classe, String
     * ecole, Collection<Resultat> resultat
     * }
     * 
     * @Test
     * public void testCreateUser() {
     * User user = new User();
     * user.setEmail("riri@gmail.com");
     * user.setPassword("riri2024");
     * user.setFirstName("Riri");
     * user.setLastName("Fafa");
     * 
     * User savedUser = repo.save(user);
     * 
     * User existUser = entityManager.find(User.class, savedUser.getId());
     * 
     * assertEquals(savedUser, existUser);
     * 
     * }
     */

}
