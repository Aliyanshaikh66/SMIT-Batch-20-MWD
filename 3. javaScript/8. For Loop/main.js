// for loop Simple Example
// var users = ["Aliyan", "Asif", "Ahad"];
// for (var i = 0; i < users.length; i++) {
//     console.log(users[i]);
// } 

// var i = 0;
// for (var i = 1; i <= 10; i++) {
//     console.log(i);
//   // some statements
        // }

// for loop with break statement
// var users = ["Aliyan", "Asif", "Ahad", "Basheer", "Hamid"];
// for (var i = 0; i = users.length; i++) {
//         if (users[i] === "Hammad") {
//         alert("Hammad is found");
//         }
//         else{
//             alert("Hammad is not found");
//             break;
//         }
        
        // else if (users[i] === "Asif") {
        // alert("Asif is found");
        //     break;


// for loop with index
// var users = ["Aliyan", "Asif", "Ahad"];
// for (var i = 0; i < users.length; i++) {
//     console.log(i + ": " + users[i]);
// }

// for loop with reverse index
// var users = ["Aliyan", "Asif", "Ahad"];
// for (var i = users.length - 1; i >= 0; i--) {
//     console.log(i + ": " + users[i]);
// }
   
        // else if (users[i] === "Hamid") {
        // alert("Hamid is found");
        //     break;
        // }
        // else if (users[i] === "Ahad") {
        // alert("Ahad is found");
        // break;
        // }     
       
    // console.log(users[i]);


// for loop with continue statement
// var users = ["Aliyan", "Asif", "Ahad"];
// for (var i = 0; i < users.length; i++) {
//     if (users[i] === "Asif") {
//         continue;
//     }
//     console.log(users[i]);
// }

// var cityToCheck = prompt("Enter a city name");
// var cleanestCities = ["Karachi", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];
//  var matchFound = "no";
//  for (var i = 0; i <= 5; i++) {
//  if (cityToCheck === cleanestCities[i]) {
//  matchFound! = "yes";
//  alert("It's one of the cleanest cities");
//  }
//  }
//  if (matchFound === "no") {
//  alert("It's not on the list");
//  }
// var i;

// for (i = 1; i <= 5; i++) {
//         console.log(i);    
// }

// infinite loop
// for (let i = 1; ; i++) {
//     console.log(i);

//     if (i === 500) {
//         console.log("Loop stopped at 500"); 
//         break;// yahan loop ruk jayega
//     }
// }
// let i = 5; 
// for (i; i < 5;){
//         console.log(i);
//         // break;
// }

// for (let i = 1; i <= 5; i++) {
//     console.log(i);     
// }

// let cars = ["BMW", "Volvo", "Saab", "Ford"];
// let usercar = prompt("Enter your car name");
// for (let i = 0; i < cars.length; i++) {
//         if (cars[i] = usercar) {
//             console.log("Your car is in the list");
//             break;
//         }else{
//                 console.log("Your car is not in the list");    
//         }
//     }

// Nested for loop
// let firstName = ["aliyan", "Asif", "Ahad"];
// let lastName = ["khan", "Ali", "Hassan"];
// let username = prompt("Enter your first name");
// let username1 = username.toLowerCase();
// let fathername = prompt("Enter your last name");
// let fathername1 = fathername.toLowerCase();
// for (let i = 0; i < firstName.length; i++) {
//     for (let j = 0; j < lastName.length; j++) {
//         if (firstName[i] === username1  && lastName[j] === fathername1) {
//             console.log(true);
//             break;
//         }
//         else{
//             console.log(false);
//         }
//     }
// }

// let firstName = ["Aliyan", "Asif", "Ahad"];
// let checkcase1 = checkcase.toLowerCase();
// for (let i = 0; i < firstName.length; i++) {
//     if (firstName[i] === checkcase) {
//         console.log("Your name is in the list");
//         break;
//     } else {    
//         console.log("Your name is not in the list");
//     }
// }

//   var cityToCheck = prompt("Enter your city");
//   cityToCheck = cityToCheck.toUpperCase();
//   var cleanestCities = ["cheyenne", "santa fe", "tucson", "great falls", "honolulu"];
//   for (var i = 0; i <= 4; i++) {
//     if (cityToCheck === cleanestCities[i]) {
//     alert("It's one of the cleanest cities");
//     break;
//    } else {
//     alert("It's not on the list");
//     break;
//    }     

//  }
// let user = prompt("Enter Your Name");
// let form = user.charAt();
// console.log(form);

//     if (user === "Rashid"){
//         console.log(changecase);
//     } 
//     else {
//     console.log("User is false");
//    }
//  } 
// }


// if (username === check){
//         console.log("true");
// }
// else{
//         console.log("False");
        
// }

// nested loop worked 
// let height = +prompt("Enter Your height")
// let age = +prompt("Enter Your age");
// for (age = 0; age <= 18; age++){
//         for (height = 0; height <= 6; height++){
//                 console.log(height);    
//         }
//         console.log(age);
// }



// nested loop first work in inner loop then outer loop

// let height = +prompt("Enter Your height");
// let age = +prompt("Enter Your age");
// for (let i = age; i <= 18; i++) {
//     for (let j = height; j <= 6; j++) {
//         console.log(j);    
//     }
//     console.log(i);
// }


