-- Base de datos: blog
CREATE DATABASE IF NOT EXISTS blog;
USE blog;

-- Crear usuario administrador
CREATE USER 'CarlosGPC'@'localhost' IDENTIFIED BY '12345';

-- Otorgar privilegios de administrador
GRANT ALL PRIVILEGES ON *.* TO 'CarlosGPC'@'localhost' WITH GRANT OPTION;

-- Actualizar privilegios
FLUSH PRIVILEGES;

-- Tabla usuarios
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    correo VARCHAR(255) UNIQUE NOT NULL,
    contraseña VARCHAR(255) NOT NULL,
    puede_crear_blog BOOLEAN DEFAULT TRUE,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla blogs
CREATE TABLE blogs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    resumen TEXT,
    contenido TEXT NOT NULL,
    etiquetas VARCHAR(255),
    categoria VARCHAR(100),
    fecha_publicacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_ultima_edicion TIMESTAMP,
    autor_id INT,
    activo BOOLEAN DEFAULT TRUE,
    eliminado BOOLEAN DEFAULT FALSE, -- Soft delete
    FOREIGN KEY (autor_id) REFERENCES usuarios(id)
);

-- Tabla comentarios
CREATE TABLE comentarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    contenido TEXT NOT NULL,
    fecha_publicacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_ultima_edicion TIMESTAMP,
    autor_id INT,
    blog_id INT,
    comentario_padre_id INT, -- Para respuestas a comentarios
    eliminado BOOLEAN DEFAULT FALSE, -- Soft delete
    FOREIGN KEY (autor_id) REFERENCES usuarios(id),
    FOREIGN KEY (blog_id) REFERENCES blogs(id),
    FOREIGN KEY (comentario_padre_id) REFERENCES comentarios(id)
);

-- Tabla likes_blogs
CREATE TABLE likes_blogs (
    usuario_id INT,
    blog_id INT,
    PRIMARY KEY (usuario_id, blog_id),
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
    FOREIGN KEY (blog_id) REFERENCES blogs(id)
);

-- Tabla likes_comentarios
CREATE TABLE likes_comentarios (
    usuario_id INT,
    comentario_id INT,
    PRIMARY KEY (usuario_id, comentario_id),
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
    FOREIGN KEY (comentario_id) REFERENCES comentarios(id)
);

-- Tabla imagenes
CREATE TABLE imagenes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ruta VARCHAR(255) NOT NULL,
    descripcion VARCHAR(255),
    blog_id INT,
    comentario_id INT,
    FOREIGN KEY (blog_id) REFERENCES blogs(id),
    FOREIGN KEY (comentario_id) REFERENCES comentarios(id)
);

USE BLOG;
-- Insertar usuarios de prueba
INSERT INTO usuarios (nombre, correo, contraseña) VALUES
  ('Usuario1', 'usuario1@example.com', 'contraseña1'),
  ('Usuario2', 'usuario2@example.com', 'contraseña2');

-- Insertar blogs de prueba
INSERT INTO blogs (titulo, resumen, contenido, etiquetas, categoria, autor_id) VALUES
  ('Título del Blog 1', 'Resumen del Blog 1', 'Contenido del Blog 1', 'etiqueta1, etiqueta2', 'Categoria1', 1),
  ('Título del Blog 2', 'Resumen del Blog 2', 'Contenido del Blog 2', 'etiqueta3, etiqueta4', 'Categoria2', 2);

-- Insertar comentarios de prueba
INSERT INTO comentarios (contenido, autor_id, blog_id) VALUES
  ('Comentario en Blog 1', 1, 1),
  ('Comentario en Blog 1 - Respuesta', 2, 1),
  ('Comentario en Blog 2', 2, 2);

-- Insertar likes de prueba
INSERT INTO likes_blogs (usuario_id, blog_id) VALUES
  (1, 1),
  (2, 1),
  (1, 2);

INSERT INTO likes_comentarios (usuario_id, comentario_id) VALUES
  (1, 1),
  (2, 2);

-- Insertar imágenes de prueba
INSERT INTO imagenes (ruta, descripcion, blog_id, comentario_id) VALUES
  ('/images/image1.jpg', 'Descripción de la imagen 1', 1, NULL),
  ('/images/image2.jpg', 'Descripción de la imagen 2', NULL, 2);
