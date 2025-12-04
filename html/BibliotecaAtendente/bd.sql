DROP DATABASE IF EXISTS BibliotecaDigital;

-- Criação do BD
CREATE DATABASE BibliotecaDigital;

USE BibliotecaDigital;


-- Criação da tabela Usuarios
CREATE TABLE Usuarios (
    id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    usuario VARCHAR(50),
    senha VARCHAR(255)
);

-- Criação da tabela Reserva
CREATE TABLE Reserva(
    id_reserva INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome_cliente VARCHAR(100),
    livro VARCHAR(100),
    data_reserva DATE,
    data_entrega DATE
);
    
    CREATE TABLE Livro(
	id_livro INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    id_usuario INT,
    Livro VARCHAR(100),
    Autor VARCHAR(100),
    data_reserva ENUM('SIM', 'NAO')DEFAULT 'NAO'
    );
    
INSERT INTO Reserva (nome_cliente, livro, data_reserva, data_entrega)
VALUES ('Fernando Pessoa', 'Coraline', '2024-11-28', DATE_ADD('2024-11-28', INTERVAL 30 DAY)
);

INSERT INTO Livro (id_usuario, Livro, Autor, data_reserva)
VALUES (1, 'Coraline', 'Neil Gaiman', 'SIM'
);
-- Expressão SQL para cadastrar um usuário
INSERT INTO usuarios (usuario, senha) VALUES ('cliente', MD5('1234'));