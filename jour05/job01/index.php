<?php require_once '../Controllers/IndexController.php';
require_once 'header.php'
?>


<!-- si l'utilisateur est connecté -->
<?php if (isset($_SESSION['utilisateur']) && !empty($_SESSION['utilisateur']['id'])) : ?>
  <p>Bonjour <?= $_SESSION['utilisateur']['prenom'] ?></p>
  <a href="deconnexion.php">Deconnexion</a>

<?php else : ?>
  <a href="inscription.php">Incription</a>
  <a href="connexion.php">Connexion</a>
<?php endif ?>