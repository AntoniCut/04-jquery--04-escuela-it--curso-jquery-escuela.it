/*
    *  --------------------------------------------------------------------------  *
    *  -----  /login-users.sql  --  /src/services/clase-21/login-users.sql  -----  *
    *  --------------------------------------------------------------------------  *
    *
    *  Tabla de usuarios para el login con autenticacion (clase 21 - ejercicio 02).
    *  Base de datos: jquery_escuelait_classicmodels
    *
    *  Ejemplo de importacion:
    *  mysql -u root jquery_escuelait_classicmodels < src/services/clase-21/login-users.sql
    *
    *  Nota produccion: el usuario MySQL necesita SELECT + INSERT sobre login_users.
*/

USE jquery_escuelait_classicmodels;

CREATE TABLE IF NOT EXISTS login_users (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    username VARCHAR(100) NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    UNIQUE KEY uq_login_users_username (username)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
