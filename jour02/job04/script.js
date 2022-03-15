// Créez un textarea dont l’id est “keylogger”. Chaque fois que l’utilisateur
// tape une lettre sur son clavier (a-z), celle-ci est ajoutée dans le textarea
// (même si le focus en cours n’est pas le textarea). Si c’est le cas, la lettre
// doit être ajoutée deux fois.'
document.addEventListener('DOMContentLoaded', (event)=>{


let text= document.getElementById('keylogger')
// keydown fonction native qui lance l'évent lorque une touche est présser (inverse keyup)
    window.addEventListener("keydown",(event)=>{
    
        if (text.focus){
            // value car textarea ne sappelle pas avec innerHTML
            text.value= text.value+event.key
        }
        else{
            text.value= text.value
        }


    })



    })




