<?php
class BubbleSorter {
    private $data;

    public function __construct($array) {
        $this->data = $array;
    }

    public function sortDesc() {
        $n = count($this->data);

        // Algoritmo Bubble Sort descendente
        for ($i = 0; $i < $n - 1; $i++) {
            for ($j = 0; $j < $n - $i - 1; $j++) {
                if ($this->data[$j] < $this->data[$j + 1]) {
                    // Intercambio
                    $temp = $this->data[$j];
                    $this->data[$j] = $this->data[$j + 1];
                    $this->data[$j + 1] = $temp;
                }
            }
        }
        return $this->data;
    }
}

// Lista de prueba con negativos y duplicados
$numeros = [5, -2, 10, 5, 0, -7, 8];

echo "Lista original:\n";
print_r($numeros);

$bubble = new BubbleSorter($numeros);
$ordenada = $bubble->sortDesc();

echo "\nLista ordenada (Bubble Sort descendente):\n";
print_r($ordenada);
?>
