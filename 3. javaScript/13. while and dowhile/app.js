
// Table Assignement: 13. while and do while loops

// 1. Create a while loop that prints the numbers from 0 to 10.
// 2. Create a do-while loop that prints the numbers from 0 to 5.

// for (var i = 0; i <= 10; i++) {
//   console.log(i);
// }


// while loop:
// Pehle condition check hoti hai
// Agar condition false ho to loop ek baar bhi nahi chalega
// var username = prompt("Please enter your username:");
// while (username === "admin") {
//     alert("Welcome " + username);
//     break; // loop ko rokne ke liye
//     // username = prompt("Please enter your username:");
// }

//  var i = 0;
//  while (i <= 3) {
//  alert(i);
//  i++;
// }


// do while loop: 
// Pehle code chalta hai
// Baad mein condition check hoti hai
// Is liye kam az kam 1 baar zaroor chalega

//  var i = 0;
//  do {
//  alert(i);
//  i++;
// } while (i <= 3);

// do while loop ka example:
// var user = prompt("Please enter your username:");
// var age = +prompt("Please enter your age:");
// do {
//     alert("Welcome " + user + ", your age is " + age);
//     break; // loop ko rokne ke liye
// } while (user === "admin" && age >= 18);


// while (user !== "admin");


// var username = prompt("Please enter your username:");
// var age = +prompt("Please enter your age:");
// while (username === "admin" && age >= 18) {
//     alert("Welcome " + username + ", your age is " + age);
//     break; // loop ko rokne ke liye
//     // username = prompt("Please enter your username:");
// }
 
// first time contion check then run
//  var i = 0;
//  while (i <= 3) {
//  console.log(i);
//  i++;
//  }

//  let age = prompt("Enter your age");
//  do{
//     alert(age);
//     break;
//  }
//  while(age > 18 && age == 18)


//  var i = 0;
//  do {
//  alert(i);
//  i++;
//  } 
//  while (i <= 3);

// while loop example
// phele conditon check kare ga per chale ga  
let age = prompt();
while (age => 18) { //true ya false
  console.log("eligible");
//   break;
  age++;
}console.log("not eligible");


// do while Loop
// let i = 10;
// do {
//   console.log(i); //true
//   i--;
// } 
// while (21 < 20); //false