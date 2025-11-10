Proyecto: Consultas SQL en Laravel (Query Builder & Eloquent)
 Descripción General

Este proyecto fue desarrollado como parte de la práctica de Consultas SQL en Laravel, utilizando Query Builder y Eloquent ORM.
El propósito es demostrar el dominio de consultas, relaciones y manipulación de datos dentro del framework Laravel, aplicando principios del patrón MVC y las mejores prácticas en el manejo de bases de datos.

El proyecto incluye migraciones, modelos, controladores, rutas, seeders y un archivo SQL con datos de ejemplo, permitiendo ejecutar las consultas tanto en modo programático (Query Builder) como en modo orientado a objetos (Eloquent ORM).

 Versión y Compatibilidad

Laravel: 5.23.0

PHP: ≥ 7.2

Base de Datos: MySQL

Servidor local: XAMPP / Laragon / Valet


---

## ⚙️ Instrucciones de Instalación
1. **Clonar o copiar el proyecto**
   ```bash
   git clone https://github.com/usuario/ConsultasSQL-Laravel.git

   Rutas Disponibles (GET)
| Tipo              | Ruta                                   | Descripción                                 |
| ----------------- | -------------------------------------- | ------------------------------------------- |
| **Query Builder** | `/api/query/users`                     | Lista todos los usuarios                    |
|                   | `/api/query/orders/user/{id}`          | Pedidos del usuario con ID específico       |
|                   | `/api/query/orders/details`            | Pedidos con información del usuario         |
|                   | `/api/query/orders/price-range`        | Pedidos en rango $100 - $250                |
|                   | `/api/query/users/starts-with/{letra}` | Usuarios cuyo nombre inicia con una letra   |
|                   | `/api/query/orders/count/user/{id}`    | Cantidad de pedidos por usuario             |
|                   | `/api/query/orders/with-users/desc`    | Pedidos ordenados por total descendente     |
|                   | `/api/query/orders/total-sum`          | Suma total del campo "total"                |
|                   | `/api/query/orders/cheapest`           | Pedido más económico con nombre del usuario |
|                   | `/api/query/orders/group-by-user`      | Agrupamiento de productos por usuario       |
| **Eloquent ORM**  | `/api/eloquent/users`                  | Listado de usuarios                         |
|                   | `/api/eloquent/orders/user/{id}`       | Pedidos del usuario usando Eloquent         |
|                   | `/api/eloquent/orders/details`         | Pedidos con usuario relacionado             |
|                   | `/api/eloquent/orders/price-range`     | Pedidos en rango con Eloquent               |
|                   | `/api/eloquent/orders/count/user/{id}` | Total de pedidos (Eloquent)                 |
|                   | `/api/eloquent/orders/with-users/desc` | Pedidos ordenados descendente (Eloquent)    |
|                   | `/api/eloquent/orders/total-sum`       | Suma total (Eloquent)                       |
|                   | `/api/eloquent/orders/cheapest`        | Pedido más económico (Eloquent)             |
|                   | `/api/eloquent/orders/group-by-user`   | Agrupamiento por usuario (Eloquent)         |

Ejemplo de Consultas Implementadas
🔹 Query Builder
// Pedidos entre $100 y $250
DB::table('pedidos')
  ->whereBetween('total', [100, 250])
  ->get();

Eloquent ORM
// Pedidos del usuario con id = 2
$usuario = Usuario::find(2);
$pedidos = $usuario->pedidos;