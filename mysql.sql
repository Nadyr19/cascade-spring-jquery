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


