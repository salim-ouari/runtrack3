function jourtravaille(date) {

    let date_du_jour = new Date(date);

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let date_fr = date_du_jour.toLocaleDateString('fr-FR',options); 
   
   
    let joursFeries = ["2020-01-01","2020-04-13","2020-05-01","2020-05-08","2020-05-21","2020-06-01","2020-07-14","2020-08-15","2020-11-01","2020-11-11","2020-12-25"];
    
    if (joursFeries.includes(date) == true) {
        console.log("Le " + date_fr + " est un jour férié");
    }
    else if (date_du_jour.getDay() == 6 || date_du_jour.getDay() == 0 ){
        console.log("Non, " + date_fr + " est un week-end");
    }
    else {
        console.log("Oui, " + date_fr + " est un jour travaillé");
    }

}
jourtravaille("2020-08-15");