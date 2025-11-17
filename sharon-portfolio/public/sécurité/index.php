<?php
session_start();
@include("connexion.php");
$login = mysqli_real_escape_string($conn, $_POST['login']);
$motdepasse = $_POST['motdepasse'];
$fonction = mysqli_real_escape_string($conn, $_POST['fonction']);
$check = mysqli_query($conn, "SELECT * FROM users WHERE login = '$login'");
if (mysqli_num_rows($check) > 0) {
    header("Location: index.html?erreur=existe");
    exit();
}
$mdp_hash = password_hash($motdepasse, PASSWORD_DEFAULT);
$insert = "INSERT INTO users (login, mdp, fonction) VALUES ('$login', '$mdp_hash', '$fonction')";
if (mysqli_query($conn, $insert)) {
    // Succès
    header("Location: index.php?inscription=ok");
    exit();
} else {
    echo "Erreur lors de l'inscription : " . mysqli_error($conn);
}
?>
