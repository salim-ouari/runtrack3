window.addEventListener("DOMContentLoaded", () => {

 let input= getElementById("input");
 let div = document.querySelector("div");


    // var btnBurger = document.getElementsByClassName('burger-icon');
    
    var buttonNav = buttonBurger[0];
    
    var nav = document.querySelector('nav');
    
    buttonNav.addEventListener("click", function(){
    
        nav.classList.toggle("open");
    
        // console.log(buttonNav)
        // console.log('hey');
        
    
        });
    })