<?php
include("conexao.php"); // conecta ao banco

// Recebe o ID pela URL (ex: apagar_reserva.php?id=3)
$id = $_GET['id'];

// Se não tiver ID, não apaga nada
if (!isset($id)) {
    echo "ID inválido.";
    exit;
}

// Comando SQL para excluir a reserva
$sql = "DELETE FROM Reserva WHERE id_reserva = $id";
