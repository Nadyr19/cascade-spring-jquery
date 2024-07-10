/* 
package fr.cascade.outil_cascade.security;



import fr.cascade.outil_cascade.entities.User; // Import du modèle User
import fr.cascade.outil_cascade.repositories.UserRepository; // Import du repository User

import org.springframework.beans.factory.annotation.Autowired; // Import de l'annotation Autowired
import org.springframework.security.core.userdetails.UserDetails; // Import de l'interface UserDetails
import org.springframework.security.core.userdetails.UserDetailsService; // Import de l'interface UserDetailsService
import org.springframework.security.core.userdetails.UsernameNotFoundException; // Import de l'exception UsernameNotFoundException
import org.springframework.stereotype.Service; // Import de l'annotation Service

@Service // Annotation pour indiquer que cette classe est un service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired // Injection de dépendance pour UserRepository
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String login) throws UsernameNotFoundException {
        // Charge le user par login
        User user = userRepository.findByEmail(login);
        if (user == null) {
            // Si le user n'est pas trouvé, lance une exception
            throw new UsernameNotFoundException("User not found");
        }
        // Retourne un UserDetails avec les informations du client
        return org.springframework.security.core.userdetails.User.withUsername(user.getEmail())
                .password(user.getPassword())
                .authorities("USER").build();
    }
}
*/