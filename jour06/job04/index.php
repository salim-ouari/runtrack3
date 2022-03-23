<!-- Reprenez vos fichiers index.php et style.css. Ajoutez en haut de la page,
un header qui contient une liste de trois liens : Accueil, Présentation,
Contact. Lorsque la résolution est inférieure ou égale à 767. Les liens
disparaissent pour laisser place à un hamburger button. Lorsque l’on clique
sur celui-ci, les liens apparaissent. Si on re-clique, les liens disparaissent. -->

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="script.js"></script>
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <header>
        <nav class="navbar-desktop">
            <div>
                <a href=""> Accueil </a>
                <a href=""> Présentation </a>
                <a href=""> Contact </a>
            </div>
        </nav>
        <nav class="navbar-mobile">
            <label for="toggle">☰</label>
            <input type="checkbox" id="toggle">
            <div class="main_pages">
                <a href="#">Accueil</a>
                <a href="#">Actualité</a>
                <a href="#">Contact</a>
            </div>
        </nav>
        </nav>
    </header>

</body>

</html>