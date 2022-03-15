// Créez un article ayant comme id “citation” et contenant le texte suivant :
// "La vie a beaucoup plus d’imagination que nous”. Créez un button ayant
// comme id “button”. Lorsque l’on clique sur le bouton, récupérez le contenu
// de l’élément ayant comme id “citation” et affichez le contenu dans la
// console de développement. La fonction de récupération et d’affichage doit
// se nommer “citation()”.

// 1ére méthode

// documment.addEventListener('DOMContentLoaded')callback
// document.addEventListener('DOMContentLoaded',(event) =>{
//  function citation(){
//     let citation = document.getElementById("citation");
//     let button = document.getElementById("button");
    
      
//        button.addEventListener('click',(event) =>{
//           console.log(citation.textContent)
//        })
//        }                                                                                                           
    
//   citation();
        
//     })

// 2éme méthode

    document.addEventListener('DOMContentLoaded',(event) =>{
     
       let article = document.getElementById("citation").textContent;
         let button = document.getElementById("button");
      
       
            button.addEventListener('click',function citation(){
               console.log(article)
            })

         });
        

    
    