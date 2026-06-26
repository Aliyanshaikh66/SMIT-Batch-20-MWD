// function testfunction(){
//     a = 10;
//     b = 5;
//     let sum = a + b;
//     console.log(sum);
// }
// testfunction();

// main function
// function mtfunction(){
//      a = 10;
//      function addfunction(){
//         let b = 5;
//         let sum = a + b;
//         console.log(sum);
//      }
//      addfunction();

// }    
// mtfunction();

// Ternary operator

// let age = prompt("enter your age");
// let message = (age < 18) ? "You are an adult" : "You are a minor";
// console.log(message);


// let age = (prompt("Enter your age"));

// let message = (age >= 1 && age <= 10) ? "You are a Child" : (age >= 11 && age <= 28) ? "You are an Adult" : (age >= 29) ? "You are an Old Man" :
//     "Invalid Age";
// console.log(message);



// let age = prompt("enter your age");
// if (age >= 18){
//     alert("You are an adult");
// } else if (age < 18){
//     alert("You are a minor");
// } else {
//     alert("invalid age");
// }



// optional chaining

//objects
// const user = {
//   name: "Alice",
//   course: "JavaScript",
//   campus: "Malir",
//   address: {
//         addressline: "123 Main St",
//         city: "Anytown",
//         country: "USA"
//     }
// };
// console.log(user.address?.addressline);
// console.log(user.address?.city); // Output: "Anytown"
// console.log(user.contact?.email); // Output: undefined (no error thrown)

// let user = {
//     name: "Adnan",
//     rollno: 123,
//     course: "Web Development",
//     campus: "Malir",
// }

// let {name,rollno,course,campus} = user; 
// console.log(name,course,campus); // Directly accessing the properties of the user object using destructuring assignment
// console.log(user.name,user.rollno,user.course,user.campus); 

    

// let user = {
//     name: "Adnan",
//     rollno: 123,
//     course: "Web Development",
//     campus: "Malir",
// }
// let {
//     name: username,
//     rollno: userrollno,
//     course: usercourse,
//     campus: usercampus
// } = user;
// console.log(username,userrollno,usercourse,usercampus);


// let colour = ["red", "green", "blue", "yellow"];
// let [first, second, third, fourth] = colour;
// console.log(first, second, third, fourth); // Output: "red", "green", "blue", undefined


let colour = {
    colour1: "red",
    colour2: "green",
    colour3: "blue",
    colour4: "pink",
}
let { colour2, colour1, colour3, colour4,} = colour;
console.log(colour2, colour4, colour3, colour1); 



// console.log(colour1, colour2, colour3, colour4,); 
// console.log(colour.colour4.colour5,colour.colour4.colour6); // Output: "yellow", "orange";




