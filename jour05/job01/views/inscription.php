<?php

include_once 'traitement.php';
var_dump($requete2);
var_dump($resultat);

?>


<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>

  <script src="script.js"></script>
</head>

<body>

  <h1>Inscription</h1>
  <form method="post">


    <label for="nom"></label>
    <input type="text" name="nom" placeholder="nom" id="nom">
    <p></p>
    <label for="prenom"></label>
    <input type="text" name="prenom" placeholder="prenom" id="prenom">
    <p></p>
    <label for="email"></label>
    <input type="email" name="email" placeholder="Email" id="email">
    <p></p>
    <label for="password"></label>
    <input type="text" name="password" placeholder="Password" id="password">
    <p>Minimum huit caractères</p>
    <p>Minimum une lettre majuscule</p>
    <p>Minimum une Lettre minuscule</p>
    <p>Minimum un Chiffre</p>
    <label for="password2"></label>
    <input type="text" name="password2" placeholder="ConfirmPassword" id="password2">


    <button type="submit" name="submit" id="submit">Connexion</button>

  </form>
</body>

</html>