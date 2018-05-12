var numSquares = 6;
var colors = generateColor(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");
colorDisplay.textContent = pickedColor;

// for(var i=0; i<modeButtons.length; i++){
//     modeButtons[i].addEventListener("click", function () {
//         modeButtons[0].classList.remove("selected");
//         modeButtons[1].classList.remove("selected");
//         this.classList.add("selected");
//
//     });
// }

resetButton.addEventListener("click", function () {
    //generate all new colors
    colors = generateColor(numSquares);

    //pick a new random color from array
    pickedColor= pickColor();

    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    this.textContent = "New Colors";

    //change colors of squares
    for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }

    h1.style.backgroundColor = "steelblue";
});

easyButton.addEventListener("click", function () {
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    numSquares = 3;
    colors = generateColor(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else{
            squares[i].style.display = "none";
        }
    }
});

hardButton.addEventListener("click", function () {
    easyButton.classList.remove("selected");
    hardButton.classList.add("selected");
    numSquares = 6;
    colors = generateColor(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0; i<squares.length; i++){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
    }

});


for(var i=0; i<squares.length; i++){
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listener to each square
    squares[i].addEventListener("click", function () {

        //grab color of clicked square
        var clickedColor = this.style.backgroundColor;

        //compare color to picked color
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct";
            resetButton.textContent = "Play Again?";
            colorChange(clickedColor);
            h1.style.backgroundColor = clickedColor;

        }else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Incorrect";

        }

    })
}

function colorChange(color){
    //loop through the squares
    for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = color;
    }

}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateColor(num){
    //make an array
    var arr = []

    //repeat num times
    for(var i=0; i<num; i++){

        // get ramdom color and push into arr
        arr.push(randomColor())


    }

    //return that array
    return arr;

}

function randomColor(){
    //pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256)

    //pick a "green" from 0 - 255
    var g = Math.floor(Math.random() * 256)

    //pick a "blue" from 0 - 255
    var b = Math.floor(Math.random() * 256)

    return "rgb(" + r + ", " + g + ", " + b + ")";
}

