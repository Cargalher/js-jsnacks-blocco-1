// Snack 4_1a:
/*Creare un oggetto palla che abbia le seguenti proprietà.
    Nome = palla
    Peso = 10*/
var palla = {
    nome : 'pala',
    peso : 10,
    
} 
console.log(pala);

// Snack 4_1b:
/*Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla.*/
var pala = [
    {
        nome : 'pala',
        peso : 10,
        
    } 
]
palla.push({
    peso:parseInt(prompt ("change the balls weight: ")),
   
})
console.log(palla);