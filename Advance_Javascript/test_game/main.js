const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "purple"
];

let board = document.getElementById("board");
let score = 0;

createBoard();
checkMatch();


// Create Board
function createBoard(){
    for(let i=0;i<64;i++){
        let cell = document.createElement("div");
        cell.classList.add("cell");
        let randomColor =
        colors[Math.floor(Math.random()*colors.length)];
        cell.style.backgroundColor = randomColor;
        board.appendChild(cell);
        cell.addEventListener("click",changeColor);
    }

}

// Change Color on Click
function changeColor(){
    let randomColor =
    colors[Math.floor(Math.random()*colors.length)];
    this.style.backgroundColor = randomColor;
    checkMatch();
}

// Check Matches
function checkMatch(){

    let cells = document.querySelectorAll(".cell");

    // Horizontal Match
    for(let i=0;i<62;i++){

        let color1 = cells[i].style.backgroundColor;
        let color2 = cells[i+1].style.backgroundColor;
        let color3 = cells[i+2].style.backgroundColor;

        if(
            color1 === color2 &&
            color2 === color3
        ){
        score += 10;
        document.getElementById("score").innerHTML = score

        cells[i].style.backgroundColor =
        randomCandy();

        cells[i+1].style.backgroundColor =
        randomCandy();

        cells[i+2].style.backgroundColor =
        randomCandy();
        }

    }

}

// Generate New Candy
function randomCandy(){

    return colors[
        Math.floor(Math.random()*colors.length)
    ];

}