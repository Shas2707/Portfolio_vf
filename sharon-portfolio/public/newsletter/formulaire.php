<?php
$host = "localhost";
$username = "root";
$password = "";
$database = "newsletter_system";
$message = "";
$messageType = "";
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = trim($_POST["email"]);
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        try {
            $pdo = new PDO("mysql:host=$host;dbname=$database;charset=utf8", $username, $password);
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $stmt = $pdo->prepare("INSERT INTO newsletter (email) VALUES (?)");
            $stmt->execute([$email]);
            $message = "Merci ! Tu es maintenant inscrite à notre newsletter girly ! 💕";
            $messageType = "success"; 
        } catch(PDOException $e) {
            if ($e->getCode() == 23000) {
                $message = "Cette adresse email est déjà inscrite ! 💖";
                $messageType = "error";
            } else {
                $message = "Oups ! Une erreur s'est produite. Réessaie plus tard ! 😢";
                $messageType = "error";
            }
        }
    } else {
        $message = "Merci d'entrer une adresse email valide ! 💌";
        $messageType = "error";
    }
}
?>