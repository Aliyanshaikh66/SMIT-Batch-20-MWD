//variables:- Chapter 2

// var name = "Aliyan"; //string
// var age = 22; //number
// var isStudent = true; //boolean

//Method 1
// alert("Karachi"); // alert as a string

// //Method 2
// var cities = "Karachi "; //string
// alert(cities); // alert as a variable

// //Method 3
// var cities = "Karachi "; //string
// alert("The City of Light is " + cities); // alert as a variable + String 

// //Method 4
// // Two variables addition and show them in alert box
// var cities = "Karachi "; //string
// var discription = "The City of Light";//string
// alert(cities +  discription );

//variable for Number

// var firstname = "Aliyan";
// var num = 12345678;
// alert(firstname + " " + num);

// var user = prompt("Enter your name");
// var rollno = prompt("Enter your roll number");
// alert("welcome " + user + " Your roll Number is " + rollno);

// var firstname = "Hello";
// var lastname = "Aliyan";
// var user = (firstname + " " + lastname);
// alert(user);


//Basic Programming Concepts / Symbols:
//
// brakets paranthisis ()
// curly brakets {}
// square brakets []
// semicolon ;
// colon :
// comma ,
// dot .
// quotes '' ""
// equal sign =
// is equal to sign ==
// is not equal to sign !=
// underscoure _
// plus sign +
// minus sign -
// multiplication sign *
// percent sign %
// division sign /
// forwad slash //
// back slash \
// exclamation mark ! 
// greater than sign >
// less than sign <
// greater than or equal to sign >=
// less than or equal to sign <=
// vertical bar |

// var Number1 = "10";
// var Number2 = Number1 + 2;
// // var sum = Number1 + Number2;
// alert(Number2);     

// illegal variable names
// var 12345 = "100"; //not with number
// var num-String = "100"; //not use hyphen
// var 1numString = "100"; //not start with number
// var num String = "100"; //not use space
// var alert = "hello"; // not use reserved keywords


// legal variable names
// var num123 = "100"; 
// var num_String = "100"; 
// var _numString = "100"; 
// var numString1 = "hello";
// var num1String = "hello";

//Math Expressions familiar operators Chapter 5

// var num = 2;
// var num2 = 3 + 5;

// //Method 1
// var num = +prompt("Enter first number");
// var num2 = +prompt("Enter second number");
// alert(num + num2);

// //Method 2
// var num = prompt("Enter first number");
// var num2 = prompt("Enter second number");
// alert(parseInt(num) + parseInt(num2));
// //Method 3
// var num = prompt("Enter first number");
// var num2 = prompt("Enter second number");

// num = Number(num);
// num2 = Number(num2);

// alert(num + num2);



// subtraction
// var num = +prompt("Enter first number");
// var num2 = +prompt("Enter second number");
// alert(num - num2);


// multiplication
// var num = +prompt("Enter first number");
// var num2 = +prompt("Enter second number");
// alert(num * num2);   

// division
// var num = +prompt("Enter first number");
// var num2 = +prompt("Enter second number");
// alert(num / num2);

// modulus
// var num = +prompt("Enter first number");
// var num2 = +prompt("Enter second number");
// alert(num % num2);

// var a = 10;
// var b = 5;
// var c = a + b * 2;
// alert(c);        

// var a = 10;
// var b = 5;
// var c = (a + b) * 2;
// alert(c);    

// var a = 10;
// var b = 5;
// var c = a - b + 2;
// alert(c);
// var a = 10;
// var b = 5;
// var c = (a - b) + 2;
// alert(c);    
// var a = 10;
// var b = 5;
// var c = a - (b + 2);
// alert(c);

// var num = +"10";
// var num2 = +"2";
// var sum = num + num2;
// alert(num + num2);



// var user = "Aliyan";
// var age1 = +"22"; //Number
// var age2 = 2; //Number
// var age = Number(age1) + Number(age2);
// alert(age);

// let user = "Hello"; // block scope
// var user2 = "Aliyan"; // global scope

//addition  
//subtraction
//multiplication
//division
//modulus reminder value

// var num = 11;
// var num2 = num % 4;
// alert(num2);


// var num = 10;
// var num2 = num;
// alert(num2);

// var StudentNum = prompt("Enter your Obtained Marks");
// var totalnum = prompt("Enter Total Marks");
// var Student = (StudentNum * 100) / totalnum;
// alert(Student);

// var userName = prompt("Enter your name");
// alert("Thanks, " + userName + "!");

// var spec = prompt("Your species?", "human");

// var question = "Your species?";
// var defaultAnswer = "human";
// var spec = prompt(question, defaultAnswer);

// var numberOfCats = +prompt("How many cats?");
// var tooManyCats = numberOfCats + 1;
// alert(tooManyCats);

// == only check value 
// === check value and data type

// var user = +prompt("Enter your roll number");

// if (user === 1) {
//     alert("Welcome Hammad");
// }
// else if (user === 789389) {
//     alert("welcome jawad");
// }   
// else if (user === 456123) {
//     alert("welcome Aliyan");
// }   
// else {
//     alert("Invalid Roll Number");
// }   

// var user = prompt("Enter your age");
// if(user === 18){
//     alert("You are eligible to vote");
// }
// else{
//     alert("You are not eligible to vote");
// }