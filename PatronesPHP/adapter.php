<?php
interface ArchivoAntiguo {
    function abrirArchivoAntiguo();
}

class Windows7Archivo implements ArchivoAntiguo {
    function abrirArchivoAntiguo() {
        return "Abriendo archivo en formato antiguo (Windows 7).";
    }
}

interface ArchivoNuevo {
    function abrirArchivoNuevo();
}

class Windows10Archivo implements ArchivoNuevo {
    function abrirArchivoNuevo() {
        return "Abriendo archivo compatible con Windows 10.";
    }
}

class AdaptadorWindows implements ArchivoAntiguo {
    private $archivoNuevo;

    function __construct(ArchivoNuevo $archivo) {
        $this->archivoNuevo = $archivo;
    }

    function abrirArchivoAntiguo() {
        return $this->archivoNuevo->abrirArchivoNuevo();
    }
}

// Uso
$archivo7 = new Windows7Archivo();
echo $archivo7->abrirArchivoAntiguo() . "<br>";

$archivo10 = new Windows10Archivo();
$adaptador = new AdaptadorWindows($archivo10);
echo $adaptador->abrirArchivoAntiguo();
?>
