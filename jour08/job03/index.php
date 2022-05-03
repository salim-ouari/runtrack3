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
        <nav class="row center-align">
            <ul class="center-align">
                <li> <a href="index.php">Accueil</a> </li>
                <li> <a href="index.php">Inscription</a> </li>
                <li> <a href="index.php">Connexion</a> </li>
                <li> <a href="index.php">Rechercher</a> </li>
            </ul>
        </nav>
    </header>

    <main>
        <section class="container">
            <form action="" method="post" enctype="multipart/form">

                <label for="homme">
                    <input type="radio" name="civilite" id="homme" value="<?= isset($_POST['civilite']) ? $_POST['civilite'] : '' ?>">
                    Homme</label>

                <label for="femme">
                    <input type="radio" name="civilite" id="femme" value="<?= isset($_POST['civilite']) ? $_POST['civilite'] : '' ?>">
                    Femme</label>

                <label for="prenom">Prénom
                    <input type="text" name="prenom" id="prenom" value="<?= isset($_POST['prenom']) ? $_POST['prenom'] : '' ?>">
                </label>

                <label for="nom">Nom
                    <input type="text" name="nom" id="nom" value="<?= isset($_POST['nom']) ? $_POST['nom'] : '' ?>">
                </label>

                <label for="adresse">Adresse
                    <input type="text" name="adresse" id="adresse" value="<?= isset($_POST['adresse']) ? $_POST['adresse'] : '' ?>">
                </label>

                <label for="email">Email
                    <input type="email" name="email" id="email" value="<?= isset($_POST['email']) ? $_POST['email'] : '' ?>">
                </label>

                <label for="motDePasse">Mot de passe
                    <input type="password" name="motDePasse" id="motDePasse" value="<?= isset($_POST['motDePasse']) ? $_POST['motDePasse'] : '' ?>">
                </label>

                <label for="comfirmeMdp">Confirmé le mot de passe
                    <input type="password" name="comfirmeMdp" id="comfirmeMdp" value="<?= isset($_POST['comfirmeMdp']) ? $_POST['comfirmeMdp'] : '' ?>">
                </label>
                <label for="informatique">
                    <input type="checkbox" name="informatique" id="informatique">
                    Informatique</label>

                <label for="voyage">
                    <input type="checkbox" name="voyage" id="voyage">
                    Voyages</label>

                <label for="sport">
                    <input type="checkbox" name="sport" id="sport">
                    Sport</label>

                <label for="lecture">
                    <input type="checkbox" name="lecture" id="lecture">
                    Lecture</label>

                <input type="submit" name="validation" value="Envoyer">

            </form>
        </section>
    </main>

    <footer class="row">
        <ul class=" center-align teal  ">
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