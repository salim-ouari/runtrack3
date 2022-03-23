<?php
session_start();
include_once 'traitementlogin.php';
var_dump($resultat_log);

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
	<form method="post" action="">

		<label for="email"></label>
		<input type="email" id="email" name="email" placeholder="email">

		<label for="password"></label>
		<input type="password" id="password" name="password" placeholder="password">

		<input type="submit" name="submit" value="Connexion" id="login">
	</form>

</body>

</html>