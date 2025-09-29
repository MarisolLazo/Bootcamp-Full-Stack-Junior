<?php
class MergeSorter {
    private $data;

    public function __construct($array) {
        $this->data = $array;
    }

    public function sort() {
        $this->data = $this->mergeSort($this->data);
        return $this->data;
    }

    private function mergeSort($arr) {
        if (count($arr) <= 1) {
            return $arr;
        }

        $middle = intval(count($arr) / 2);
        $left = array_slice($arr, 0, $middle);
        $right = array_slice($arr, $middle);

        return $this->merge($this->mergeSort($left), $this->mergeSort($right));
    }
    private function merge($left, $right) {
        $result = [];
        while (!empty($left) && !empty($right)) {
            if (strtolower($left[0]) <= strtolower($right[0])) {
                $result[] = array_shift($left);
            } else {
                $result[] = array_shift($right);
            }
        }
        return array_merge($result, $left, $right);
    }
}

// Lista de palabras
$palabras = ["pera", "Manzana", "uva", "platano", "fresa"];

echo "Lista original:\n";
print_r($palabras);

$merge = new MergeSorter($palabras);
$ordenadas = $merge->sort();

echo "\nLista ordenada alfabeticamente (Merge Sort):\n";
print_r($ordenadas);
?>
