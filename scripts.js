
// Global Selectors
const gridContainer = document.querySelector(".grid-container");
let currentBackgroundColor = "#c8cdc7";

// Dynamic Elements (default state)
let currentSize = 50;
let currentPenColor = "black";
let gridOn = false;

let brushColorText = document.querySelector("#brushColorText");
let bgColorText = document.querySelector("#bgColorText");

let headerOne = document.querySelector(".header-one");


// // Default Mouse State
let mouseDown = false;
gridContainer.onmousedown = () => (mouseDown = true);
gridContainer.onmouseup = () => (mouseDown = false);

// Add touch events
gridContainer.ontouchstart = () => (mouseDown = true);
gridContainer.ontouchend = () => (mouseDown = false);



// Draw initial grid depending on which page is loaded
window.addEventListener('load', function() {
    // Check if it's the main page
    if (window.location.pathname === '/etch-a-sketch/index.html') {
        drawGrid(currentSize);
        // bgColorText.style.color = "rgb(200, 205, 199)";
        changeBG.value = "#c8cdc7";
    } else if (window.location.pathname === '/etch-a-sketch/experimental.html') {
        drawGrid(95);
    }
});

// FUNCTIONS
function drawGrid(x) {
    let pixelSize = (100/x)
    for (let i = 0; i < (x * x); i++) {
        let gridItem = document.createElement("div");
        gridItem.classList.add("pixel");
        gridItem.style.width = `${pixelSize}%`;
        gridItem.style.height = `${pixelSize}%`;
        if (gridOn) {
            gridItem.style.border = "1px solid black";
        } else {
            gridItem.style.border = "none";
        }
        gridItem.addEventListener('mouseover', fillItem);
        gridItem.addEventListener('touchmove', fillItem);
        gridContainer.appendChild(gridItem);
    }
}

function fillItem(e) {
    let target;
    if (e.type === "touchmove") {
        // Get the element under the finger
        let touch = e.touches[0];
        target = document.elementFromPoint(touch.clientX, touch.clientY);
        
        // Only prevent the default action if the touchmove is happening on a pixel
        if (target.classList.contains('pixel')) {
            e.preventDefault(); // Prevent the default touch action
        }
    } else {
        target = e.target;
    }

    if (mouseDown && target.classList.contains('pixel')) {
        target.style.backgroundColor = currentPenColor;
    }
}

function changeBackground(color) {
    gridContainer.style.backgroundColor = color;
}

if (window.location.pathname === '/etch-a-sketch/index.html') {
    // Selectors and Actions

    let previousPenColor = 'black';
    let eraserOn = false;
    const eraserCheck = document.querySelector("#eraser-check");

    eraserCheck.addEventListener('change', () => {
        alert('eraser change registered');
        eraserOn = !eraserOn;
        if (eraserOn === true) {
            previousPenColor = currentPenColor;
            currentPenColor = currentBackgroundColor;
        } else {
            currentPenColor = previousPenColor;
        }
    });





    const clearAll = document.querySelector("#clear-all");
    ['click', 'touchstart'].forEach(evt => 
        clearAll.addEventListener(evt, () => {
            gridContainer.innerHTML = '';
            changeBackground("rgb(200, 205, 199)")
            drawGrid(currentSize);
    }))

    const colorSelector = document.querySelector("#color-selector");
    colorSelector.addEventListener('change', () => {
        currentPenColor = colorSelector.value;
        brushColorText.style.color = currentPenColor;
        headerOne.style.color = currentPenColor;
        gridContainer.style.border = `4px solid ${currentPenColor}`;
    });

    const changeBG = document.querySelector("#bg-color-selector");
    changeBG.addEventListener('change', () => {
        changeBackground(changeBG.value);
        currentBackgroundColor = changeBG.value;
        bgColorText.style.color = changeBG.value;
    });


    // Slider Controls and Display Function
    var slider = document.getElementById("myRange");
    var output = document.getElementById("display-size");
    output.innerHTML = slider.value; 
    slider.oninput = function() {
        gridContainer.innerHTML = '';
        output.innerHTML = this.value;
        currentSize = 100 - this.value;
        drawGrid(currentSize);
    }


    const gridButton = document.querySelector("#grid-toggle");
    gridButton.ontouchstart = () => (mouseDown = true);
    gridButton.ontouchend = () => (mouseDown = false);
    ['click', 'touchstart'].forEach(evt =>
        gridButton.addEventListener(evt, () => {
            gridToggle();
        })
    );
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

function drawRandom(color) {
    const pixelList = document.querySelectorAll('.pixel');
    const gridSize = Math.sqrt(pixelList.length);

    for (let i = 0; i < pixelList.length; i++) {
        // Generate a random number between 0 and 1
        let randomFloat = Math.random();

        // Adjust the probability based on the position
        let probability = Math.pow(randomFloat, 1.5);

        // Check if the random probability allows coloring
        if (probability > 0.5) {
            pixelList[i].style.backgroundColor = color;

            // Introduce some clustering effect
            let clusterSize = Math.floor(Math.random() * 5);
            for (let j = 1; j <= clusterSize; j++) {
                // Randomly color nearby pixels
                let xOffset = Math.floor(Math.random() * 5) - 2;
                let yOffset = Math.floor(Math.random() * 5) - 2;

                let newIndex = i + xOffset + yOffset * gridSize;

                if (newIndex >= 0 && newIndex < pixelList.length) {
                    pixelList[newIndex].style.backgroundColor = color;
                }
            }
        }
    }
}


const textField = document.querySelector('#input');
const submitPrompt = document.querySelector('#prompt-button');

submitPrompt.addEventListener('click', () => {
    if (textField.value !== '') {
        textField.value = '';
        for (let i = 0; i < 6; i++) {
            drawRandom(generateRandomColor());
        }
    }
});



