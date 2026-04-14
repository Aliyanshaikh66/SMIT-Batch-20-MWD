// Math Round Method

// 1- Math.round

// let amount = 1000.49;
// let total = Math.round(amount);
// console.log(total);

// 2- Math.ceil

// let amount = 1000.49;
// let total = Math.ceil(amount);
// console.log(total);

// 3- Math.floor

// let amount = 1000.49;
// let total = Math.floor(amount);
// console.log(total);

// var user = "Jawad";
// let num = +"850";
// alert("Total Marks 850")
// var obtainted_marks = prompt("Enter your Obtained Marks");
// let multiplay = obtainted_marks  / num * 100;
// let round = Math.ceil(multiplay);
// console.log(round)
// let divided_value = multiplay / 100;
// console.log(multiplay);

// var num = 1001.49
// var num2 = Math.floor(num);
// console.log(num2);

// let gennumber = Math.random();
// let num2 = gennumber * 100000;
// let round = Math.round(num2)
// console.log("Walcome Jawad Your Roll No is ", + round)


// let number = "200" / "110";
// console.log(number);
// let num1 = "110";
// let num2 = "";
// let sum = parseFloat(num1);
// let sum2 = parseFloat(sum);
// console.log(sum);

// let num = 1001;
// let num1 = 100
// let sum = num + num1;
// let view = sum.toString();
// let newnam = view + 10;
// console.log(newnam);

//Asssignment Grading System

// let totalmarks = 850;
// let obtained_marks = prompt("Enter your marks");
// let calculate = obtained_marks * 100 / totalmarks;
// let persentage = calculate.toFixed(2)
// console.log(persentage);

// var rightNow = new Date();
// var num = rightNow.getFullYear();
// console.log(num);


// var msDiff = 4;
// var dDiff = msDiff / (1000 * 60 * 60 * 24);
// // var flot = Math.floor(dDiff)
// console.log(dDiff);


var msDiff = new Date("June 30, 2035").getTime() - new Date().getTime();
var daysTillDoom = Math.floor(msDiff / (1000 * 60 * 60 * 24));
console.log(daysTillDoom);
