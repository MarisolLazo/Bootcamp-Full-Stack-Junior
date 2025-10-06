<?php
require_once 'Libro.php';

class Biblioteca {
    private $libros = [];

    public function __construct($libros = []) {
        $this->libros = $libros;
    }

    public function agregarLibro($libro) {
        $this->libros[] = $libro;
    }

    public function eliminarLibro($id) {
        foreach ($this->libros as $indice => $libro) {
            if ($libro->getId() == $id) {
                unset($this->libros[$indice]);
                $this->libros = array_values($this->libros);
                return true;
            }
        }
        return false;
    }

    public function editarLibro($id, $nuevoTitulo, $nuevoAutor, $nuevaCategoria) {
        foreach ($this->libros as $libro) {
            if ($libro->getId() == $id) {
                $libro->setTitulo($nuevoTitulo);
                $libro->setAutor($nuevoAutor);
                $libro->setCategoria($nuevaCategoria);
                return true;
            }
        }
        return false;
    }

    public function prestarLibro($id) {
        foreach ($this->libros as $libro) {
            if ($libro->getId() == $id) {
                return $libro->prestar();
            }
        }
        return false;
    }

    public function devolverLibro($id) {
        foreach ($this->libros as $libro) {
            if ($libro->getId() == $id) {
                $libro->devolver();
                return true;
            }
        }
        return false;
    }

    public function buscarLibros($termino) {
        $resultado = [];
        foreach ($this->libros as $libro) {
            if (
                stripos($libro->getTitulo(), $termino) !== false ||
                stripos($libro->getAutor(), $termino) !== false ||
                stripos($libro->getCategoria(), $termino) !== false
            ) {
                $resultado[] = $libro;
            }
        }
        return $resultado;
    }

    public function getLibros() {
        return $this->libros;
    }
}
?>
