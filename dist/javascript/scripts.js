// Declare all universal variables

const gridCanvas = document.querySelector(".canvas");
let currentBackgroundColor = "#eef1f3";
let currentBrushColor = "#28393D";
let currentSize = 50;

let gridOn = false;
let eraserOn = false;


// // Default Mouse State
let mouseDown = false;
gridCanvas.onmousedown = () => (mouseDown = true);
gridCanvas.onmouseup = () => (mouseDown = false);

// Add touch events
gridCanvas.ontouchstart = () => (mouseDown = true);
gridCanvas.ontouchend = () => (mouseDown = false);



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
function gridToggle() {
    const allPixels = document.querySelectorAll('.pixel');
    if (gridOn) {
        for (const pixel of allPixels) {
            pixel.style.border = 'none';
        } 
        gridOn = false;
    } else {
        for (const pixel of allPixels) {
            pixel.style.border = '1px solid black';
        }
        gridOn = true;
    }
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

// Background Color Selector
const bgColor = document.querySelector("#bg-color-selector");
const bgLabel = document.querySelector("#bg-label");
const headingDashes = document.querySelectorAll(".heading-dash");
bgColor.addEventListener("change", () => {
    currentBackgroundColor = bgColor.value;
    gridCanvas.style.backgroundColor = currentBackgroundColor;
    bgLabel.style.color = currentBackgroundColor;
    
    headingDashes.forEach(dash => {
        dash.style.color = currentBackgroundColor;
    })

    let track = document.querySelector("#brush-slider");
    track.style.setProperty("--track-clr", `${currentBackgroundColor}`);
});

// Brush Color Selector
const brushColor = document.querySelector("#brush-color-selector");
const brushLabel = document.querySelector("#brush-label");
const headingWords = document.querySelectorAll(".heading-word");

brushColor.addEventListener("change", () => {
    currentBrushColor = brushColor.value;
    brushLabel.style.color = currentBrushColor;
    gridCanvas.style.border = `6px solid ${currentBrushColor}`;

    headingWords.forEach(word => {
        word.style.color = currentBrushColor;
    });

    let thumb = document.querySelector("#brush-slider");
    thumb.style.setProperty('--thumb-clr', `${currentBrushColor}`);
})


// Eraser
let lastBrushColor = currentBrushColor
const eraserCheckbox = document.querySelector("#eraser-checkbox");
eraserCheckbox.addEventListener("change", () => {
    eraserOn = !eraserOn;
    if (eraserOn) {
        lastBrushColor = currentBrushColor;
        currentBrushColor = currentBackgroundColor;
    } else {
        currentBrushColor = lastBrushColor;
    }
})

// Grid Toggle
const gridCheckbox = document.querySelector("#show-grid-checkbox");
gridCheckbox.addEventListener("change", () => {
    gridToggle();
})

// Clear All
const clearCanvas = document.querySelector("#reset-canvas-button");
['click', 'touchstart'].forEach(evt => 
    clearCanvas.addEventListener(evt, () => {
        gridCanvas.innerHTML = '';
        drawGrid(currentSize);
        gridCanvas.style.backgroundColor = currentBackgroundColor;
}))




// EXPERIMENTAL MODE


