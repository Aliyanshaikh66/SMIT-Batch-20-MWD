// let pass = prompt("Enter your password");
// var password = +"12345";

// const { createRef } = require("react");

// if (pass === password) {
//     console.log("Login Sucessfull");
// } else {
//     console.log("Login Failed");
// }   

// function passwordCheck(event) {
//     let pass = +prompt("Enter your password");
//     let password = 12345;
//     if (pass === password ) {
//         alert("Login Sucessfull");
//     } 
//     else {
//         alert("Login Failed");
//         event.preventDefault();

//     }
// }

// function handleClick(event) {
//     let num1 = +prompt("Enter first number");
//     let num2 = +prompt("Enter second number");
//     let result; num1 + num2;
//     if (event.target.value === "Addition") {
//         result = num1 + num2;
//     } else if (event.target.value === "Subtraction") {
//         result = num1 - num2;
//     } else if (event.target.value === "Multiplication") {
//         result = num1 * num2;
//     } else if (event.target.value === "Division") {
//         result = num1 / num2;   
//     }
//     alert("Result: " + result);
// }

  // function handleClick(event) {
  //   let num1 = parseFloat(document.getElementById("num1").value);
  //   let num2 = parseFloat(document.getElementById("num2").value);
  //   let operation = event.target.value;
  //   let result;

  //   if (isNaN(num1) || isNaN(num2)) {
  //     result = "Please enter valid numbers";
  //   } else {
  //     switch(operation) {
  //       case "Addition":
  //         result = num1 + num2;
  //         break;
  //       case "Subtraction":
  //         result = num1 - num2;
  //         break;
  //       case "Multiplication":
  //         result = num1 * num2;
  //         break;
  //       case "Division":
  //         result = num2 !== 0 ? (num1 / num2) : "Cannot divide by zero";
  //         break;
  //     }
  //   }

  //   document.getElementById("result").innerText = "Result: " + result;
  // }

  // let user = document.getElementById("Para").innerHTML = "Hello Aliyan";
  // let heading = document.getElementById("Para").innerHTML =  "<i>Hello world</i>";
//   function calculate(event) {
//     let num1 = parseFloat(document.getElementById("num1").innerHTML);
//     let num2 = parseFloat(document.getElementById("num2").innerHTML);
//     let operation = document.getElementById("operation").innerHTML;
//     let result;

//     if (isNaN(num1) || isNaN(num2)) {
//         result = "Please enter valid numbers";
//     } else {
//         switch(operation) {
//             case "+":
//                 result = num1 + num2;
//                 break;
//         }
//     }

//     document.getElementById("result").innerHTML = "Result: " + result;
// }
        

// let fruits = ["Apple", "Banana", "Cherry"];
// fruits.splice(3, 0, "orange")
// console.log(fruits);


// let num = 4.50
// console.log(Math.round(num));


// function checkAddress(email) {
//     let user = document.getElementById('email').value;
//     if (user.includes("@") && user.includes(".")) {
//         alert("your Email: " + user);
//     } else {
//         alert("Please enter a valid email address");
//     }
// }
// checkAddress(email)

// function fillCity(){
//     let enterzip = document.getElementById("zip").value;
//     switch(enterzip) {
//         case "75000":
//             cityName = "Karachi";
//             break;
//         case "75001":
//             cityName = "Lahore";
//             break;    
//             // document.getElementById("city").value = "New York";
//         // Add more cases for other zip codes
//     }
//     document.getElementById("city").value = cityName;

// }


// Assignment 1: Create a simple login form that prompts the user for a username and password. Validate the input and display an appropriate message based on whether the login is successful or not.

// Assignment 2: Create a calculator that takes two numbers and an operator (+, -, *, /) as input from the user and displays the result of the operation.

// password creater
// Assignment 3: Create a form that get user country,city and state information base on zip code with dropdown.


// chapter No : 45 (Event Links):

// function submit(){
//     let user = prompt("enter your name..!"); //local
//     console.log(user);
// }


// assignment @ is requried condition 
// function checkAddress(fieldId) {
//  if (document.getElementById(fieldId).value === "@") {
//  alert("Email address required.");
//  }
//  }


// chapter 50 

// function fillCity() {
//  var cityName;
//  var zipEntered = document.getElementById("zip").value;
//  switch (zipEntered) {
//  case "74500" :
//  cityName = "Malir";
//  break;
//  case "74501" :
//  cityName = "Hydrabad";
//  break;
//  case "75400" :
//  cityName = "karachi";
//  }
 
//  document.getElementById("city").value = cityName;
//  }


// function expandLoris() {
//   var expandedParagraph = "Slow lorises are a group of several species of strepsirrhine primates which make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time. Slow lorises have a toxic bite, a rare trait among mammals.";
  
//   document.getElementById("slowLoris").innerHTML = expandedParagraph;
// }

// function travel(){
//   var dis = "I am going to at Karachi..!"
//   var image = '<br><img src="./car_image 2.jpg" width="300">';
//   document.getElementById("enjoy"). innerHTML = dis +image;
// }

// let link = window.location.href="https://www.openai.com"
function changeurl(){
  // _window.location.href="https://www.nvidia.com"
  window.open('https://www.google.com')
}