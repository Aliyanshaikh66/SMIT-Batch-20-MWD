   
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

   

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(0, 5);
alert(citrus);
// Output: ["Orange", "Lemon"] 
// The original array is unchanged: ["Banana", "Orange", "Lemon", "Apple", "Mango"]
