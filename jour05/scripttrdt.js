document.addEventListener("DOMContentLoaded", (event) => {
    let erreur;
    let p = document.getElementById("erreur");
    let formInscription = document.forms["inscription"];
    let input2 = document.getElementById("input2")
    console.log(input2)
    console.log(formInscription)
  
  
    input2.addEventListener("click", function () {
  
      let formData = new FormData(formInscription);
      fetch("../Controllers/InscriptionController.php", {
        method: "POST",
        //   headers: {
        //     "Content-type": "application/json",
        //   },
        body: formData
      })
        .then((response) => response.text())
        .then((response) => {
          var err = document.createElement('p')
          err.innerHTML = response
          document.body.append(err)
          console.log(response)
  
        });
    });
  
    // ***********************************VALIDATION DU NOM***************************
    formInscription.nom.addEventListener("input", function () {
      validNom(this);
    });
    const validNom = function (champ) {
      let message;
      let valide = false;
      // let p = champ.nextElementSibling;
      //Mot de passe supérieur à 8 carractère
      if (champ.value.length <= 1) {
        message = "Le nom doit contenir au moins 2 carractères";
      } else if (/[0-9]/.test(champ.value)) {
        message = "Le nom ne doit pas contenir de chiffre";
      } else if (!/^[a-zA-Z'àâéèêôùûçÀÂÉÈÔÙÛÇ-\s]+$/.test(champ.value)) {
        message = "Le nom contient des carractère non autorisé";
      } else {
        message = " Nom valide";
        valide = true;
      }
  
      if (valide) {
        p.innerHTML = message;
        champ.style.backgroundColor = "rgba(1, 126, 1, 0.151)";
        p.classList.remove("error");
        p.classList.add("valid");
        return true;
      } else {
        p.innerHTML = message;
        champ.style.backgroundColor = "rgba(126, 1, 1, 0.151)";
        p.classList.remove("valid");
        p.classList.add("error");
        return false;
      }
    };
  
    // ***********************************VALIDATION DU PRENOM***************************
    formInscription.prenom.addEventListener("input", function () {
      validPrenom(this);
    });
    const validPrenom = function (champ) {
      let message;
      let valide = false;
      //Mot de passe supérieur à 8 carractère
      if (champ.value.length < 3) {
        message = "Le prénom doit contenir au moins 3 carractères";
      } else if (/[0-9]/.test(champ.value)) {
        message = "Le Prénom ne doit pas contenir de chiffre";
      } else if (!/^[a-zA-Z'àâéèêôùûçÀÂÉÈÔÙÛÇ-\s]+$/.test(champ.value)) {
        message = "Le prenom contient des carractère non autorisé";
      } else {
        message = " Prénom valide";
        valide = true;
      }
  
      if (valide) {
        p.innerHTML = message;
        champ.style.backgroundColor = "rgba(1, 126, 1, 0.151)";
        p.classList.remove("error");
        p.classList.add("valid");
        return true;
      } else {
        p.innerHTML = message;
        champ.style.backgroundColor = "rgba(126, 1, 1, 0.151)";
        p.classList.remove("valid");
        p.classList.add("error");
        return false;
      }
    };
  
    // ***********************************VALIDATION EMAIL***************************
    formInscription.email.addEventListener("input", function () {
      validEmail(this);
    });
    const validEmail = function (champ) {
      let emailRegExp = new RegExp(
        "^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$",
        "g"
      );
      let testEmail = emailRegExp.test(champ.value);
      if (testEmail) {
        p.innerHTML = "Adresse email valide";
        champ.style.backgroundColor = "rgba(1, 126, 1, 0.151)";
        p.classList.remove("error");
        p.classList.add("valid");
        return true;
      } else {
        p.innerHTML = "Adresse email invalide";
        champ.style.backgroundColor = "rgba(126, 1, 1, 0.151)";
        p.classList.remove("valid");
        p.classList.add("error");
        return false;
      }
    };
  