// let user1 = ["mohamed", "sayed", "hassan"];
// let user2 = ["ahmed"];
// let user3 = ["ali"];
// let users = [...user1, ...user2, ...user3];
// console.log(users);

// spread opeators
// let userfruitname = prompt("enter your fruit name");
// let fruits = ["apple", "banana", "orange"];
// let fruitsname = [userfruitname, ...fruits,    'grape'];
// console.log(fruitsname);

// variables (let, const, var)
// closure
// => arrow function
// ... spread operators
// `` template literals


let mobiles = { 
    name: "samsung S26",
    price: 5000,
};
let submobiles = {...mobiles, price: mobiles.price + "$" };
console.log(submobiles);
// document.write(mobiles);