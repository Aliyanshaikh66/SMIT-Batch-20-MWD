// let useramount = prompt("Enter Your Shoping Amount");
// let arr = [useramount];
// let add = arr.map(arr => arr - 20);
// console.log(add)

// let salary = [25000 , 50000, 37500];
// let addamount = parseInt(prompt("Enter Your Discount..!"));
// let arr = salary.map(salary => salary - addamount);

// console.log(`${arr}`);

// import config, {name} from './function.js';
// document.write(name);


// main.js

// Import named items inside curly braces, default item outside
// import config, { PI, add } from './mathUtils.js';

// console.log(add(2, 3)); // 5
// console.log(PI);        // 3.14159
// console.log(config);    // { theme: 'dark' }

// import { add } from './function.js';

// let result = add(2, 3);
// document.write(result);


//Advance Array Method
// .map()

// Example 01

// let numbers = [1,2,3,4,5];
// let result = numbers.map(numbers => numbers * 3);
// console.log(result);

// // Example 02

// let user = ["adnan", "jawad"];
// let date = user.map(user => user.toString());
// console.log(date);

// // Example 03

// let users = ["adnan","alinwaz","jawad"];
// let result = users.map(users => "Mr " + users);
// console.log(result);


// .filter() Method 

// Example 1 

// let user_name = [12, 30, 56, 5];
// let result = user_name.filter(user_name => user_name % 3 !== 0 )
// console.log(result);

// Example 2 
// let age_find = [12, 30, 40, 90];
// let result = age_find.filter(age_find => age_find >= 18)
// console.log(result);

// Example 03 
let data = ["Ali", 20, "Jawad", 30];
let result = data.filter(item => typeof item === "string")
let result1 = data.filter(item => typeof item === "number")
console.log(result,result1);

