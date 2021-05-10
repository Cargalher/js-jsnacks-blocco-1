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



/*
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
*/

/*
// snack 6
// Stampa il cubo dei primi N numeri,
// dove N è un numero indicato dall’utente.

var n =parseInt(prompt("Enter Number:"));
console.log("n");
var cube;
 console.log("Enter Number:");
var cube=n*n*n;



for ( var i=0; i<=n; i++);

console.log("n");
document.getElementById("msg").innerHTML= "Cube of " + n + " = "+ cube;

*/


// snack 8 
// Chiedi un numbero di 4 cifre all'utente e calcola la somma di tutte le cifre
// che compongono il numero.

//asking a 4 digit number to the user;
var number = prompt("Insert a 4 digits number");
//var number = 2345;

//checking if the value inserted is a number or not and if it is 4 digit long;
if(isNaN(number)){
    console.log(number + " You did not insert number");
    document.write(number + " You did not insert number");
 } 
 else if(number>9999) {
    console.log(number + " The inserted number has got more than four digits");
    document.write(number + " The inserted number has got more than four digits");
 } 
 else if(number<1000) {
    console.log(number + " The inserted number has got less than four digits");
    document.write(number + " The inserted number has got less than four digits");
 } 
 else{
    console.log(number + " ");
    document.write(number + " ");
    

    //from a 4 digits number to an array that stores each digit as a value in it;
    var numbersArray = Array.from(String(number), Number);
    console.log(numbersArray);
    
    //declaring a variable to sum the numbers in the array;
    var sum = 0;
    //using a for loop to traverse the array and sum up each number in it into the variable sum;  
    for (var i=0; i<numbersArray.length; i++) {
      sum = sum + numbersArray[i]; 
    }
    //printing the sum of the numbers;
    console.log(sum);
    document.write("The sum of the digits of the number you entered is " + sum);
 }
 


//  snack 7

/*var counter = 0;
while(Math.pow(2,counter ) < 1000){
    console.log(Math.pow(2,counter ));
} */