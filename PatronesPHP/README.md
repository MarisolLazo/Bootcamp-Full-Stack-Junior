Ejercicio 1 – Patron Factory

Descripcion:
Se aplica el patrón Factory para crear diferentes personajes segun el nivel del juego.
En el nivel facil se genera un Esqueleto, y en el nivel dificil, un Zombi.

Patron aplicado: Factory Pattern
Proposito: Centralizar la creación de objetos evitando instanciar directamente las clases.

Salida esperdad
El Zombi muerde lentamente, pero con fuerza.
Velocidad: Lenta.

Ejercicio 2 – Patron Adapter

Descripcion:
Se aplica el patron Adapter para permitir que Windows 10 abra archivos antiguos creados en Windows 7, garantizando compatibilidad entre versiones.

Patron aplicado: Adapter Pattern
Proposito: Permitir que clases con interfaces incompatibles trabajen juntas mediante un adaptador.

Salida esperada
Abriendo archivo en formato antiguo (Windows 7).
Abriendo archivo compatible con Windows 10.

Ejercicio 3 – Patron Decorator

Descripcion:
Se implementa el patron Decorator para añadir armas a personajes sin modificar sus clases base.
Por ejemplo, un Guerrero puede equiparse una Espada y un Mago una Varita magica.

Patron aplicado: Decorator Pattern
Proposito: Añadir responsabilidades adicionales a un objeto de manera dinamica.

Salida esperada
Guerrero básico con una Espada legendaria - Poder: 15
Mago aprendiz con una Varita magica - Poder: 12

Ejercicio 4 – Patron Strategy

Descripción:
Se aplica el patron Strategy para mostrar mensajes de salida en distintos formatos: consola, JSON y archivo TXT.
Cada tipo de salida es una estrategia independiente.

Patron aplicado: Strategy Pattern
Proposito: Definir una familia de algoritmos y hacerlos intercambiables en tiempo de ejecucion.

Salida esperada
Consola: Hola desde la consola
{"mensaje":"Hola desde JSON"}
Mensaje guardado en archivo TXT.