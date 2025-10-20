<?php
interface Personaje {
    function atacar();
    function velocidad();
}

class Esqueleto implements Personaje {
    function atacar() {
        return "El Esqueleto lanza flechas con precisión.";
    }

    function velocidad() {
        return "Velocidad: Media.";
    }
}

class Zombi implements Personaje {
    function atacar() {
        return "El Zombi muerde lentamente, pero con fuerza.";
    }

    function velocidad() {
        return "Velocidad: Lenta.";
    }
}

class FabricaPersonaje {
    function crearPersonaje($nivel) {
        if ($nivel == "facil") {
            return new Esqueleto();
        } elseif ($nivel == "dificil") {
            return new Zombi();
        } else {
            throw new Exception("Nivel no válido.");
        }
    }
}

// Uso
$fabrica = new FabricaPersonaje();
$personaje = $fabrica->crearPersonaje("dificil");

echo $personaje->atacar() . "<br>";
echo $personaje->velocidad();
?>