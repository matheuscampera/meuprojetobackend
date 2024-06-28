-- Cria a tabela 'usuarios' se ela ainda não existir
CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario VARCHAR(255) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    token VARCHAR(255),
    INDEX (usuario)
);
