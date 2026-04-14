// Local vs Global Variables
// In JavaScript, variables can be classified into two main types based on their scope: local variables and global variables.

// local Veriables:

// function user() {
//     var name = prompt("What is your name?");
// var age = prompt("What is your age?");
//     if ( name === "jawad" || age === "20" ) {
//         console.log("Hello " + name + " you are " + age + " years old");
//     }
// }
// user();


// Global Variables:

//     var name = prompt("What is your name?");
//     var age = prompt("What is your age?");
// function user() {
//     if ( name === "jawad" || age === "20" ) {
//         console.log("Hello " + name + " you are " + age + " years old");
//     }
// }
// user();
// console.log(name, age);


// switch case Statements

var Months = Number(prompt("Enter a month number (1-12):"));
switch (Months) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    // ... more cases
    default:
        console.log("Invalid month");
}
