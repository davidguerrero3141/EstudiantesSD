CREATE DATABASE ESTUDIANTES;
USE ESTUDIANTES;

CREATE TABLE ESTUDIANTES(
     id_estudiante INT NOT NULL AUTO_INCREMENT,
     numero_documento VARCHAR(50) NOT NULL,
     tipo_documento VARCHAR(2) NOT NULL,
     nombre VARCHAR(30) NOT NULL,
     apellido VARCHAR(30) NOT NULL,
     codigo VARCHAR(20) NOT NULL,
     estado BOOLEAN NOT NULL DEFAULT 0,
     PRIMARY KEY(id_estudiante)
);

CREATE TABLE MATERIAS(
    id_materia INT NOT NULL AUTO_INCREMENT,
    nombre_materia VARCHAR(30) NOT NULL,
    creditos INT(2) NOT NULL,
    codigo VARCHAR(10) NOT NULL,
    cupos INT(3) NOT NULL,
    estado BOOLEAN NOT NULL DEFAULT 0,
    PRIMARY KEY(id_materia)
);