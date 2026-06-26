function showBlog() {
    var title = document.getElementById("title").value;
    var description = document.getElementById("description").value;
    document.getElementById("blog").innerHTML += "<h2>" + title + "</h2>" +
   "<p>" + description + "</p><hr>";
}

// var sum = 14; 
// if (sum !== 20) 
//     { alert("win"); } 
// else {  
//     alert("lose");
// }
// console.log(sum);


// var arr = []; 
// arr[0] = "a"; 
// arr[1] = "b"; 
// alert(arr.length);
// var user = "Aliyan";
// document.write(user);
let fileInput = document.getElementById("fileInput");
let preview = document.getElementById("preview");

fileInput.addEventListener("change", function(e){

    let file = e.target.files[0];
    let reader = new FileReader();
    reader.onload = function(event){
        preview.src = event.target.result;
    }
    reader.readAsDataURL(file);

});


