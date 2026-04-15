
// Table Assignement: 13. while and do while loops

// 1. Create a while loop that prints the numbers from 0 to 10.
// 2. Create a do-while loop that prints the numbers from 0 to 5.

// for (var i = 0; i <= 10; i++) {
//   console.log(i);
// }

// while loop:
// Pehle condition check hoti hai
// Agar condition false ho to loop ek baar bhi nahi chalega
var username = prompt("Please enter your username:");
while (username === "admin") {
    alert("Welcome " + username);
    break; // loop ko rokne ke liye
    // username = prompt("Please enter your username:");
}

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
// do {
//     alert("Welcome " + user);
//     break; // loop ko rokne ke liye
// } while (user !== "admin");
