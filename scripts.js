
// Global Selectors
const gridContainer = document.querySelector(".grid-container");

// Dynamic Elements 
let currentBackgroundColor = "rgb(210, 217, 208)"
let currentSize = 75;
let currentPenColor = "blue";

// Default Mouse State
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

// window.addEventListener('load', () => {drawGrid(currentSize)});


function drawGrid(x) {
    let pixelSize = (100/x)
    for (let i = 0; i < (x * x); i++) {
        let gridItem = document.createElement("div");
        gridItem.classList.add("pixel");
        gridItem.style.width = `${pixelSize}%`;
        gridItem.style.height = `${pixelSize}%`;
        gridItem.addEventListener('mouseover', fillItem)
        gridContainer.appendChild(gridItem);
    }
}
function fillItem(e) {
    if (e.type === "mouseover" && mouseDown) {
        e.target.style.backgroundColor = currentPenColor;
    }
}
function changeBackground(color) {
    gridContainer.style.backgroundColor = color;
}







const clearAll = document.querySelector("#clear-all");

clearAll.addEventListener('click', () => {
    gridContainer.innerHTML = '';
    drawGrid(currentSize)
});

const changeBG = document.querySelector("#change-bg-color");

changeBG.addEventListener('click', () => {
    changeBackground("rgb(100, 245, 75)")
});





var slider = document.getElementById("myRange");
var output = document.getElementById("display-size");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    gridContainer.innerHTML = '';
    output.innerHTML = this.value;
    currentSize = this.value;
    drawGrid(currentSize);
}