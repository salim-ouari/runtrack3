// Créez un button ayant comme id “button”. Créez un fichier expression.txt
// contenant votre expression favorite. Lorsqu’un utilisateur clique sur le
// bouton, à l’aide de Fetch, récupérez le contenu du fichier expression.txt,
// placez le dans un paragraphe et insérez le dans le corps de votre page.

window.addEventListener("DOMContentLoaded", () => {

    let btn = document.getElementById('button');
    let p = document.createElement('p')
    
    btn.addEventListener('click',function() {

        fetch('text.txt')
        .then((response) =>response.text())
        .then((response) => {

            console.log(response)
            p.innerHTML=response
            document.body.append(p);

        })
        .catch((error)=> console.log(error))
    })
    
})

