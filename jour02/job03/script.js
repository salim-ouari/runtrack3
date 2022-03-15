// Créez un button ayant comme id “button”. Créez une balise <p> ayant
// comme id “compteur” et contenant “0”. Ce contenu doit évoluer
// proportionnellement au nombre d'événements click reçu par le bouton.
// Vous ne devez pas utiliser “onclick()” dans votre html. La fonction
// permettant d’effectuer la modification doit s'appeler “addone()”.



// faire passer le chargement de l'html avant le chargement du script
document.addEventListener('DOMContentLoaded',(event) => {

let button = document.getElementById('button')
let compte = document.getElementById('compte')
let count = 0

// sur l'evenement du "click" il déclenche la function
button.addEventListener('click',function addone() {
// innerhtml insére dans le HTML 
    compte.innerHTML= ++count
})

})