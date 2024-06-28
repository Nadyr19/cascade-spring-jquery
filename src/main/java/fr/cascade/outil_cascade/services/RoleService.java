package fr.cascade.outil_cascade.services;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fr.cascade.outil_cascade.entities.Role;
import fr.cascade.outil_cascade.entities.User;
import fr.cascade.outil_cascade.repositories.RoleRepository;
import fr.cascade.outil_cascade.repositories.UserRepository;

@Service
public class RoleService {

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    UserRepository userRepository;

    public List<Role> getAllRoles(){
        Iterable<Role> rolesIterable = roleRepository.findAll();
        List<Role> roles = new ArrayList<>();
        rolesIterable.forEach(roles::add);
        roles.sort(Comparator.comparing(Role::getName));
        return roles;
    }

    public Optional<Role> getRoleById(long roleId){
        return roleRepository.findById(roleId);
    }

    public List<User> getRoleUsers(long userId){
        List<User> users = new ArrayList<>();
        Iterable<User> usersIterable = userRepository.findAllByRoleId(userId);
        usersIterable.forEach(users::add);
        return users;
    }




/* 
    public List<Role> getAllRoles() {
        return roleRepository.findAll();
    }
*/
    public Role getRoleById(Long id) {
        return roleRepository.findById(id).orElse(null);
    }

    public Role addRole(Role Role) {
        return roleRepository.save(Role);
    }
    
    public void deleteRoleById(Long id) {
        roleRepository.deleteById(id);
    }

    public void deleteRoleByName(Role Role) {
        roleRepository.delete(Role);
    }

    public Role updateRole(Long id, Role updatedRole) {
        Optional<Role> existingRole = roleRepository.findById(id);
        if (existingRole.isPresent()) {
            Role Role = existingRole.get();
            Role.setName(updatedRole.getName());
            return roleRepository.save(Role);
        }
        return null; // Gérer le cas où le Role n'est pas trouvé
    }

    // Ajouter d'autres méthodes pour mettre à jour, supprimer,

}
