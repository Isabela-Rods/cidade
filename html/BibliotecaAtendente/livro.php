<?php 
include('valida_sessao.php'); 
include('conexao.php'); 
?>

<?php
// LISTAR TODAS AS RESERVAS
$sql = "SELECT * FROM Livro";
$reservas = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Livros</title>

    <style>
        body {
            font-family: Arial;
            background: #f4f4f4;
            padding: 30px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            background: white;
            box-shadow: 0 0 10px rgba(0,0,0,0.2);
        }

        th, td {
            border: 1px solid #ccc;
            padding: 12px;
            text-align: center;
        }

        th {
            background: #0066ff;
            color: white;
        }

        tr:nth-child(even) {
            background: #f3f3f3;
        }

        h2 {
            text-align: center;
            margin-bottom: 20px;
        }

        a {
            text-decoration: none;
            color: #0066ff;
        }
    </style>
</head>
<body>

<h2>Lista de Livros</h2>

<table>
    <tr>
        <th>ID Livro</th>
        <th>ID Cliente</th>
        <th>Livro</th>
        <th>Autor</th>
        <th>Reserva</th>
    </tr>

    <?php while ($row = $reservas->fetch_assoc()): ?>
        <tr>
            <td><?= $row['id_livro'] ?></td>
            <td><?= $row['id_usuario'] ?></td>
            <td><?= $row['Livro'] ?></td>
            <td><?= $row['Autor'] ?></td>
            <td><?= $row['data_reserva'] ?></td>
        </tr>
    <?php endwhile; ?>

</table>

</body>
<li><a href="bibliotecaAtendente.html">Início</a></li>
</html>