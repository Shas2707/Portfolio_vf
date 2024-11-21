<?php
$conn=mysqli_connect("localhost","root","","biliotheque");
?>
<?php

@include("connecte.php");
$ref = $_POST['ref'];
$nb_page = $_POST['nb_page'];
$auteur = $_POST['auteur'];
$date_pub = $_POST['date_pub'];
$genre = $_POST['genre'];
$dispo = $_POST['dispo'];
$nb_emp = $_POST['nb_emp'];
$etat = $_POST['etat'];
$nb_ex = $_POST['nb_ex'];

$requete = "INSERT INTO livres VALUES ('$ref', '$nb_page','$auteur','$date_pub','$genre','$dispo','$nb_emp', '$etat','$nb_ex';

      $rl = mysqli_query ($conn,$requete);
      
echo "<center><p>Ajout OK </p></center>";
echo '<center><a href="index.html">Retour</a></center>';

mysqli_close($conn)

?>