// snack2
// L’utente inserisce due parole in successione, con due prompt.

// var word_1 = prompt ('type a word');
// var word_2= prompt ('type another word');

// console.log(word_1, word_2);

// // Il software stampa prima la parola più corta, poi la parola più lunga.
// if ()


// snack3
// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti. (edited) 
// var result=[];

// for (var i=0; i<10;i++){
//     result.push(prompt ("Enter a number"));
// }
// console.log(result);








// snack4

// // In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby
// // chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa
// var guestList =['Carmen', 'Federico', 'Leonardo', 'Evon', 'Nova'];
// var yourName = prompt ("What is your name?")
// console.log(yourName);
// // alert( "What is your email address");

// if (guestList.includes(yourName) === true ){
//     console.log("Welcome to the party!");
//     alert("Welcome to the party!");
// }else{
//     console.log("Sorry, you are not allowed to enjoy this party.");
//     alert("Sorry, you are not allowed to enjoy this party.");
// }


// trying to do it with the for cicle

// var guest_list =['Carmen', 'Federico', 'Leonardo', 'Evon', 'Nova'];
// var invited = false;

// for (var i=0; i<guest_list.length; i++){
//     var nameGuest = guest_list [i];
//     if (nameGuest == guest_name){
//         invited=true;
//     }
// }
// var message;
// if(invited){
//     message= "welcome to the party!";
// }else{
//     message= "sorry you havent been invited to this party";
// }
// document.getElementById("msg").innerHTML= message;




// snack5
// Crea un array vuoto.Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array
var numbersOk = [];
var answer = null;

for (var i=1; i<=6; i++) {
    var answer = prompt("Insert a number!");
    
    if(answer % 2 != 0) {
        numbersOk.push(answer);
        console.log(numbersOk);
    } else if (answer === 0 || answer % 2 === 0) {
        console.log("It is not an Odd number");
    }
}
