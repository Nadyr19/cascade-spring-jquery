create database if not exists cascade_app;
create user IF NOT EXISTS 'nadyr'@'%' identified by '123456';
grant all privileges on cascade_app.* to 'nadyr'@'%';
flush privileges;
use cascade_app;
CREATE TABLE IF NOT EXISTS users(
user_id  bigint auto_increment primary key,
email        varchar(128) not null,
password     varchar(128) not null,
nom          varchar(64)  not null,
prenom       varchar(128) not null,
date_naissance  date not null,
role_id      varchar(24)  not null,
foreign key (role_id) references roles (role_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4

CREATE TABLE IF NOT EXISTS roles(
role_id    bigint auto_increment primary key,
nom_role  varchar(128) not null
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4

CREATE TABLE IF NOT EXISTS connexions(
connexion_id    bigint auto_increment primary key,
date_heure_debut_connexion  datetime not null,
date_heure_fin_connexion  datetime not null,
user_id bigint not null,
foreign key (user_id) references users (user_id) 
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4

CREATE TABLE IF NOT EXISTS enfants_autistes(
enfant_autiste_id  bigint auto_increment primary key,
user_id bigint not null,
foreign key (user_id) references users (user_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4

CREATE TABLE IF NOT EXISTS exercices(
exercice_id  bigint auto_increment primary key,
intitule    varchar(128) not null,
niveau      varchar(128) not null,
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4

CREATE TABLE IF NOT EXISTS resultats(
enfant_autiste_id   bigint not null,
exercice_id     bigint not null,
score    int(5) not null,
nombre_essais   int(5) not null,
date_realisation datetime not null,
duree datetime not null,
CONSTRAINT
fk_resultat_enfants_autistes_exercices_id
FOREIGN KEY (enfant_autiste_id, exercice_id)
REFERENCES enfants_autistes_exercices(enfant_autiste_id, exercice_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4


CREATE TABLE `administrateur` (
 `id` bigint NOT NULL AUTO_INCREMENT,
 `user_id` bigint DEFAULT NULL,
 `fonction` varchar(255) DEFAULT NULL,
 PRIMARY KEY (`id`),
 UNIQUE KEY `UK_6tc9cgnl28k8huoq0sver9vwu` (`user_id`),
 CONSTRAINT `FKcjif5aceuuj4mc247mg4ppnaf` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

CREATE TABLE `connexion` (
 `date_heure_debut_connexion` datetime(6) DEFAULT NULL,
 `date_heure_fin_connexion` datetime(6) DEFAULT NULL,
 `id` bigint NOT NULL AUTO_INCREMENT,
 `user_id` bigint DEFAULT NULL,
 PRIMARY KEY (`id`),
 KEY `FKatct9dafq267q1gphforv4plj` (`user_id`),
 CONSTRAINT `FKatct9dafq267q1gphforv4plj` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

CREATE TABLE `enfant_autiste` (
 `date_naissance` datetime(6) DEFAULT NULL,
 `id` bigint NOT NULL AUTO_INCREMENT,
 `user_id` bigint DEFAULT NULL,
 PRIMARY KEY (`id`),
 UNIQUE KEY `UK_gdekjhn1ri1gwlyh3qfaoi7lp` (`user_id`),
 CONSTRAINT `FKjmifoigaqa3ts2wmr8583r080` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

CREATE TABLE `exercice` (
 `id` bigint NOT NULL AUTO_INCREMENT,
 `intitule` varchar(255) DEFAULT NULL,
 `niveau` varchar(255) DEFAULT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

CREATE TABLE `hibernate_sequences` (
 `next_val` bigint DEFAULT NULL,
 `sequence_name` varchar(255) NOT NULL,
 PRIMARY KEY (`sequence_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

CREATE TABLE `professionnel_sante` (
 `id` bigint NOT NULL AUTO_INCREMENT,
 `user_id` bigint DEFAULT NULL,
 `specialite` varchar(255) DEFAULT NULL,
 PRIMARY KEY (`id`),
 UNIQUE KEY `UK_mm5o3p2qv0bxee1yv7l8pdq6k` (`user_id`),
 CONSTRAINT `FKaj74ju8eoeavo9ydgwr6kbbk` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

CREATE TABLE `resultat` (
 `nombre_essais` int DEFAULT NULL,
 `score` int DEFAULT NULL,
 `date` datetime(6) DEFAULT NULL,
 `duree` datetime(6) DEFAULT NULL,
 `enfant_autiste_id` bigint NOT NULL,
 `exercice_id` bigint NOT NULL,
 PRIMARY KEY (`enfant_autiste_id`,`exercice_id`),
 KEY `FK9v5gb0sndxl5k9i0ng5wl9w7g` (`exercice_id`),
 CONSTRAINT `FK9v5gb0sndxl5k9i0ng5wl9w7g` FOREIGN KEY (`exercice_id`) REFERENCES `exercice` (`id`),
 CONSTRAINT `FKh9h5f60c31ymsndix5thouser` FOREIGN KEY (`enfant_autiste_id`) REFERENCES `enfant_autiste` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

CREATE TABLE `roles` (
 `role_id` bigint NOT NULL AUTO_INCREMENT,
 `name` varchar(255) NOT NULL,
 PRIMARY KEY (`role_id`),
 UNIQUE KEY `UK_ofx66keruapi6vyqpv6f2or37` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

CREATE TABLE `users` (
 `id` bigint NOT NULL,
 `role_role_id` bigint DEFAULT NULL,
 `email` varchar(255) NOT NULL,
 `first_name` varchar(255) NOT NULL,
 `last_name` varchar(255) NOT NULL,
 `password` varchar(255) NOT NULL,
 PRIMARY KEY (`id`),
 UNIQUE KEY `UK_6dotkott2kjsp8vw4d0m25fb7` (`email`),
 KEY `FKruo12mi6hchjfi06jhln9tdkt` (`role_role_id`),
 CONSTRAINT `FKruo12mi6hchjfi06jhln9tdkt` FOREIGN KEY (`role_role_id`) REFERENCES `roles` (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci


create database if not exists app;
create user IF NOT EXISTS 'mousse'@'%' identified by '123456';
grant all privileges on app.* to 'mousse'@'%';
flush privileges;
use app;
CREATE TABLE IF NOT EXISTS customers(
                          customer_id  bigint auto_increment primary key,
                          name         varchar(64)  not null,
                          contact_name varchar(128) not null,
                          email        varchar(128) not null,
                          phone        varchar(24)  not null
);

CREATE TABLE IF NOT EXISTS orders
(
    order_id    bigint auto_increment primary key,
    customer_id bigint        not null,
    order_info  varchar(2048) not null,
    foreign key (customer_id) references customers (customer_id)
);
INSERT INTO customers (name, contact_name, email, phone)
VALUES ('Compagnie Acme', 'Wylie Coyote', 'wcoyote@acme.fr', '01-23-45-67-89');
INSERT INTO customers (name, contact_name, email, phone)
VALUES ('Espace Spacely', 'Georges Jettson', 'gjettson@spacely.fr', '01-98-76-54-32');
INSERT INTO customers (name, contact_name, email, phone)
VALUES ('Auto Callahan', 'Thomas Callahan', 'tcallahan@callahanauto.fr', '01-87-65-43-21');
INSERT INTO customers (name, contact_name, email, phone)
VALUES ('Dunder Mifflin Inc', 'Michel Scott', 'mscott@dundermifflin.fr', '01-76-54-32-10');
INSERT INTO customers (name, contact_name, email, phone)
VALUES ('Industries Stark', 'Tony Stark', 'tstark@stark.fr', '01-55-77-77-77');
INSERT INTO customers (name, contact_name, email, phone)
VALUES ('Initech', 'Pierre Gibbons', 'pgibbons@initech.fr', '01-66-66-66-66');
INSERT INTO customers (name, contact_name, email, phone)
VALUES ('Entreprises Wayne', 'Bruce Wayne', 'bwayne@wayne.fr', '01-11-11-11-11');

INSERT INTO orders (customer_id, order_info)
VALUES ((SELECT customer_id FROM customers WHERE name = 'Compagnie Acme'), '1500 Widgets');
INSERT INTO orders (customer_id, order_info)
VALUES ((SELECT customer_id FROM customers WHERE name = 'Compagnie Acme'), '3000 Widgets');
INSERT INTO orders (customer_id, order_info)
VALUES ((SELECT customer_id FROM customers WHERE name = 'Auto Callahan'), '200 Widgets');


create database if not exists cascadeapp;
create user IF NOT EXISTS 'nadyr'@'%' identified by '123456';
grant all privileges on cascadeapp.* to 'nadyr'@'%';
flush privileges;
use cascadeapp;
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

INSERT INTO roles (nom_role)
VALUES ('Enfant Autiste');
INSERT INTO roles (nom_role)
VALUES ('Professionnel de Santé');
INSERT INTO roles (nom_role)
VALUES ('Administrateur');

INSERT INTO users (role_id, email, password, nom, prenom, date_naissance)
VALUES ((SELECT role_id FROM roles WHERE nom_role = 'Enfant Autiste'), 'julien@gmail.com', 'Julien5588', 'Julien', 'Meunier', '2010-12-01');
INSERT INTO users (role_id, email, password, nom, prenom, date_naissance)
VALUES ((SELECT role_id FROM roles WHERE nom_role = 'Enfant Autiste'), 'lucy@gmail.com', 'Lucy19', 'Lucy', 'Manon', '2015-02-10');
INSERT INTO users (role_id, email, password, nom, prenom, date_naissance)
VALUES ((SELECT role_id FROM roles WHERE nom_role = 'Enfant Autiste'), 'toto@gmail.com', 'Toto123', 'Toto', 'Fifi', '2012-07-12');
INSERT INTO users (role_id, email, password, nom, prenom, date_naissance)
VALUES ((SELECT role_id FROM roles WHERE nom_role = 'Professionnel de santé'), 'docteur-queenQ@gmail.com', 'Docqueen19', 'Docteur Queen', 'Femme Médecin', '1853-08-01');
INSERT INTO users (role_id, email, password, nom, prenom, date_naissance)
VALUES ((SELECT role_id FROM roles WHERE nom_role = 'Professionnel de santé'), 'docteur-folamourQ@gmail.com', 'Folamour123', 'Docteur', 'Folamour', '1910-10-07');
INSERT INTO users (role_id, email, password, nom, prenom, date_naissance)
VALUES ((SELECT role_id FROM roles WHERE nom_role = 'Professionnel de santé'), 'doc-gyneco@gmail.com', 'Gyneco18', 'Doc', 'Gyneco', '1975-11-18');