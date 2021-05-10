// Snack 4_1a:
/*Creare un oggetto palla che abbia le seguenti proprietà.
    Nome = palla
    Peso = 10*/
// var palla = {
//     nome : 'pala',
//     peso : 10,
    
// } 
// console.log(pala);

// Snack 4_1b:
/*Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla.*/
// var pala = [
//     {
//         nome : 'pala',
//         peso : 10,
        
//     } 
// ]

// var questionPeso = Number (prompt ("Insert new weight: "));
// var newPeso = {'peso':questionPeso};
// pala.push(newPeso);
// console.log(pala);


/*fabio's way
var nuovoPeso = parseInt(prompt( 'inserisci il peso della pala:'));
console.log(nuovoPeso);
pala.peso = nuovoPeso;
console.log(palla); */

// Snack 4_2:
/*
Creare un oggetto che rappresenti un triangolo rettangolo, con le seguenti proprietà: base e altezza.
Calcolare perimetro e area.
(ripassiamo il Teorema di Pitagora ;D ) */

// pitagoras theorem  side3 = a2 + b2 = c2
var triangle ={
    side1: 10,
    side2:4,
    side3: 6
}

var s = (side1 + side2 + side3)/2;
var area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
console.log(s);
console.log(area);
