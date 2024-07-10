/* 
package fr.cascade.outil_cascade.security;

import org.springframework.context.annotation.Bean; // Import de l'annotation Bean
import org.springframework.context.annotation.Configuration; // Import de l'annotation Configuration
import org.springframework.security.authentication.AuthenticationManager; // Import de AuthenticationManager
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder; // Import d'AuthenticationManagerBuilder
import org.springframework.security.config.annotation.web.builders.HttpSecurity; // Import de HttpSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity; // Import de l'annotation EnableWebSecurity
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder; // Import de BCryptPasswordEncoder
import org.springframework.security.web.SecurityFilterChain; // Import de SecurityFilterChain

@Configuration // Indique que cette classe contient des configurations Spring
@EnableWebSecurity // Active la sécurité web Spring
public class WebSecurityConfig {

    private final UserDetailsServiceImpl userDetailsService; // Déclaration du service UserDetailsServiceImpl

    // Constructeur pour injecter UserDetailsServiceImpl
    public WebSecurityConfig(UserDetailsServiceImpl userDetailsService) {
        this.userDetailsService = userDetailsService;
    }

    @Bean // Déclare un bean pour BCryptPasswordEncoder
    public BCryptPasswordEncoder bCryptPasswordEncoder() {
        return new BCryptPasswordEncoder(); // Retourne une instance de BCryptPasswordEncoder
    }

    @Bean // Déclare un bean pour SecurityFilterChain
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        // Configure la sécurité HTTP
        http
            .authorizeHttpRequests(authorize -> authorize
                // Permet l'accès sans authentification aux URL de registre et de login
                .requestMatchers("/user/register", "/user/login").permitAll()
                // Toutes les autres requêtes nécessitent une authentification
                .anyRequest().authenticated()
            )
            .formLogin(formLogin -> formLogin
                .loginPage("/user/login") // Spécifie la page de login
                .loginProcessingUrl("/user/login") // URL pour soumettre les données de login
                .defaultSuccessUrl("/index") // URL de redirection après succès
                .permitAll()
            )
            .logout(logout -> logout.permitAll()); // Permet à tous les utilisateurs de se déconnecter
        return http.build(); // Construit et retourne le SecurityFilterChain
    }

    @Bean // Déclare un bean pour AuthenticationManager
    public AuthenticationManager authenticationManager(HttpSecurity http) throws Exception {
        AuthenticationManagerBuilder authenticationManagerBuilder = 
            http.getSharedObject(AuthenticationManagerBuilder.class); // Obtient un AuthenticationManagerBuilder
        authenticationManagerBuilder
            .userDetailsService(userDetailsService) // Configure le UserDetailsService
            .passwordEncoder(bCryptPasswordEncoder()); // Configure l'encodeur de mot de passe
        return authenticationManagerBuilder.build(); // Construit et retourne l'AuthenticationManager
    }
}
*/