// function number(num1, num2){
//     let sum = num1 + num2;
//     console.log(sum);
// }
// number(10, 20); 


// let firstname = prompt("Enter your name:"); //user input for name
// function greet(name = "user") {  //parameter with default value
//   return `Hello, ${name}!`;
//   let firstname = name || "user";
// }

// console.log(greet(firstname || "user")); // "Hello, Alice!" (overrides default)
// console.log(greet()); // "Hello, User!" (uses default)


// function redcolor(){
//     document.body.style.backgroundColor = "red";
// }

// function greencolor(){
//     document.body.style.backgroundColor = "green";
// }

// function bluecolor(){
//     document.body.style.backgroundColor = "blue";
// }
// function hazelcolor(){
//     document.body.style.backgroundColor = "grey";
// }

// function changetext(){
//     let details = prompt("Enter Your Name");
//     document.write(details);
// // document.getElementById("para").innerHTML = "Welcome Adnan";
// }

// function myname()



// let cars = ["honada", "sonata", "bmw"];
// cars.forEach((car) => {
//     console.log(car);    
// })

let arr1 = ["Apple", "Banana"];
let arr2 = ["Apple", "mango"];
console.log(arr1);
console.log(...arr1); //spread opertor

let spreadoperator = [...arr1,...arr2];
spreadoperator.forEach((sum) => {
    console.log(sum);

});

let person = ["adnan","arif","afnan"];
person.forEach((person, index) => {
  console.log(`${index}: ${person} : ${length}`);
});

