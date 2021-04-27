// L’utente inserisce due parole in successione, con due prompt.

// var word_1 = prompt ('type a word');
// var word_2= prompt ('type another word');

// console.log(word_1, word_2);

// // Il software stampa prima la parola più corta, poi la parola più lunga.
// if ()



// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti. (edited) 
// var result=[];

// for (var i=0; i<10;i++){
//     result.push(prompt ("Enter a number"));
// }
// console.log(result);










// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby
// chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa
var guestList =['Carmen', 'Federico', 'Leonardo', 'Evon', 'Nova'];
var yourName = prompt ("What is your name?")
console.log(yourName);
// alert( "What is your email address");

if (guestList.includes(yourName) === true ){
    console.log("Welcome to the party!");
    alert("Welcome to the party!");
}else{
    console.log("Sorry, you are not allowed to enjoy this party.");
    alert("Sorry, you are not allowed to enjoy this party.");
}


// trying to do it with the for cicle
// var guest_list =['Carmen', 'Federico', 'Leonardo', 'Evon', 'Nova'];
// var invited = false;

// for (var i=0; i<guest_list.length; i++){
//     var name = guest_list [i];
//     if (name == guest_name){
//         invited=true;
//     }
// }
