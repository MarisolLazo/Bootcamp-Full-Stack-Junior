<?php
interface EstrategiaSalida {
    function mostrar($mensaje);
}

class Consola implements EstrategiaSalida {
    function mostrar($mensaje) {
        echo "Consola: " . $mensaje . "<br>";
    }
}

class JSONSalida implements EstrategiaSalida {
    function mostrar($mensaje) {
        echo json_encode(["mensaje" => $mensaje]) . "<br>";
    }
}

class ArchivoTXT implements EstrategiaSalida {
    function mostrar($mensaje) {
        file_put_contents("mensaje.txt", $mensaje);
        echo "Mensaje guardado en archivo TXT.<br>";
    }
}

class Mensaje {
    private $estrategia;

    function __construct(EstrategiaSalida $e) {
        $this->estrategia = $e;
    }

    function setEstrategia(EstrategiaSalida $e) {
        $this->estrategia = $e;
    }

    function mostrar($mensaje) {
        $this->estrategia->mostrar($mensaje);
    }
}

// Uso
$mensaje = new Mensaje(new Consola());
$mensaje->mostrar("Hola desde la consola");

$mensaje->setEstrategia(new JSONSalida());
$mensaje->mostrar("Hola desde JSON");

$mensaje->setEstrategia(new ArchivoTXT());
$mensaje->mostrar("Hola desde archivo TXT");
?>
