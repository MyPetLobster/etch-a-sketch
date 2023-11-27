


// Declare all universal variables

const gridCanvas = document.querySelector(".canvas");
let currentBackgroundColor = "#eef1f3";
let currentBrushColor = "#28393D";
let currentSize = 50;

const checkboxes = document.querySelectorAll(".checkbox");
const eraserCheckbox = document.querySelector("#eraser-checkbox");

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
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    return `#${randomColor}`;
}




function drawRandomArt() {

}


// Event Listeners and Actions



// Range Slider Controls and Display Function
let slider = document.querySelector("#brush-slider");
let output = document.querySelector("#brush-size-display");

let warningText = document.querySelector("#warning");

output.innerHTML = slider.value;
slider.oninput = function() {
    gridCanvas.innerHTML = '';
    output.innerHTML = this.value;
    currentSize = 100 - this.value;
    drawGrid(currentSize);
}

////////////////////
slider.addEventListener("touchstart", function() {
    warningText.style.display = "block";
});

slider.addEventListener("mousedown", function() {
    warningText.style.display = "block";
});

slider.addEventListener("touchend", function() {
    warningText.style.display = "none";
});

slider.addEventListener("mouseup", function() {
    warningText.style.display = "none";
});



window.addEventListener('load', function() {
    drawGrid(currentSize);
})


// Brush Color Selector
const brushColor = document.querySelector("#brush-color-selector");
const brushLabel = document.querySelector("#brush-label");
const brushSizeText = document.querySelector("#brush-size-text");
const headingWords = document.querySelectorAll(".heading-word");
const footerLink = document.querySelectorAll(".footer-link");

brushColor.addEventListener("change", () => {
    currentBrushColor = brushColor.value;
    updateBrushColors(currentBrushColor);
})

function updateBrushColors(color) {
    brushLabel.style.color = color;
    brushSizeText.style.color = color;
    gridCanvas.style.border = `6px solid ${color}`;

    checkboxes.forEach(box => {
        box.style.accentColor = color;
    })

    headingWords.forEach(word => {
        word.style.color = color;
    });

    let thumb = document.querySelector("#brush-slider");
    thumb.style.setProperty('--thumb-clr', `${color}`);
}




// Background Color Selector
const bgColor = document.querySelector("#bg-color-selector");
const bgLabel = document.querySelector("#bg-label");
const headingDashes = document.querySelectorAll(".heading-dash");
bgColor.addEventListener("change", () => {
    currentBackgroundColor = bgColor.value;
    updateBackgroundColors(currentBackgroundColor);
});

function updateBackgroundColors(color) {
    gridCanvas.style.backgroundColor = color;
    bgLabel.style.color = color;
    
    headingDashes.forEach(dash => {
        dash.style.color = color;
    })

    let track = document.querySelector("#brush-slider");
    track.style.setProperty("--track-clr", `${color}`);
}




// Eraser
let lastBrushColor = currentBrushColor

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


// Color Randomizer
const randomColorButton = document.querySelector("#random-colors-button");
randomColorButton.addEventListener("click", () => {
    currentBackgroundColor = generateRandomColor();
    currentBrushColor = generateRandomColor();

    brushColor.value = currentBrushColor;
    updateBrushColors(currentBrushColor);

    bgColor.value = currentBackgroundColor;
    updateBackgroundColors(currentBackgroundColor);
})