// Commencez par créer une base de données “utilisateurs” contenant une
// table “utilisateurs” et ayant comme champs “id”, “nom”, “prenom”, “email” et
// password.
// Ensuite, créez une page d’accueil qui contient un paragraphe “Bonjour
// $prenom” si l’utilisateur est connecté, sinon deux liens vers une page
// “inscription.php” et une page “connexion.php”. Ces deux pages permettent
// aux utilisateurs de créer un compte et de se connecter. L’ensemble des
// vérifications habituelles doivent se faire sans rafraîchissement de la page.
// (Prénom/Nom renseignés, mots de passe identiques et suffisamment
// complexes, adresse email déjà prise, au bon format...) Un message lié à
// chaque erreur doit être affiché en dessous du formulaire le cas échéant.
// Lorsqu’une inscription est validée, l’utilisateur est renvoyé sur la page de
// connexion. Lorsqu’il se connecte, il est renvoyé vers la page d’accueil.

document.addEventListener("DOMContentLoaded", (event) => {
    // INSCRIPTION////////////////////////////////
    let p_erreur = document.querySelector(".erreur");
    let formInscription = document.forms["inscription"];
    let validation = document.getElementById("validation");
    let formConnexion = document.forms["connexion_form"];
    let valid_connexion = document.getElementById("valid_connexion");

    // controle regex
    let regexLowerCase = /[a-z]+/;
    let regexChiffre = /[0-9]+/;
    let regexUpperCase = /[A-Z]+/;
    let regexMail = /.+\@.+\..+/;
    // variable initialisé
    let nom = document.querySelector(".nom");
    let prenom = document.querySelector(".prenom");
    let email = document.querySelector(".email");
    let password = document.querySelector(".password");

    console.log(validation);

    if (nom) {
        nom.addEventListener("keyup", function() {
            if (
                regexLowerCase.test(this.value) == false ||
                regexUpperCase.test(this.value) == false
            ) {
                if (p_erreur.innerHTML.length === 0) {
                    p_erreur.innerHTML =
                        "Votre nom doit contenir une minuscule et une majuscule";
                }
            } else {
                p_erreur.innerHTML = "";
            }
        });
    }

    // controle prenom
    if (prenom) {
        prenom.addEventListener("keyup", function() {
            if (
                regexLowerCase.test(this.value) == false ||
                regexUpperCase.test(this.value) == false
            ) {
                if (p_erreur.innerHTML.length === 0) {
                    p_erreur.innerHTML =
                        "Votre prenom doit contenir  minuscule et  majuscule !";
                }
            } else {
                p_erreur.innerHTML = "";
            }
        });
    }

    if (email) {
        email.addEventListener("keyup", function() {
            if (regexMail.test(this.value) === false) {
                if (p_erreur.innerHTML.length === 0) {
                    p_erreur.innerHTML = "Votre adresse mail est incorrect";
                }
            } else {
                p_erreur.innerHTML = "";
            }
        });
    }

    if (password) {
        password.addEventListener("keyup", function() {
            if (
                regexUpperCase.test(this.value) == false ||
                regexLowerCase.test(this.value) == false ||
                regexChiffre.test(this.value) == false
            ) {
                if (p_erreur.innerHTML.length === 0) {
                    p_erreur.innerHTML =
                        "Votre mot de passe doit contenir au moins Une majuscule, une minuscule et un chiffre";
                }
            } else {
                p_erreur.innerHTML = "";
            }
        });
    }

    if (validation) {
        validation.addEventListener("click", function() {
            let formData = new FormData(formInscription);

            fetch("../Controllers/InscriptionController.php", {
                    method: "POST",
                    body: formData,
                })
                .then((response) => response.json())
                .then((response) => {
                    if (response.hasOwnProperty("valide")) {
                        window.location.replace("./index.php");
                    }

                    if (response.hasOwnProperty("error")) {
                        for (let i = 0; i < response.error.length; i++) {
                            console.log(response.error[i]);
                        }
                    }
                });
        });
    }

    if (valid_connexion) {
        valid_connexion.addEventListener("click", function() {
            let formData = new FormData(formConnexion);

            fetch("../Controllers/ConnexionController.php", {
                    method: "POST",
                    body: formData,
                })
                .then((response) => response.json())

            .then((response) => {
                console.log(response);

                if (response.hasOwnProperty("valide")) {
                    window.location.replace("./index.php");
                }

                if (response.hasOwnProperty("error")) {
                    for (let i = 0; i < response.error.length; i++) {
                        console.log(response.error[i]);
                    }
                }
            });
        });
    }
});