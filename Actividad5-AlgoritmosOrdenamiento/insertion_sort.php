<?php
class InsertionSorter {
    private $data;

    public function __construct($array) {
        $this->data = $array;
    }

    public function sort() {
        $n = count($this->data);

        for ($i = 1; $i < $n; $i++) {
            $key = $this->data[$i];
            $j = $i - 1;

            // Comparación alfabetica
            while ($j >= 0 && strtolower($this->data[$j]) > strtolower($key)) {
                $this->data[$j + 1] = $this->data[$j];
                $j--;
            }
            $this->data[$j + 1] = $key;
        }
        return $this->data;
    }
}

// Lista de nombres
$nombres = ["Cristina", "ana", "Beatriz", "david", "andres"];

echo "Lista original:\n";
print_r($nombres);

$insertion = new InsertionSorter($nombres);
$ordenados = $insertion->sort();

echo "\nLista ordenada alfabeticamente (Insertion Sort):\n";
print_r($ordenados);
?>
