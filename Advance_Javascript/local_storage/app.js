// Signup Function
// function signup(){
//     let email = document.getElementById("email").value;
//     let password = document.getElementById("pass").value;
//     localStorage.setItem("email",email);
//     localStorage.setItem("password",password);
//     console.log("Signup Successfull..!");
// }

// signIn Function

// function signin(){
//     let email = document.getElementById("email").value;
//     let password = document.getElementById("pass").value;
//     let matchemail = localStorage.getItem("email",email);
//     let matchpassword = localStorage.getItem("password",password);
//     if (email === matchemail && password === matchpassword){
//         console.log("Login Successfull..!");
//     } else{
//         console.log("Your Credentials are Not match...!");
//     }
//     console.log("Signup Successfull..!");
// }


// multi  user save 

//Sign Up function
function signup() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("pass").value;
  // Purane users lao
  let users = JSON.parse(localStorage.getItem("users")) || [];
  
//   // create New User
  users.push({
    email,
    password
  });
  // again saved
  localStorage.setItem("users", JSON.stringify(users));
  console.log("User Added");
}

// login function 
// function login() {
//   let email = document.getElementById("email").value;
//   let password = document.getElementById("password").value;

//   let users = JSON.parse(localStorage.getItem("users")) || [];

//   let user = users.find(
//     u => u.email === email && u.password === password
//   );

//   if (user) {
//     console.log("Login Successful");
//   } else {
//     console.log("Invalid Email or Password");
//   }
// }