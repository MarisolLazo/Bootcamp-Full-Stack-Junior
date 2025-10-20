 <?php
interface Personaje {
    function descripcion();
    function poder();
}

class Guerrero implements Personaje {
    function descripcion() {
        return "Guerrero básico";
    }

    function poder() {
        return 10;
    }
}

class Mago implements Personaje {
    function descripcion() {
        return "Mago aprendiz";
    }

    function poder() {
        return 8;
    }
}

// Decorador base
abstract class ArmaDecorator implements Personaje {
    protected $personaje;

    function __construct(Personaje $p) {
        $this->personaje = $p;
    }
}

class Espada extends ArmaDecorator {
    function descripcion() {
        return $this->personaje->descripcion() . " con una Espada legendaria";
    }

    function poder() {
        return $this->personaje->poder() + 5;
    }
}

class Varita extends ArmaDecorator {
    function descripcion() {
        return $this->personaje->descripcion() . " con una Varita mágica";
    }

    function poder() {
        return $this->personaje->poder() + 4;
    }
}

// Uso
$guerrero = new Guerrero();
$mago = new Mago();

$guerreroConEspada = new Espada($guerrero);
$magoConVarita = new Varita($mago);

echo $guerreroConEspada->descripcion() . " - Poder: " . $guerreroConEspada->poder() . "<br>";
echo $magoConVarita->descripcion() . " - Poder: " . $magoConVarita->poder();
?>
