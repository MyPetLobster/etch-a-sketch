
// Global Selectors
const gridContainer = document.querySelector(".grid-container");

// Dynamic Elements (default state)
let currentSize = 75;
let currentPenColor = "black";

// Default Mouse State
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

// Draw initial grid when page loads
window.addEventListener('load', () => {drawGrid(currentSize)});

// FUNCTIONS
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

// Selectors and Actions
const clearAll = document.querySelector("#clear-all");
clearAll.addEventListener('click', () => {
    gridContainer.innerHTML = '';
    changeBackground("rgb(200, 205, 199)")
    drawGrid(currentSize);
});
const colorSelector = document.querySelector("#color-selector");
colorSelector.addEventListener('change', () => {currentPenColor = colorSelector.value});
const changeBG = document.querySelector("#bg-color-selector");
changeBG.addEventListener('change', () => {changeBackground(changeBG.value)});


// Slider Controls and Display Function
var slider = document.getElementById("myRange");
var output = document.getElementById("display-size");
output.innerHTML = slider.value; 
slider.oninput = function() {
    gridContainer.innerHTML = '';
    output.innerHTML = this.value;
    currentSize = 100 - this.value;
    drawGrid(currentSize);
    
    
    // Dynamic Dot Size

}

let dotSize = document.querySelector(".slider::-moz-range-thumb");
dotSize.addEventListener('change', (e) => {
    e.style.width = `${currentSize}px`;
    e.style.height = `${currentSize}px`;
})

function gridToggle () {}



