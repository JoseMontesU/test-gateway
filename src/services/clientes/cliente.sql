CREATE TABLE cliente(
    id INT AUTO_INCREMENT PRIMARY KEY,
    documento ENUM('DNI', 'CARNET DE EXTRANJERIA') NOT NULL,
    numero_documento VARCHAR(20) NOT NULL UNIQUE,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    lugar_residencia VARCHAR(100) NOT NULL,
    telefono VARCHAR(15) NOT NULL,
    genero ENUM('M', 'F', 'KBRO') NOT NULL,
    bono_bienvenida BOOLEAN ,
    fecha_registro DATETIME DEFAULT CURRENT_TIMESTAMP,
);

CREATE TABLE parametros_globales (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL UNIQUE,
    valor VARCHAR(255) NOT NULL,
    descripcion TEXT,
    fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP
);
