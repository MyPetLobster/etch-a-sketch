const gridContainer = document.querySelector(".container");

function drawGrid(x) {

    let pixelSize = (100/x)

    for (let i = 0; i < (x * x); i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("pixel");
        newDiv.style.width = `${pixelSize}%`;
        newDiv.style.height = `${pixelSize}%`;
        gridContainer.appendChild(newDiv);
        
    }

}

drawGrid(60);