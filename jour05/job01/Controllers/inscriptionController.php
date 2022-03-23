<?php
require_once '../Model/UserModel.php';
$payload = file_get_contents('php://input');
echo $payload;
if (isset($_POST)) {
    $result = '200';
    echo $result;
}
var_dump($_POST);

if (isset($_POST['nom'], $_POST['prenom'], $_POST['email'], $_POST['password'], $_POST['confirm'])) {

    $nom = strip_tags($_POST['nom']);
    $prenom = strip_tags($_POST['prenom']);
    $email = strip_tags(filter_var($_POST['email'], FILTER_VALIDATE_EMAIL));
    $password = strip_tags($_POST['password']);
    $confirm = strip_tags($_POST['confirm']);

    $utilisateur = new UserModel();
    $exist = $utilisateur->findByEmail($email);

    if (!$exist) {

        if ($password == $confirm) {

            $password = password_hash($password, PASSWORD_ARGON2I);
            $insert = $utilisateur->register($nom, $prenom, $email, $password);
            $_SESSION['message'] = 'Votre inscription est enregitrer';
            header('Location: ../Views/connexion.php');
            exit;
        } else {
            $_SESSION['erreur'] = 'les mots de passe sont differents';
        }
    } else {
        $_SESSION['erreur'] = 'Le mail existe déja';
    }
}
