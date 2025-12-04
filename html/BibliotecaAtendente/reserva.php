<?php 
include('valida_sessao.php'); 
include('conexao.php'); 
?>

<?php
// LISTAR TODAS AS RESERVAS
$sql = "SELECT * FROM Reserva";
$reservas = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Reservas</title>

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

<h2>Lista de Reservas</h2>

<table>
    <tr>
        <th>ID Usuário</th>
        <th>ID Livro</th>
        <th>Nome do Cliente</th>
        <th>Livro</th>
        <th>Data da Reserva</th>
        <th>Data da Entrega</th>
    </tr>

    <?php while ($row = $reservas->fetch_assoc()): ?>
        <tr>
            <td><?= $row['id_usuario'] ?></td>
            <td><?= $row['id_livro'] ?></td>
            <td><?= $row['nome_cliente'] ?></td>
            <td><?= $row['livro'] ?></td>
            <td><?= $row['data_reserva'] ?></td>
            <td><?= $row['data_entrega'] ?></td>
        </tr>
    <?php endwhile; ?>

</table>

</body>
</html>
