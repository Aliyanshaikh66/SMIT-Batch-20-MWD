// function user() {
//     var name = prompt("What is your name?");
//     var age = prompt("What is your age?");
//     if ( name === "jawad" || age === "20" ) {
//         console.log("Hello " + name + " you are " + age + " years old");
//     }
// }
// user();

// function sum(user) {
//     var user = prompt("Enter your name");
//     console.log(user);
// }
// sum("Hello" + " " + user);

// var name = prompt("What is your name?");

// function user() {
//     // console.log(greet);
// }
// user("Hello" + " " + name);   
// console.log(user);

// var num_1 = +prompt("Enter first number");
// var num_2 = +prompt("Enter second number");
// function sum(num_1, num_2) {
//     var result = num_1 + num_2;
//     console.log(result);
// }
// sum(num_1, num_2);

// var num_2 = +prompt("Enter second number");


// function calorder(merchTot) {
//  var orderTot;
//  if (merchTot >= 100) {
//  orderTot = merchTot;
//  }
//  else if (merchTot < 50.01) {
// orderTot = merchTot + 5;
// }
// else {
//  orderTot = merchTot + 5 + (.03 * (merchTot - 50));
//  }
//  return orderTot;
 
// }

// function calculateOrderTotal(merchTot) {
//     if (merchTot < 0 || isNaN(merchTot)) {
//         return "Invalid input";
//     }

//     if (merchTot >= 100) {
//         return merchTot;
//     } 
//     else if (merchTot <= 50) {
//         return merchTot + 5;
//     } 
//     else {
//         return merchTot + 5 + (0.03 * (merchTot - 50));
//     }
// }

// Function (same as yours)
// function calculateOrderTotal(orderTotal) {
//     if (orderTotal < 0 || isNaN(orderTotal)) {
//         return "Invalid input";
//     }
//     if (orderTotal >= 100) {
//         return orderTotal;
//     } 
//     else if (orderTotal <= 50) {
//         return orderTotal + 5;
//     } 
//     else {
//         return orderTotal + 5 + (0.03 * (orderTotal - 50));
//     }
// }

// // Prompt se input lena
// let input = prompt("Enter your merchandise total:");

// // String ko number mein convert karna
// let orderTotal = parseFloat(input);

// // Function call
// let result = calculateOrderTotal(orderTotal);

// // Console pe result show karna
// console.log("Total Order Amount: " + result);



// function user() {
//     var name = prompt("What is your name?");
// var age = prompt("What is your age?");
//     if ( name === "jawad" || age === "20" ) {
//         console.log("Hello " + name + " you are " + age + " years old");
//     }
// }
// user();

// function time(){
//     let now = new Date();
//     let theHr = now.getHours();
//     let theMin = now.getMinutes();
//     // alert("Current time: "+ theHr + ":" + theMin);
//     let storetime = "Current time: "+ theHr + ":" + theMin;
//     console.log(storetime);
// }
// time();

// console.log();

// let now = new Date();
// console.log(now);


// function greetuser(){
//     alert("Hello World");
// }
// greetuser('Hello Karachi');
// let persentage = prompt("Enter Your Percentage");
// function percentage(){
//     if (persentage > 59 && persentage <= 69){
//         console.log("Passed");
        
//     }else{
//         return "Failed"
//     }
// }
// percentage();

// let calcShip = 500;
// function calcTot(price) {
//  return price + calcShip(price);
//  }

// clear for funtion return concept and with document.get element by id 
// let greet = prompt("enter your name")
// function greetuser(greet){
//     console.log(greet)
// }
// greetuser(greet);
// greet user concept 

// function greetUser(name) {                     // <-- yeh parameter hai
//     console.log("Hello " + name);
// }

// greetUser("Ali"); // <-- yeh argument hai

// function num(){ 
//     let a = 5;
//     let b = 10;

//     if (a < b){
//         return "condition done"
//     }

// }
// let result = num();
// console.log(result);




// return example 
// let age = Number(prompt("Enter your age"));   //argument
// function users(age) {                       // parameter
//     if (age >= 18) {
//        return "Eligible";
//     } else {
//         return "Not Eligible";
//     }
// }
// // Method 01
// let result = users(age);
// console.log(result);

// Method 02
// console.log(users(age));



// console.log(users(age));

// function afnan(name) {   // parameter
//     return "Hello " + name;
// }

// console.log(afnan("Ali")); // argument


// let user = prompt("Enter Your Name");
// console.log(user);




// local function 

// function user(){
//         let name = "Afnan"
//         return "Afnan Here...!"
// }
// let result = user()
// console.log(result);

//user();


// global Function 
// let name = "Afnan"
// console.log(name);
// function user(){
// }
// user();