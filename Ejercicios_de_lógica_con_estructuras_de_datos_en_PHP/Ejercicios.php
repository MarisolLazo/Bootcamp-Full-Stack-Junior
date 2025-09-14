<?php
/*
=====================================================
Modulo 4 - Actividad 3 – Ejercicios de logica con 
estructuras de datos en PHP
=====================================================
*/

// 1. Problema de Lista Invertida
function listaInvertida($array) {
    // Usamos array_reverse para invertir el array
    return array_reverse($array);
}

$numeros = [1, 2, 3, 4, 5];
echo "1. Lista invertida:\n";
print_r(listaInvertida($numeros));
echo "\n\n";


// 2. Problema de Suma de Numeros Pares
function sumaNumerosPares($array) {
    $suma = 0;
    foreach ($array as $num) {
        if ($num % 2 == 0) { // verificamos si es par
            $suma += $num;
        }
    }
    return $suma;
}

$enteros = [1, 2, 3, 4, 5, 6];
echo "2. Suma de numeros pares:\n";
echo "La suma es: " . sumaNumerosPares($enteros);
echo "\n\n";


// 3. Problema de Frecuencia de Caracteres
function frecuenciaCaracteres($cadena) {
    $frecuencia = [];
    $longitud = strlen($cadena);

    for ($i = 0; $i < $longitud; $i++) {
        $caracter = $cadena[$i];
        if (isset($frecuencia[$caracter])) {
            $frecuencia[$caracter]++;
        } else {
            $frecuencia[$caracter] = 1;
        }
    }

    return $frecuencia;
}

$texto = "programacion";
echo "3. Frecuencia de caracteres:\n";
print_r(frecuenciaCaracteres($texto));
echo "\n\n";


// 4. Problema de Bucle Anidado (piramide de asteriscos)
function piramide($filas) {
    for ($i = 1; $i <= $filas; $i++) {
        // Espacios en blanco
        for ($j = $i; $j < $filas; $j++) {
            echo " ";
        }
        // Asteriscos
        for ($k = 1; $k <= (2 * $i - 1); $k++) {
            echo "*";
        }
        echo "\n";
    }
}

echo "4. Piramide de asteriscos:\n";
piramide(5);

?>
