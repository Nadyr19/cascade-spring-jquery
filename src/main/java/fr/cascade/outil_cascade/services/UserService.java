package fr.cascade.outil_cascade.services;

import java.util.List;

import org.springframework.stereotype.Service;

import fr.cascade.outil_cascade.dto.UserDto;
import fr.cascade.outil_cascade.entities.User;

@Service
public interface UserService {

    void saveUser(UserDto userDto);

    User findUserByEmail(String email);

    List<UserDto> findAllUsers();
}


