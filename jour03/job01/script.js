// Créez une balise button ayant comme id “button”. En cliquant sur le
// bouton, vous devrez faire apparaître le texte “le $ est un bon élément
// monétaire. Le # de twitter est une bonne I D. Il faudra faire le point avec la
// classe pour cacher cet élément. ”.
// En dessous faire un bouton qui servira à cacher tout l’élément html.


// faire passer le chargement de l'html avant le chargement du script syntax jquery
$(document).ready(function() {

    // selection id et creation variable
    let btn =$('#button');
    let p = $('p');
    let btn2 = $('#button2');
    let html =$('html')

    btn.on('click', function(){
        
        p.add('<span>le $ est un bon élément monétaire. Le # de twitter est une bonne I D. Il faudra faire le point avec la classe pour cacher cet élément.</span>').appendTo(document.body);

    })

    btn2.on('click', function(){

        html.removeAttr('style').hide();
    })

})


// jquery
// $(document).ready(function(){

//     console.log($('.button'))
//     let button = $('.button')
    
//     console.log((btn[0]))
//     btn.eq(1).on('click',function(){
//         console.log($(this))
//     })
    
//     $('img').click(function(){
//         let valeur= $(this)
//     })
    
//     })


