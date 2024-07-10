package fr.cascade.outil_cascade.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import fr.cascade.outil_cascade.entities.User;
import fr.cascade.outil_cascade.repositories.UserRepository;


@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;
    // private final BCryptPasswordEncoder bCryptPasswordEncoder;
    
    
    // @Autowired
    // public UserService(UserRepository userRepository, BCryptPasswordEncoder bCryptPasswordEncoder) {
    //     this.userRepository = userRepository;
    //     this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    // }

    // public void saveUser(User user) {
    //     user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
    //     userRepository.save(user);
    // }


    public Iterable<User> findAllByRoleNom(String roleNom) {
        return userRepository.findAllByRoleNom(roleNom);
    }


    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public Iterable<User> getAllProfessionnelsSante() {
        return userRepository.findAllByRoleNom("Professionnel de Santé");
    }

    public Iterable<User> getAllEnfantsAutistes() {
        return userRepository.findAllByRoleNom("Enfant Autiste");
    }

    public User getUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    public User addUser(User user) {
        return userRepository.save(user);
    }
    
    public void deleteUserById(Long id) {
        userRepository.deleteById(id);
    }

    public void deleteUserByName(User user) {
        userRepository.delete(user);
    }

    public User updateUser(Long id, User updatedUser) {
        Optional<User> existingUser = userRepository.findById(id);
        if (existingUser.isPresent()) {
            User user = existingUser.get();
            user.setEmail(updatedUser.getEmail());
            user.setPassword(updatedUser.getPassword());
            return userRepository.save(user);
        }
        return null; // Gérer le cas où le user n'est pas trouvé
    }

    // Ajouter d'autres méthodes pour mettre à jour, supprimer,

}
