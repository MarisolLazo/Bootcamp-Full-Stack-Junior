<?php
require_once 'Libro.php';
session_start();

// Inicializar libros si no existe
if (!isset($_SESSION['libros'])) {
    $_SESSION['libros'] = [];
}
$libros = $_SESSION['libros'];

// Variable alerta
$alerta = "";

// Agregar libro
if (isset($_POST['titulo'], $_POST['autor'], $_POST['categoria'])) {
    $id = rand(1, 1000);
    $libro = new Libro($id, $_POST['titulo'], $_POST['autor'], $_POST['categoria']);
    $libros[] = $libro;
    $_SESSION['libros'] = $libros;
    $alerta = "<div class='alerta-flotante exito'>📘 Libro agregado correctamente</div>";
}

// Prestar libro
if (isset($_POST['prestar_id'])) {
    foreach ($libros as $libro) {
        if ($libro->getId() == $_POST['prestar_id']) {
            if ($libro->prestar()) {
                $alerta = "<div class='alerta-flotante exito'>📚 Libro prestado correctamente</div>";
            } else {
                $alerta = "<div class='alerta-flotante error'>❌ El libro ya esta prestado</div>";
            }
        }
    }
    $_SESSION['libros'] = $libros;
}

// Devolver libro
if (isset($_POST['devolver_id'])) {
    foreach ($libros as $libro) {
        if ($libro->getId() == $_POST['devolver_id']) {
            $libro->devolver();
            $alerta = "<div class='alerta-flotante exito'>🔁 Libro devuelto correctamente</div>";
        }
    }
    $_SESSION['libros'] = $libros;
}

// Eliminar libro
if (isset($_POST['eliminar_id'])) {
    foreach ($libros as $indice => $libro) {
        if ($libro->getId() == $_POST['eliminar_id']) {
            unset($libros[$indice]);
            $alerta = "<div class='alerta-flotante exito'>🗑️ Libro eliminado correctamente</div>";
        }
    }
    $_SESSION['libros'] = array_values($libros);
}

// Búsqueda
$librosAMostrar = $libros;
$alerta = ""; // Reiniciamos alerta

if (isset($_GET['busqueda']) && $_GET['busqueda'] != '') {
    $termino = strtolower($_GET['busqueda']);
    $librosAMostrar = array_filter($libros, function($libro) use ($termino) {
        return strpos(strtolower($libro->getTitulo()), $termino) !== false ||
               strpos(strtolower($libro->getAutor()), $termino) !== false ||
               strpos(strtolower($libro->getCategoria()), $termino) !== false;
    });

    if (empty($librosAMostrar)) {
        $alerta = "<div class='alerta-flotante error'>❌ No se encontraron libros con '$termino'</div>";
    } else {
        $count = count($librosAMostrar);
        $alerta = "<div class='alerta-flotante exito'>✅ Se encontraron $count libro(s) con '$termino'</div>";
    }
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Bibliotech Halloween 🎃</title>
<link rel="stylesheet" href="estilos.css">
</head>
<body>

<header>🎃 Bibliotech - Edicion Halloween 👻</header>

<div class="halloween-deco">
    <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWg4NzJvbnJsdTQ2ZzJtZTRmZXNnZThvYzU5azFxczZhZHcyNDNzZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7702jh3NsloOseiDUk/giphy.gif" alt="Halloween">
</div>

<section class="formulario">
    <h2>📖 Agregar Libro</h2>
    <form action="" method="POST">
        <input type="text" name="titulo" placeholder="Titulo" required>
        <input type="text" name="autor" placeholder="Autor" required>
        <select name="categoria" required>
            <option value="Novela">Novela</option>
            <option value="Cuento">Cuento</option>
            <option value="Fantasia">Fantasia</option>
            <option value="Ciencia Ficcion">Ciencia Ficcion</option>
            <option value="Educativo">Educativo</option>
        </select>
        <button type="submit">Agregar Libro 🎃</button>
    </form>
</section>

<section class="formulario">
    <h2>🔍 Buscar Libro</h2>
    <form action="" method="GET">
        <input type="text" name="busqueda" placeholder="Titulo, autor o categoria">
        <button type="submit">Buscar</button>
        <a href="index.php"><button type="button">Ver todos</button></a>
    </form>
</section>

<main>
    <h2>📚 Listado de Libros</h2>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Titulo</th>
                <th>Autor</th>
                <th>Categoria</th>
                <th>Estado</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
        <?php
        if (empty($librosAMostrar)) {
            echo "<tr><td colspan='6' align='center'>👻 No hay libros registrados</td></tr>";
        } else {
            foreach ($librosAMostrar as $libro) {
                echo "<tr>
                    <td>{$libro->getId()}</td>
                    <td>{$libro->getTitulo()}</td>
                    <td>{$libro->getAutor()}</td>
                    <td>{$libro->getCategoria()}</td>
                    <td>{$libro->getDisponible()}</td>
                    <td>
                        <form method='POST' style='display:inline;'>
                            <input type='hidden' name='prestar_id' value='{$libro->getId()}'>
                            <button type='submit'>Prestar</button>
                        </form>
                        <form method='POST' style='display:inline;'>
                            <input type='hidden' name='devolver_id' value='{$libro->getId()}'>
                            <button type='submit'>Devolver</button>
                        </form>
                        <form method='POST' style='display:inline;'>
                            <input type='hidden' name='eliminar_id' value='{$libro->getId()}'>
                            <button type='submit'>Eliminar</button>
                        </form>
                    </td>
                </tr>";
            }
        }
        ?>
        </tbody>
    </table>
</main>

<?php if($alerta) echo $alerta; ?>

</body>
</html>
