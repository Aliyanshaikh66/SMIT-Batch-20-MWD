   
// Arrays

// var fruit = "Apple";
// var fruit2 = "Orange";
// var fruit3 = "Mango";

// var cities = ["Karachi", "Lahore", "Multan"];
// cities.pop();
// cities.unshift("Islamabad", "Peshawar");
// cities.push("Islamabad", "Peshawar"); // .push adds the element at the end of the array
// cities.pop(); // .pop removes the last element of the array
// cities.unshift(122); // .unshift adds the element at the beginning of the array
// cities.shift(); // .shift removes the first element of the array
// alert(cities);
// alert(cities);
// alert("Welcome to " + cities[0]);
// console.log(cities[2]);
// console.log(cities[1]);
// console.log(cities);

// console.log(cities.indexOf("Multan"));

//array methods pop and push

// var users = ["Welcome", "to", "JavaScript"];
// var userName = prompt("Enter your name");
// users.push(userName);
// alert(users);


// var rollno = prompt("Enter your roll number");
// var user = [784978, 784979, 784980, 784981, 784982];

// if (rollno == user[0]) {
//     alert("Welcome to JavaScript");
// } else if (rollno == user[1]) {
//     alert("Welcome to HTML");
// } else if (rollno == user[2]    ) {
//     alert("Welcome to CSS");
// }       else if (rollno == user[3]  ) {
//     alert("Welcome to React");
// }    else if (rollno == user[4]) {   
//     alert("Welcome to Jawad");
// } else {
//     alert("Your roll number is not found");
// }

// var animals = ["Dog", "Cat", "Cow", "Sheep", "Goat"];

// // first condition
// var animals = ["Dog", "Cat", "Horse", "Donkey", "Cow", "Sheep", "Goat"];  

// animals.splice(2, 2, "Horse", "Donkey"); // .splice(starting index, number of elements to remove, element to add)
// alert(animals);

// alert(fullName.join(" ")); // .join() method joins the elements of an array into a string and returns the string

// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// var fullName = [firstName, lastName];
// fullName.splice(1, 0, prompt("Enter your Middle Name")); // .splice(starting index, number of elements to remove, element to add)
// alert(fullName);
// var users = ["Muhammad ", "Ali"];
// users.splice(1, 0, "Jawad"); // .splice(starting index, number of elements to remove, element to add)
// console.log(fullName.length);


// Array Methods (Splice)

// var users = ["Basheer", "Faisal", "Hammad", "Nasir"];
// console.log(users.length);
// users.splice(1, 0, "Yasin");
// alert(users);
// console.log(users.length);

// Array Methods (Slice)

// var users = ["Basheer", "Faisal", "Hammad", "Nasir"];
// var newUsers = users.slice(0,4
//  ); // .slice(starting index, ending index) - it returns a new array containing the elements from the starting index to the ending index (excluding the ending index)

// alert(newUsers);
// console.log(users.length);
// console.log(users.length);

   

// array slice method 
// var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// var citrus = fruits.slice(0, 5);
// alert(citrus);
// Output: ["Orange", "Lemon"] 
// The original array is unchanged: ["Banana", "Orange", "Lemon", "Apple", "Mango"]


// array splice method
// var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// fruits.splice(2, 0, "Lemon", "Kiwi");
// Output: ["Banana", "Orange", "Lemon", "Kiwi", "Lemon", "Apple", "Mango"] 
// The original array is modified: ["Banana", "Orange", "Lemon", "Kiwi", "Lemon", "Apple", "Mango"]

// var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// fruits.splice(3,0,"kiwi");
// alert(fruits);

// Arrays Examples

// Array Methods (Push)
// add in last of the array

// var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// fruits.push("Lemon");
// console.log(fruits);

// Array Methods (pop)

// var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// fruits.pop();
// console.log(fruits);

// Array Methods (unshift)
// add element in start the array

// var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// fruits.unshift("Lemon");
// console.log(fruits);

// Array Methods (shift)
// remove element from start the array  
// var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// fruits.shift();
// console.log(fruits);

// array methods (slice)
// var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// var userInput = prompt("Enter the fruit you want to add"); 
// fruits.push(userInput);
// var citrus = fruits.slice(1, 6);
// console.log(citrus);

// array methods (splice)
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// var userInput = prompt("Enter the fruit you want to add");
// fruits.splice(2, 0, userInput);
// // console.log(fruits);
// fruits.splice(2, 0, );
// console.log(fruits);

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// var userInput = prompt("Enter the fruit you want to add");
// fruits.push(userInput);
// var citrus = fruits.slice(1, 6);
// console.log(citrus []);

// array methods (splice)
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// var userInput = prompt("Enter the fruit you want to add");
// fruits.splice(2, 0, userInput);
// // console.log(fruits);
// fruits.splice(2, 0, );
// console.log(fruits);

// var fruit = prompt("Enter the fruit you want to add");
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.push(fruit);
// console.log(fruits);

// var fruit = prompt("Enter the fruit you want to add");
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.pop();
// console.log(fruits);

// push and pop

// slice and splice

// var userInput = prompt("Enter the fruit you want to add");
// var fruits = [
// nge", "Apple", "Mango"];
// var citrus = fruits.slice(0, 3);
// console.log(citrus);

// What is Vairable?

// A variable is a container for storing data values. In JavaScript, you can declare a variable using the var, let, or const keyword. Variables can hold different types of data, such as numbers, strings, arrays, objects, and more. You can assign a value to a variable and then use that variable to access or manipulate the data stored in it.

// var _name = "John"; // string variable
// var age = 30; // number variable

// console.log("Adnan"); // Output: John
 
// var num1 = +"10";
// var num2 = +"20";
// var sum = num1 + num2;
// console.log(sum); // Output: 30

// var cleanestCities = ["Karachi", "Lahore", "Multan", "Islamabad", "Peshawar"];

// var cityToCheck = prompt("Enter the city you want to check");

// for (var i = 0; i <= 4; i++) {
//    if (cityToCheck === cleanestCities[i]) {
//     alert("It's one of the cleanest cities");
//     break;
//    } 
//    else if (cityToCheck === cleanestCities[1]) {
//     alert("It's one of the cleanest cities");
//     break;
//    } else if (cityToCheck === cleanestCities[2]) {
//     alert("It's one of the cleanest cities");
//     break;
//    } else if (cityToCheck === cleanestCities[3]) {
//     alert("It's one of the cleanest cities");
//     break;
//    } else if (cityToCheck === cleanestCities[4]) {
//     alert("It's one of the cleanest cities");
//     break;
//    }
//     else if (cityToCheck === "Faisalabad") {
//     alert("It's one of the cleanest cities");
//     break;
//    }
//    else {
//     alert("It's not one of the cleanest cities");
//     break;
// }
// }


// var cleanestCities = ["Karachi", "Lahore", "Multan", "Islamabad", "Peshawar"];
// var cityToCheck = prompt("Enter the city you want to check");
// var matchFound = false;

// for (var i = 0; i < cleanestCities; i++) {
//     if (cityToCheck === cleanestCities[i]) {
//         matchFound = true;
//         alert("City found in the list!");
//         break;
//     }
// }

// if (!matchFound) {
//     alert("City not found.");
// }

// var fruits = ["Apple", "Banana", "Mango"];
// var userFruit = prompt("Enter a fruit name");

// for (var i = 0; i < fruits.length; i++) {
//     if (userFruit === fruits[i]) {
//         found = true;
//         break;
//     }
// }
//  var found = false;

// if (found) {
//     alert("Fruit mil gaya!");
//     } 
// else {
//     alert("Fruit nahi mila");
// }

// push and pop

// var cars = ["Toyota", "Honda", "BMW", "Mercedes"];
// let userCar = prompt("Enter your car brand");
// cars.pop();
// cars.push(userCar);
// console.log(cars);

// shift and unshift

// var cars = ["Toyota", "Honda", "BMW", "Mercedes"];
// let userCar = prompt("Enter your car brand");
// cars.shift();
// cars.unshift(userCar);
// // cars.push(userCar);
// console.log(cars);

// slice

// Slice apne starting chor ker baki late ke element copy and count kerta hn or new array return kerta hn
// or original array ko change nahi kerta

// let cars = ["Toyota", "Honda", "BMW", "Mercedes", "Audi", "Lexus", "Nissan"];
// let newCars = cars.slice(1, 5);
// console.log(newCars);


// console.log(cars.indexOf("Honda")); // Output: 0
// console.log(cars.indexOf("Honda")); // Output: 1
// console.log(cars.indexOf("BMW")); // Output: 2
// console.log(cars.indexOf("Mercedes")); // Output: 3


// Chapter No:15 Arrays

// Array push and Pop Method 
// let cars = ["Toyota", "Honda", "BMW", "Mercedes"];
// let userCar = prompt("Enter your car brand");
// cars.push(userCar);
// console.log(cars);
// cars.pop();
// console.log(cars);


// Shift and Unshift Method

// let fruits = ["Apple", "Banana", "Mango"];
// let userFruit = prompt("Enter a fruit name");
// fruits.unshift(userFruit);
// console.log(fruits);
// fruits.shift();
// console.log(fruits);

// slice and splice Method

//slice method
// value 1 = kud ko chor kar baki se start counting hoti hn 
// value 2 = last element tak value return kerta hn jo b number ho 

// let fruits = ["Apple", "Banana", "Mango", "Orange", "Lemon", "Pineapple"];
// let findFruits = fruits.slice(0, 6); //legth 6
// console.log(findFruits);


// console.log(fruits);
// fruits.slice(2, 5);
// console.log(fruits);

//splice method
// value 1 = own counting start 
// value 2 = number of element to remove

// let fruits = ["Apple", "Banana", "Mango", "Orange", "Lemon", "Pineapple"];
// fruits.splice(1, 2, "grapes", "kiwi"); // starting index, number of elements to remove, element to add
// console.log(fruits[3], fruits[4]);



// let users = ["Basheer", "Faisal", "Hammad", "Nasir","hanif", "jawad"];
// let newUsers = users.slice(1, 4); // starting index, ending index (excluding the ending index)
// console.log(newUsers);

// let users = ["Basheer", "Faisal", "Hammad", "Nasir","hanif", "jawad"];
// users.splice(2, 0, "Yasin"); // starting index, number of elements to remove, element to add
// console.log(users);



