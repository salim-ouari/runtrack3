<?php 
require_once '../Model/UserModel.php';
$utilisateur = new UserModel();
$utilisateur->disconnect();
header('Location: index.php');
