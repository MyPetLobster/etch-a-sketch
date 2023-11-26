const gridCanvas = document.querySelector(".canvas");

function drawGrid(size) {
    let pixelSize = (100/size)
    for (let i = 0; i < (size ** 2); i++) {
        let gridItem = document.createElement("div");
        gridItem.classList.add("pixel");
        gridItem.style.width = `${pixelSize}%`;
        gridItem.style.height = `${pixelSize}%`;
        gridCanvas.appendChild(gridItem);
    }
}

window.addEventListener('load', function() {
    drawGrid(99);
})

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

                if (
                    newIndex >= 0 &&
                    newIndex < pixelList.length &&
                    Math.random() > 0.2 // Adjust the probability for nearby pixels
                ) {
                    pixelList[newIndex].style.backgroundColor = color;
                }
            }
        }
    }
}



function picasso() {
    let pixelList = document.querySelectorAll(".pixel");
    if (pixelList.length === 0) {
        drawGrid(99);
    } 
    textField.value = "";
    for (let i = 0; i < 20; i++) {
        drawRandom(generateRandomColor());
    }
}


const textField = document.querySelector(".prompt-text");
const promptForm = document.querySelector(".prompt-form");



// Submit Prompt
function handleForm(event) {
    event.preventDefault();
    const inputValue = textField.value.toLowerCase(); // Convert the input to lowercase for case-insensitive comparison
    if (inputValue === "mona lisa") {
        gridCanvas.innerHTML = "";
        gridCanvas.style.backgroundImage = "url('../../images/mona-lisa.jpg')";
        gridCanvas.style.backgroundSize = "contain";
        
    } else if (inputValue !== "") {
        picasso();
    }
}

promptForm.addEventListener('submit', handleForm);


