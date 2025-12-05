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
    id_reserva INT NULL,
    Livro VARCHAR(100),
    Autor VARCHAR(100),
    reserva ENUM('SIM', 'NAO') DEFAULT 'NAO',
    FOREIGN KEY (id_reserva) REFERENCES Reserva(id_reserva)
    ON DELETE SET NULL
    );
    
INSERT INTO Livro (id_reserva, Livro, Autor, reserva)
VALUES 
(NULL, 'Coraline', 'Neil Gaiman', 'NAO'),
(NULL, 'Avesso de Pele', 'Jeferson Tenário', 'NAO'),
(NULL, 'Os Sofrimentos do jovem Wether', 'Goethe', 'NAO'),
(NULL, 'Maldito Coelho', 'Bora Chung', 'NAO'),
(NULL, 'Deuses Americanos', 'Neil Gaiman', 'NAO'),
(NULL, 'Memórias do subsolo', 'Fiodór Dostoiévski', 'NAO'),
(NULL, 'Morra, amor', 'Ariana Harwicz', 'NAO'),
(NULL, '1984', 'George Orwell', 'NAO'),
(NULL, 'O processo', 'Franz Kafka', 'NAO');

UPDATE livro SET reserva = 'NAO' WHERE id_reserva IS NULL;

DELIMITER //
CREATE TRIGGER tg_reserva_apagada
AFTER DELETE ON Reserva
FOR EACH ROW
BEGIN
    UPDATE Livro
    SET reserva = 'NAO'
    WHERE id_reserva IS NULL;
END //


-- Expressão SQL para cadastrar um usuário
INSERT INTO usuarios (usuario, senha) VALUES ('cliente', MD5('1234'));