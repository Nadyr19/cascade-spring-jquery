package fr.cascade.outil_cascade.entities;

import java.util.ArrayList;
import java.util.Collection;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="roles")
public class Role
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "role_id")
    private Long id;

    @Column(nullable=false, unique=true)
    private String nom;

    @OneToMany(mappedBy = "role")
    private Collection<User> users = new ArrayList<>();
}