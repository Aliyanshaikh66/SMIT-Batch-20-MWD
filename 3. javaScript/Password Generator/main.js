// alert("Password Generator me welcome!");
// var name = prompt("Apna naam likho");

// var small = "abcdefghijklmnopqrstuvwxyz";
// var capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var number = "0123456789";
// var symbol = "!@#$";


// var length = prompt("Password ki length likho (5 se 12 tak)");
// if (length < 5 || length > 15) {
//     alert("Galat length! Default 8 set kar di");
//     length = 12;
// }
// var all = small + capital + number + symbol;
// var password = "";
// for (var i = 0; i < length; i++) {
//     var random = Math.floor(Math.random() * all.length);
//     var ch = all.charAt(random);
//     password = password + ch;
// }

// alert("Hello " + name + "\nTumhara password hai: " + password);


//  function tellTime() {
//   var now = new Date();
//   var theHr = now.getHours();
//   var theMin = now.getMinutes();
//   alert("Current time: "+ theHr + " PM" + " : " + theMin + " Min");
// }
// tellTime();

function user (){
    let now = new Date();
    let firstname = prompt("Enter your name")
    alert(firstname);
    console.log(now);
}
// user ();

user ()