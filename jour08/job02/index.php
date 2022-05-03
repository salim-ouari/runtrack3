<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">

</head>

<body>
    <header>
        <nav>
            <ul>
                <li> <a href="index.php">Accueil</a> </li>
                <li> <a href="index.php">Inscription</a> </li>
                <li> <a href="index.php">Connexion</a> </li>
                <li> <a href="index.php">Rechercher</a> </li>
            </ul>
        </nav>
    </header>

    <main>
        <section>
            <form action="" method="post" enctype="multipart/form">


                <input type="radio" name="civilite" id="homme" value="<?= isset($_POST['civilite']) ? $_POST['civilite'] : '' ?>">
                <label for="homme">Homme</label>

                <input type="radio" name="civilite" id="femme" value="<?= isset($_POST['civilite']) ? $_POST['civilite'] : '' ?>">
                <label for="femme">Femme</label>

                <label for="prenom">Prénom</label>
                <input type="text" name="prenom" id="prenom" value="<?= isset($_POST['prenom']) ? $_POST['prenom'] : '' ?>">

                <label for="nom">Nom</label>
                <input type="text" name="nom" id="nom" value="<?= isset($_POST['nom']) ? $_POST['nom'] : '' ?>">

                <label for="adresse">Adresse</label>
                <input type="text" name="adresse" id="adresse" value="<?= isset($_POST['adresse']) ? $_POST['adresse'] : '' ?>">

                <label for="email">Email</label>
                <input type="email" name="email" id="email" value="<?= isset($_POST['email']) ? $_POST['email'] : '' ?>">

                <label for="motDePasse">Mot de passe</label>
                <input type="password" name="motDePasse" id="motDePasse" value="<?= isset($_POST['motDePasse']) ? $_POST['motDePasse'] : '' ?>">

                <label for="comfirmeMdp">Confirmé le mot de passe</label>
                <input type="password" name="comfirmeMdp" id="comfirmeMdp" value="<?= isset($_POST['comfirmeMdp']) ? $_POST['comfirmeMdp'] : '' ?>">

                <input type="checkbox" name="informatique" id="informatique">
                <label for="informatique">Informatique</label>

                <input type="checkbox" name="voyage" id="voyage">
                <label for="voyage">Voyages</label>

                <input type="checkbox" name="sport" id="sport">
                <label for="sport">Sport</label>

                <input type="checkbox" name="lecture" id="lecture">
                <label for="lecture">Lecture</label>

                <input type="submit" name="validation" value="Envoyer">

            </form>
        </section>
    </main>

    <footer>
        <ul>
            <li> <a href="index.php">Accueil</a> </li>
            <li> <a href="index.php">Inscription</a> </li>
            <li> <a href="index.php">Connexion</a> </li>
            <li> <a href="index.php">Rechercher</a> </li>
        </ul>
    </footer>

    <!-- Compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>

</body>

</html>