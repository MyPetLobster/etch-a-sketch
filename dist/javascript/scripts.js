// Declare all universal variables

const gridCanvas = document.querySelector(".canvas");
let currentBackgroundColor = "#eef1f3";
let currentBrushColor = "#28393D";
let currentSize = 50;

let gridOn = true;


// Function Definitions

function drawGrid(size) {
    let pixelSize = (100/size)
    for (let i = 0; i < (size ** 2); i++) {
        let gridItem = document.createElement("div");
        gridItem.classList.add("pixel");
        gridItem.style.width = `${pixelSize}%`;
        gridItem.style.height = `${pixelSize}%`;
        if (gridOn) {
            gridItem.style.border = "1px solid black";
        } else {
            gridItem.style.border = "none";
        }
        gridItem.addEventListener("mouseover", fillPixel);
        gridItem.addEventListener("touchmove", fillPixel);
        gridCanvas.appendChild(gridItem);
    }
}

function fillPixel(e) { 
    let target;
    if (e.type === "touchmove") {
        let touch = e.touches[0];
        target = document.elementFromPoint(touch.clientX, touch.clientY);

        if (target.classList.contains("pixel")) {
            e.preventDefault();
        }
    } else {
        target = e.target;
    }

    if (mouseDown && target.classList.contains("pixel")) {
        target.style.backgroundColor = currentBrushColor;
    }

}

function changeBackground() {

}

function toggleGrid() {

}

function clearAll() {

}

function generateRandomColor() {

}

function drawRandomArt() {

}


// Event Listeners and Actions


// Range Slider Controls and Display Function
let slider = document.querySelector("#brush-slider");
let output = document.querySelector("#brush-size-display");
output.innerHTML = slider.value;
slider.oninput = function() {
    gridCanvas.innerHTML = '';
    output.innerHTML = this.value;
    currentSize = 100 - this.value;
    drawGrid(currentSize);
}


window.addEventListener('load', function() {
    drawGrid(currentSize);
})