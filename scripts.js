
// Global Selectors
const gridContainer = document.querySelector(".grid-container");

// Dynamic Elements 
let currentSize = 75;
let currentPenColor = "black";

// Default Mouse State
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

window.addEventListener('load', () => {drawGrid(currentSize)});


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
    changeBackground("rgb(200, 205, 199)")
    drawGrid(currentSize);
});







var slider = document.getElementById("myRange");
var output = document.getElementById("display-size");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    gridContainer.innerHTML = '';
    output.innerHTML = this.value;
    currentSize = 100 - this.value;
    
    drawGrid(currentSize);
}



function gridToggle () {}

function saveScreenshot() {}


const colorSelector = document.querySelector("#color-selector");
colorSelector.addEventListener('change', () => {currentPenColor = colorSelector.value});

const changeBG = document.querySelector("#bg-color-selector");
changeBG.addEventListener('change', () => {changeBackground(changeBG.value)});