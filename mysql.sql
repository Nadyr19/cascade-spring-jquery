create database if not exists app;
create user IF NOT EXISTS 'nadyr'@'%' identified by '123456';
grant all privileges on app.* to 'nadyr'@'%';
flush privileges;
use app;
CREATE TABLE `roles` (
 `role_id` bigint NOT NULL AUTO_INCREMENT,
 `nom_role` varchar(128) NOT NULL,
 PRIMARY KEY (`role_id`)
);

CREATE TABLE `users` (
 `user_id` bigint NOT NULL AUTO_INCREMENT,
 `email` varchar(128) NOT NULL,
 `password` varchar(128) NOT NULL,
 `nom` varchar(64) NOT NULL,
 `prenom` varchar(128) NOT NULL,
 `date_naissance` date NOT NULL,
 `role_id` varchar(24) NOT NULL,
 PRIMARY KEY (`user_id`),
 FOREIGN KEY (`role_id`) REFERENCES `roles`(`role_id`)
);

CREATE TABLE `connexions` (
 `connexion_id` bigint NOT NULL AUTO_INCREMENT,
 `date_heure_debut_connexion` datetime NOT NULL,
 `date_heure_fin_connexion` datetime NOT NULL,
 `user_id` bigint NOT NULL,
 PRIMARY KEY (`connexion_id`),
 FOREIGN KEY (`user_id`) REFERENCES `users`(`user_id`)
);

CREATE TABLE `enfants_autistes` (
 `enfant_autiste_id` bigint NOT NULL AUTO_INCREMENT,
 `user_id` bigint NOT NULL,
 `etablissement_scolaire` varchar(128) NOT NULL,
PRIMARY KEY (`enfant_autiste_id`),
FOREIGN KEY (`user_id`) REFERENCES `users`(`user_id`)
);

CREATE TABLE `exercices` (
 `exercice_id` bigint NOT NULL AUTO_INCREMENT,
 `intitule` varchar(128) NOT NULL,
 `niveau` varchar(128) NOT NULL,
 PRIMARY KEY (`exercice_id`)
);

CREATE TABLE `resultats` (
 `enfant_autiste_id` bigint NOT NULL,
 `exercice_id` bigint NOT NULL,
 `score` int(5) NOT NULL,
 `nombre_essais` int(5) NOT NULL,
 `date_realisation` datetime NOT NULL,
 `duree` datetime NOT NULL,
 CONSTRAINT `fk_resultat_enfants_autistes_exercices_id`
  FOREIGN KEY (`enfant_autiste_id`,`exercice_id`) REFERENCES enfants_autistes_exercices(`enfant_autiste_id`,`exercice_id`)
);

INSERT INTO roles (nom)
VALUES ('Enfant Autiste');
INSERT INTO roles (nom)
VALUES ('Professionnel de Santé');
INSERT INTO roles (nom)
VALUES ('Administrateur');

INSERT INTO users (role_id, email, password, nom, prenom, date_naissance)
VALUES ((SELECT role_id FROM roles WHERE nom = 'Enfant Autiste'), 'julien@gmail.com', 'Julien5588', 'Julien', 'Meunier', '2010-12-01');
INSERT INTO users (role_id, email, password, nom, prenom, date_naissance)
VALUES ((SELECT role_id FROM roles WHERE nom = 'Enfant Autiste'), 'lucy@gmail.com', 'Lucy19', 'Lucy', 'Manon', '2015-02-10');
INSERT INTO users (role_id, email, password, nom, prenom, date_naissance)
VALUES ((SELECT role_id FROM roles WHERE nom = 'Enfant Autiste'), 'toto@gmail.com', 'Toto123', 'Toto', 'Fifi', '2012-07-12');
INSERT INTO users (role_id, email, password, nom, prenom, date_naissance)
VALUES ((SELECT role_id FROM roles WHERE nom = 'Professionnel de santé'), 'docteur-queenQ@gmail.com', 'Docqueen19', 'Docteur Queen', 'Femme Médecin', '1853-08-01');
INSERT INTO users (role_id, email, password, nom, prenom, date_naissance)
VALUES ((SELECT role_id FROM roles WHERE nom = 'Professionnel de santé'), 'docteur-folamourQ@gmail.com', 'Folamour123', 'Docteur', 'Folamour', '1910-10-07');
INSERT INTO users (role_id, email, password, nom, prenom, date_naissance)
VALUES ((SELECT role_id FROM roles WHERE nom = 'Professionnel de santé'), 'doc-gyneco@gmail.com', 'Gyneco18', 'Doc', 'Gyneco', '1975-11-18');



-- INSERT INTO roles (nom)
-- VALUES ('Enfant Autiste');
-- INSERT INTO roles (nom)
-- VALUES ('Professionnel de Santé');
-- INSERT INTO roles (nom)
-- VALUES ('Administrateur');

-- INSERT INTO users (role_role_id, email, password, nom, prenom, date_naissance)
-- VALUES ((SELECT role_id FROM roles WHERE nom = 'Enfant Autiste'), 'julien@gmail.com', 'Julien5588', 'Julien', 'Meunier', '2010-12-01');
-- INSERT INTO users (role_role_id, email, password, nom, prenom, date_naissance)
-- VALUES ((SELECT role_id FROM roles WHERE nom = 'Enfant Autiste'), 'lucy@gmail.com', 'Lucy19', 'Lucy', 'Manon', '2015-02-10');
-- INSERT INTO users (role_role_id, email, password, nom, prenom, date_naissance)
-- VALUES ((SELECT role_id FROM roles WHERE nom = 'Enfant Autiste'), 'toto@gmail.com', 'Toto123', 'Toto', 'Fifi', '2012-07-12');
-- INSERT INTO users (role_role_id, email, password, nom, prenom, date_naissance)
-- VALUES ((SELECT role_id FROM roles WHERE nom = 'Professionnel de santé'), 'docteur-queenQ@gmail.com', 'Docqueen19', 'Docteur Queen', 'Femme Médecin', '1853-08-01');
-- INSERT INTO users (role_role_id, email, password, nom, prenom, date_naissance)
-- VALUES ((SELECT role_id FROM roles WHERE nom = 'Professionnel de santé'), 'docteur-folamourQ@gmail.com', 'Folamour123', 'Docteur', 'Folamour', '1910-10-07');
-- INSERT INTO users (role_role_id, email, password, nom, prenom, date_naissance)
-- VALUES ((SELECT role_id FROM roles WHERE nom = 'Professionnel de santé'), 'doc-gyneco@gmail.com', 'Gyneco18', 'Doc', 'Gyneco', '1975-11-18');