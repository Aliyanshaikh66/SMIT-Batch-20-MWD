// function addProduct(){

//     let name = document.getElementById("name").value;
//     let desc = document.getElementById("desc").value;
//     let price = document.getElementById("price").value;
//     let image = document.getElementById("image").files[0];
//     let url = URL.createObjectURL(image);

//     let card = `
    
//     <div class="card">
//       <img src="${url}">
//       <h3>${name}</h3>
//       <p>${desc}</p>
//       <h2>Rs ${price}</h2>
//     </div>
//     `;
//     document.getElementById("products").innerHTML += card;

// }

// // let items = {
// //     furit: "Apple",
// //     color: "red",
// //     price: 200,
// // }
// // console.log(items);

    // Get elements
    // var taskInput = document.getElementById("taskInput");
    // var color = document.getElementById("colour");
    // var addBtn = document.getElementById("addBtn");
    // var taskList = document.getElementById("taskList");

    // Add task function
    // function addTask() {
    //     var taskText = taskInput.value;

    //     if (taskText === "") {
    //         alert("Please enter a task");
    //         return;
    //     }

        // Create list item
        // var li = document.createElement("li");
        // li.innerHTML = taskText;

        // Create delete button
        // var delBtn = document.createElement("button");
        // delBtn.innerHTML = "Delete";
        // delBtn.className = "deleteBtn";

        // Delete event
        // delBtn.onclick = function() {
        //     taskList.removeChild(li);
        // };

        // Append button to list item
        // li.appendChild(delBtn);

    //     // Add to list
    //     taskList.appendChild(li);

    //     // Apply to colour
    //     taskList.appendChild(li);

    //     // Clear input
    //     taskInput.value = "";
    // }

    // // Click event
    // addBtn.onclick = addTask;

    // // Enter key event
    // taskInput.onkeypress = function(e) {
    //     if (e.key === "Enter") {
    //         addTask();
    //     }
    // };
