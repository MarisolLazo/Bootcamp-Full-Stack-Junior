-- SQL sample data for usuarios and pedidos
CREATE TABLE IF NOT EXISTS usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(255),
  correo VARCHAR(255) UNIQUE,
  telefono VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS pedidos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  producto VARCHAR(255),
  cantidad INT,
  total DECIMAL(10,2),
  id_usuario INT,
  FOREIGN KEY (id_usuario) REFERENCES usuarios(id) ON DELETE CASCADE
);

INSERT INTO usuarios (nombre, correo, telefono) VALUES
('Ricardo Ramos','ricardo.ramos@example.com','71234567'),
('María López','maria.lopez@example.com','78901234'),
('Roberto Sánchez','roberto.sanchez@example.com','70123456'),
('Ana Martínez','ana.martinez@example.com','72233445'),
('Luis Romero','luis.romero@example.com','73344556');

INSERT INTO pedidos (producto, cantidad, total, id_usuario) VALUES
('Camiseta',2,120.00,1),
('Pantalón',1,80.00,2),
('Zapatos',1,150.00,1),
('Gorra',3,45.00,3),
('Chaqueta',1,220.00,5),
('Calcetines',5,30.00,4),
('Bufanda',1,110.00,2);
