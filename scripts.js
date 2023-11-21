const gridContainer = document.querySelector(".container");

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

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
        e.target.style.backgroundColor = currentColor;
    }
}

// function changeBackground(color) {
// }

let sizeChoice = 75;

currentColor = "blue";
drawGrid(sizeChoice);


const clearAll = document.querySelector("#clear-all");

clearAll.addEventListener('click', () => {
    gridContainer.innerHTML = '';
    drawGrid(sizeChoice)
});
