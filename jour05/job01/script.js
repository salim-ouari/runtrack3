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

window.addEventListener("DOMContentLoaded",(event)=>{

let p= document.querySelectorAll('p');
let nom = document.getElementById('nom');
let prenom=document.getElementById('prenom');
let email = document.getElementById('email');
let pass= document.getElementById('password');
let pass2= document.getElementById('password2');
let submit = document.getElementById('submit');

console.log(p);

let regexLowerCase= /[a-z]{1,}/
let regexUpperCase= /[A-Z]{1,}/
let regexNumber= /[0-9]{1,}/
let ValidMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
let regexSpeCharac =  /^[^@&".()!_$*€£`+=\/;?#]+$/

nom.addEventListener('focusout', function(){
    if (regexSpeCharac.test(this.value) == false ){
        p[0].textContent = 'Pas de caractère Spéciaux'
        p[0].style.color = 'red'
        nom.style.borderColor ='red'
    }
    else if (regexNumber.test(this.value) == true ){
        p[0].textContent = 'Pas de Chiffre'
        p[0].style.color = 'red'
        nom.style.borderColor ='red'
    }
    else{
        p[0].textContent = ''
        nom.style.borderColor ='green'

    }
})

prenom.addEventListener('focusout', function(){
    if (regexSpeCharac.test(this.value) == false ){
        p[1].textContent = 'Pas de caractère Spéciaux'
        p[1].style.color = 'red'
        prenom.style.color ='red'
        prenom.style.borderColor ='red'
    }
    else if (regexListNum.test(this.value) == true ){
        p[1].textContent = 'Pas de Chiffre'
        p[1].style.color = 'red'
        prenom.style.color ='red'
        prenom.style.borderColor ='red'
    }
    else{
        p[1].textContent = ''
        prenom.style.color ='black'
        nom.style.borderColor ='green'

    }
})

email.addEventListener('focusout', function () {
    if (ValidMail.test(this.value) == false){
        p[2].textContent = 'Email incorrect'
        p[2].style.color = 'red'
        email.style.color ='red'
        email.style.borderColor ='red'
    }
    else{
        p[2].textContent = 'Email Valide'
        p[2].style.color = 'green'
        email.style.color ='black'
    }
})

pass.addEventListener('keyup', function(){
    if(this.value.length === 0){
        p[3].textContent='Remplir le champ !!'
        p[3].style.color='red'
    }
    else{
        p[3].textContent='Minimum 8 charateres'
        p[3].style.color='red'
    }
    if(this.value.length < 8){
        p[3].style.color='red'
    }
    else {
        p[3].style.color='green'
    }

    if(regexUpperCase.test(this.value) == false){
        p[4].style.color='red'
    }
    else{
        p[4].style.color='green'
    }

    if(regexLowerCase.test(this.value) == false){
        p[5].style.color='red'
    }
    else{
        p[5].style.color='green'
    }

    if(regexNumber.test(this.value) == false){
        p[6].style.color='red'
    }
    else{
        p[6].style.color='green'
    }

})


pass2.addEventListener('focusout', function matchPassword() {
    if(this.value.length === 0){
        p[7].textContent='Remplir le champ !!'
        p[7].style.color='red'
        pass2.style.borderColor='red'
    }
    else{
        p[7].textContent=''
        p[7].style.color='red'
        if(pass.value != pass2.value){
            p[7].textContent = 'Mot de passe différent'
            p[7].style.color = 'red'
            pass2.style.color ='red'
            pass2.style.borderColor ='red'
        }
        else {
            p[7].textContent = 'Mot de passe Valide'
            p[7].style.color = 'green'
            pass2.style.color ='black'
        }
    }
})

submit.addEventListener('click', function(){
    console.log(nom.value)
    console.log(prenom.value)
    console.log(email.value)
    console.log(pass.value)
    console.log(pass2.value)
})
})




