<?php
include("conexao.php");

// Recebe os dados
$nome = $_POST['nome_cliente'];
$livro = $_POST['livro'];
$data_reserva = $_POST['data'];
$data_entrega = date('Y-m-d', strtotime($data_reserva . ' +30 days'));

// Insere no banco
$sql = "INSERT INTO Reserva (nome_cliente, livro, data_reserva, data_entrega)
        VALUES ('$nome', '$livro', '$data_reserva', '$data_entrega')";

if ($conn->query($sql) === TRUE) {
    header("Location: reserva.php?ok=1");
    exit;
} else {
    echo "Erro: " . $conn->error;
}
?>