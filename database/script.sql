CREATE DATABASE IF NOT EXISTS bd_agenda;
USE bd_agenda;
CREATE TABLE tb_agenda(
  codigo INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(50) NOT NULL,
  endereco VARCHAR(50) NOT NULL,
  telefone CHAR(11) NOT NULL,
  email VARCHAR(60),
  data_nasc DATE
);
INSERT INTO tb_agenda
VALUES(
    default,
    "Gabriel Matiolli",
    "Avenida Paulista, 1106",
    "11943843525",
    "gabrielmatiollif@gmail.com",
    2006 -5 -2
  );
SELECT *
FROM tb_agenda;