// let users = ["Aliyan", "Asif", "Ahad", "Basheer", "Hamid"];
// let newUsers = users.slice(1, 3);
// console.log(newUsers);

// !important
// if else
// operators
// arrays
// string and number methods


// var text = "World War II was a global conflict that lasted from 1939 to 1945..!";
// for (var i = 0; i < text.length; i++) {
//     if (text.slice(i,i + 15) === "global conflict") {
//         text = text.slice(0, i) + "Basheer sabir jawad" + text.slice(i + 15);
//         break;
//     }
// }
// console.log(text);

// var text = "World War II was a global conflict that lasted from 1939 to 1945..!";

// for (var i = 0; i < text.length; i++) {
//     if (text.slice(i, i + 6) === "global") {
//         text = text.slice(0, i) + "Luqman" + text.slice(i + 6);
//     }
// }

// console.log(text);


// var text = "World War II was a global conflict that lasted from 1939 to 1945.";

// for (var i = 0; i < text.length; i++) {
//     if (text.slice(i, i + 68) === "global conflict that lasted from 1939 to 1945.") {
//         text = text.slice(0, i) + "Basheer" + text.slice(i + 68);
//         break; // stop after replacing
//     }
// }
// console.log(text);

// let firstName = "Aliyan ";
// let firstChar = firstName.charAt(0)
// console.log(firstChar);

// let firstName = "Aliyan";
// let firstchar = firstName.charAt(4) straight count
// let firstChar = firstName.charAt(firstName.length - 3); reverse count 
// console.log(firstChar);


// let abc = "World War II was a global conflict that lasted from 1939 to 1945.";
// // let user = prompt("enter new name")
// let xyz = abc.replace("1939 to 1945", "Human");
// console.log(xyz);


// let amount = 1000.49;
// let amount1 = 1000.50;
// let total = Math.round(amount);
// let total1 = Math.round(amount1);
// console.log(total);
// console.log(total1);


// let amount = 1000.01;
// let total = Math.ceil(amount);
// console.log(total);

// let amount = 75.10;
// let total = Math.ceil(amount);
// console.log(total);


// let number = Math.random();
// let mutli = number * 1000;
// let fixed = mutli.toFixed(2)
// console.log(fixed);

// Chater No 28 Converting strings to integers and decimals


// let age = Number("12");
// console.log(age);

// let age = parseInt("12");
// console.log(age);

// let age = prompt("Enter your age..!");
// console.log(Number(age));

// let price = 489;
// console.log(parseFloat(price));

// let number = 12345678;
// console.log(number.toString());


let number = 123.8431;
console.log(number.toFixed(2));
