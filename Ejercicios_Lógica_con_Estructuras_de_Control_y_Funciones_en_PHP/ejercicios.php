<?php
/*
 * Modulo 4 - Actividad 2 – Ejercicios de Lógica con Estructuras de Control y Funciones en PHP
 * Autor: [Patricia Marisol Lazo Campos ]
 * Descripcion: Este archivo contiene tres ejercicios basicos de logica 
 * utilizando funciones, estructuras de control y comentarios.
 */

/* ============================================================
   1. Problema de la Serie Fibonacci
   ------------------------------------------------------------
   Funcion: generarFibonacci($n)
   Parametro: $n -> cantidad de terminos a generar
   Retorna: un arreglo con los primeros n terminos de Fibonacci
   Logica: cada termino es la suma de los dos anteriores
   ============================================================ */
function generarFibonacci($n) {
    $fibonacci = [];

    // Condicion: al menos un numero
    if ($n >= 1) {
        $fibonacci[] = 0; // primer numero
    }
    // Condicion: si pide más de un numero
    if ($n >= 2) {
        $fibonacci[] = 1; // segundo numero
    }

    // Ciclo for para generar los siguientes terminos
    for ($i = 2; $i < $n; $i++) {
        $fibonacci[] = $fibonacci[$i - 1] + $fibonacci[$i - 2];
    }

    return $fibonacci;
}

// Ejemplo de uso
echo "=== Serie Fibonacci (10 términos) ===\n";
print_r(generarFibonacci(10));



/* ============================================================
   2. Problema de Numeros Primos
   ------------------------------------------------------------
   Funcion: esPrimo($num)
   Parametro: $num -> numero entero a evaluar
   Retorna: true si el numero es primo, false en caso contrario
   Logica: verificar divisibilidad desde 2 hasta raiz cuadrada de $num
   ============================================================ */
function esPrimo($num) {
    // Los numeros menores o iguales a 1 no son primos
    if ($num <= 1) {
        return false;
    }

    // Recorremos desde 2 hasta la raiz cuadrada del numero
    for ($i = 2; $i <= sqrt($num); $i++) {
        if ($num % $i == 0) {
            return false; // si tiene divisor, no es primo
        }
    }

    return true; // si no tiene divisores, es primo
}

// Ejemplo de uso
echo "\n=== Verificación de números primos ===\n";
echo "¿El número 7 es primo?: " . (esPrimo(7) ? "Sí" : "No") . "\n";
echo "¿El número 10 es primo?: " . (esPrimo(10) ? "Sí" : "No") . "\n";



/* ============================================================
   3. Problema de Palindromos
   ------------------------------------------------------------
   Funcion: esPalindromo($texto)
   Parametro: $texto -> cadena de texto
   Retorna: true si es palíndromo, false en caso contrario
   Logica: convertir a minusculas, quitar espacios, invertir la cadena y comparar
   ============================================================ */
function esPalindromo($texto) {
    // Convertir a minúsculas y eliminar espacios
    $texto = strtolower(str_replace(' ', '', $texto));

    // Invertir el texto
    $invertido = strrev($texto);

    // Comparar original con invertido
    return $texto === $invertido;
}

// Ejemplo de uso
echo "\n=== Verificación de palindromos ===\n";
echo "¿'ana' es palindromo?: " . (esPalindromo("ana") ? "Sí" : "No") . "\n";
echo "¿'hola' es palindromo?: " . (esPalindromo("hola") ? "Sí" : "No") . "\n";
echo "¿'anita lava la tina' es palíndromo?: " . (esPalindromo("anita lava la tina") ? "Sí" : "No") . "\n";

?>
