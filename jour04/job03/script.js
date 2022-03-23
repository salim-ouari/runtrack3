// Créez un formulaire permettant de trier ces données. Il doit contenir les
// champs suivant : id (input type text), nom (input type text), type (liste
// déroulante) et filtrer (input type button). Lorsque l’on clique sur “filtrer”, le
// script doit à l’aide de Fetch, récupérer le contenu du fichier et lister les
// éléments répondant aux critères sélectionnés en les affichant sur une page
// HTML.


window.addEventListener("DOMContentLoaded", (event) => {

    let input  = document.querySelectorAll('input');

    let id= input[0];
    console.log(id);

    let nom= input[1];
    console.log(nom);

    let btn= input[2];
    console.log(btn);

    let select= document.querySelector('select');
    console.log(select);

    let type=[];
   
    fetch('pokemon.json')

        .then((response) => response.json())
        .then((response) => {
        for(let i=0; i<response.length; i++){

            for(let j=0; j<response[i].type.length; j++){
                type.push(response[i].type[j]);


            }

            
         }

        
let tri= [...new Set(type)]
console.log(tri)

for(let i=0; i<tri.length; i++){

    let newoption= document.createElement('option')
    newoption.innerHTML=tri[i];
    select.append(newoption);
}

btn.addEventListener("click", function(){
            
    let type = document.querySelector('option').innerHTML
    let li = document.querySelector('li')
    let choice = select.selectedIndex;
    let valeur = select.options[choice].value;
    let text = select.options[choice].text;
    var newul = document.createElement('ul')
    var ul = document.querySelector('ul')
    
    for (let i = 0; i < response.length ; i++ ){
        if (text == response[i].type){
            body.append(newul)
            let NewLi = document.createElement('li')
            NewLi.innerHTML =response[i].id + ' ' + response[i].name.french + ' ' + response[i].type
            newul.append(NewLi)
        }
    }
})
reset.addEventListener("click", function(){
    let ul = document.querySelector('ul')
    ul.remove()
})
})
.catch((error) => console.log(error))


})


    
    
 
    
   

