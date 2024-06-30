create database if not exists cascade;
create user IF NOT EXISTS 'nadyr'@'%' identified by '123456';
grant all privileges on app.* to 'nadyr'@'%';
flush privileges;
use app;
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


-- INSERT INTO customers (name, contact_name, email, phone)
-- VALUES ('Compagnie Acme', 'Wylie Coyote', 'wcoyote@acme.fr', '01-23-45-67-89');
-- INSERT INTO customers (name, contact_name, email, phone)
-- VALUES ('Espace Spacely', 'Georges Jettson', 'gjettson@spacely.fr', '01-98-76-54-32');
-- INSERT INTO customers (name, contact_name, email, phone)
-- VALUES ('Auto Callahan', 'Thomas Callahan', 'tcallahan@callahanauto.fr', '01-87-65-43-21');
-- INSERT INTO customers (name, contact_name, email, phone)
-- VALUES ('Dunder Mifflin Inc', 'Michel Scott', 'mscott@dundermifflin.fr', '01-76-54-32-10');
-- INSERT INTO customers (name, contact_name, email, phone)
-- VALUES ('Industries Stark', 'Tony Stark', 'tstark@stark.fr', '01-55-77-77-77');
-- INSERT INTO customers (name, contact_name, email, phone)
-- VALUES ('Initech', 'Pierre Gibbons', 'pgibbons@initech.fr', '01-66-66-66-66');
-- INSERT INTO customers (name, contact_name, email, phone)
-- VALUES ('Entreprises Wayne', 'Bruce Wayne', 'bwayne@wayne.fr', '01-11-11-11-11');

-- INSERT INTO orders (customer_id, order_info)
-- VALUES ((SELECT customer_id FROM customers WHERE name = 'Compagnie Acme'), '1500 Widgets');
-- INSERT INTO orders (customer_id, order_info)
-- VALUES ((SELECT customer_id FROM customers WHERE name = 'Compagnie Acme'), '3000 Widgets');
-- INSERT INTO orders (customer_id, order_info)
-- VALUES ((SELECT customer_id FROM customers WHERE name = 'Auto Callahan'), '200 Widgets');


