<?php
require_once '../Model/UserModel.php';

if (!empty($_POST) && isset($_POST['email'], $_POST['password']) && !empty($_POST['email']) && !empty($_POST['password'])) {

    $email = strip_tags(filter_var($_POST['email'], FILTER_VALIDATE_EMAIL));
    $password = strip_tags($_POST['password']);

    $utilisateur = new UserModel();
    $exist = $utilisateur->findByEmail($email);

    if ($exist) {

        if (password_verify($password, $exist[0]['password'])) {

            $password = password_hash($password, PASSWORD_ARGON2I);
            $insert = $utilisateur->connect($email, $exist[0]['password']);
            $_SESSION['message'] = 'Connexion reussi';
            header('Location: index.php');
            exit;
        } else {
            $_SESSION['erreur'] = 'les mots de passe sont differents';
        }
    } else {
        $_SESSION['erreur'] = 'Mot de passe ou email incorrect';
    }
}
