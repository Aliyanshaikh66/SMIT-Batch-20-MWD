// async function getWeather() {
    //   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    //   try {
        //     const response = await fetch(url);
        
        //     if (response.ok) {
            //       const data = await response.json();
            
            //       console.log("City:", data.name);
//       console.log("Temperature:", data.main.temp + "°C");
//       console.log("Weather:", data.weather[0].main);
//     } else {
    //       console.log("City not found!");
    //     }
    //   } catch (error) {
        //     console.log("Error:", error.message);
        //   }
        // }
        
        // getWeather();
          
        // async function getWeather() {
            //       const city = document.getElementById("city").value;
            
            //       const response = await fetch(
                //         `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`
                //       );
                
                //       const data = await response.json();
                
                //       document.getElementById("result").innerText =
                //         `${data.name}: ${data.main.temp}°C`;
                //     }
                
                
//     async function getdata(){
//     const city = prompt("Enter Your City Name");
//     const apiKey = "128484d0e626477f90fcc8847a28aa56";
//     const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
//     const data = await response.json();
//     const weather_data= {
//         city: data.name,
//         Temp: data.main.temp,
//     }
//     console.log(weather_data);
    
    
// }   
// getdata();


// let user = "";
// console.log(user);

// set Method 

// let num =new Set([1, 1,1,1,1, 2, 2,3]);
// console.log(num);

// let numbers = new Set();
// numbers.add(10);
// numbers.add(20);
// // fruits.add("Banana");
// // fruits.add("Mango");
// console.log(numbers);

// let obj = new Set();
// obj.add({
//     name: "Aliyan",
//     name2: "Aliyan",
// })

// console.log(new Set(obj));

// let arr = ["Ali","adnan"];
// let addnames = new Set(arr);
// addnames.add("Ali");
// addnames.add("Hanif");
// addnames.add("Jawad");
// console.log(addnames);

// let user = new Map();
// user.set("user1",{
//     name: "Adnan",
//     name1: "Jawad",
//     name2: "Jawad"
// });
// console.log(user.get("name1"));

// Map Method value key pair me add kerta hn 

// let users = new Map();
// users.set("name","Ali");
// users.set("name1","jawad");

// console.log(users.get("name1"));

// let user = new Set(
//     ["Basheer", "Basheer", "Hanif", "NoorUllah"],
//     ["jawad", "Hanif", "adnan"],
// );

// console.log(user);

// let users = new Map([
//     ["name1", "Jawad"],
//     ["name2", "Adnan"],
//     ["name", "Noorullah"],
//     ["name", "Nasir"],
// ]
// )
// console.log(users.get("name"),users.get("name2"));

// let person={
//     fullname: function(){
//         return this.firstname + " " + this.lastname;
//     }
// }

// let detail = {
//     firstname: "Adnan",
//     lastname: "jawad",
// }
// console.log(person.fullname.call(detail));
