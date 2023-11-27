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


function handleForm(event) {
    event.preventDefault();
    gridCanvas.innerHTML = "";
    const inputValue = textField.value.toLowerCase().trim();
    let randomSelect = 0;

    const monaLisa = ["mona lisa", "mona", "art", "painting"];
    const dog = ["dog", "dogs", "puppy", "puppies"];
    const joselyn = "joselyn";
    const daisy = "daisy";
    const mansBestFriend = ["man's best friend", "mans best friend"];
    const cat = ["cat", "cats", "kitten", "kitty", "meow"];
    const bear = ["bear", "scary", "grizzly", "grizzly bear", "wild animal"];
    const wolf = ["wolf", "wolves", "coyote", "wild animal"];
    const fish = ["fish", "fishing", "salmon"];
    const vacation = ["vacation", "relax", "beach", "summer"];
    const bestFriends = ["bff", "bestfriends", "friend", "friends", "best friends", "lovers"];
    const animal = ["animals", "animal"];
    const coolDude = ["cool", "cool dude", "awesome"];
    const family = ["family", "love", "wife", "husband", "married", "couple", "soulmate"];
    const guns = ["gun", "guns", "firearm", "firearms", "shoot", "shooting"];
    

    const nature = ["nature", "scenic", "breathtaking", "outdoor", "outside", "outdoors",
                    "lake", "pond", "ocean", "river", "water", "mountain", "mountains"];

    const prettyLady = ["pretty", "lady", "pretty lady", "pretty woman", "beautiful", "sexy",
                        "woman", "hot", "hot woman", "sexy lady", "bombshell", "babe", 
                        "supermodel"];
    
    if (monaLisa.some(keyword => inputValue.includes(keyword))) {
        gridCanvas.style.backgroundImage = "url('../../images/mona-lisa.jpg')";
        gridCanvas.style.backgroundSize = "contain";
    } else if (dog.some(keyword => inputValue.includes(keyword))) {
        randomSelect = Math.floor(Math.random() * 4);
        if (randomSelect === 0) {
            gridCanvas.style.backgroundImage = "url('../../images/dog-1.jpg')";
        } else if (randomSelect === 1 ) {
            gridCanvas.style.backgroundImage = "url('../../images/dog-2.jpg')";
        } else if (randomSelect === 2) {
            gridCanvas.style.backgroundImage = "url('../../images/joselyn-daisy.jpg')";
        } else {
            gridCanvas.style.backgroundImage = "url('../../images/joselyn-daisy-2.jpg')";
        }
        gridCanvas.style.backgroundSize = "contain";
    } else if (mansBestFriend.some(keyword => inputValue.includes(keyword))) {
        randomSelect = Math.floor(Math.random() * 4);
        if (randomSelect === 0) {
            gridCanvas.style.backgroundImage = "url('../../images/nick-and-joselyn.jpg')";
        } else if (randomSelect === 1 ) {
            gridCanvas.style.backgroundImage = "url('../../images/nick-and-joselyn-2.jpg')";
        } else if (randomSelect === 2) {
            gridCanvas.style.backgroundImage = "url('../../images/me-and-daisy.jpg')";
        } else {
            gridCanvas.style.backgroundImage = "url('../../images/me-and-daisy-2.jpg')";
        }
        gridCanvas.style.backgroundSize = "contain";
    } else if (vacation.some(keyword => inputValue.includes(keyword))) {
        gridCanvas.style.backgroundImage = "url('../../images/vacation.jpg')";
        gridCanvas.style.backgroundSize = "contain";
    } else if (cat.some(keyword => inputValue.includes(keyword))) {
        randomSelect = Math.floor(Math.random() * 2);
        if (randomSelect === 0) {
            gridCanvas.style.backgroundImage = "url('../../images/cat-1.jpg')";
        } else {
            gridCanvas.style.backgroundImage = "url('../../images/cat-2.jpg')";
        }
        gridCanvas.style.backgroundSize = "contain";
    } else if (bear.some(keyword => inputValue.includes(keyword))) {
        randomSelect = Math.floor(Math.random() * 8);
        if (randomSelect === 7) {
            gridCanvas.style.background = "url('../../images/joselyn-1.jpg')";
        } else {
            gridCanvas.style.backgroundImage = "url('../../images/bear.jpg')";
        }
        gridCanvas.style.backgroundSize = "contain";
    } else if (wolf.some(keyword => inputValue.includes(keyword))) {
        gridCanvas.style.backgroundImage = "url('../../images/wolf.jpg')";
        gridCanvas.style.backgroundSize = "contain";
    } else if (fish.some(keyword => inputValue.includes(keyword))) {
        gridCanvas.style.backgroundImage = "url('../../images/fish.jpg')";
        gridCanvas.style.backgroundSize = "contain";
    } else if (bestFriends.some(keyword => inputValue.includes(keyword))) {
        randomSelect = Math.floor(Math.random() * 2);
        if (randomSelect === 0) {
            gridCanvas.style.backgroundImage = "url('../../images/bff.jpg')";
        } else {
            gridCanvas.style.backgroundImage = "url('../../images/bff-2.jpg')";
        }
        gridCanvas.style.backgroundSize = "contain";
    } else if (coolDude.some(keyword => inputValue.includes(keyword))) {
        gridCanvas.style.backgroundImage = "url('../../images/cool-dude.jpg')";
        gridCanvas.style.backgroundSize = "contain";
    } else if (family.some(keyword => inputValue.includes(keyword))) {
        randomSelect = Math.floor(Math.random() * 2)
        if (randomSelect === 0) {
            gridCanvas.style.backgroundImage = "url('../../images/family.jpg')";
        } else {
            gridCanvas.style.backgroundImage = "url('../../images/family-2.jpg')";
        }
        gridCanvas.style.backgroundSize = "contain";
    } else if (guns.some(keyword => inputValue.includes(keyword))) {
        randomSelect = Math.floor(Math.random() * 2);
        if (randomSelect === 0) {
            gridCanvas.style.backgroundImage = "url('../../images/guns-1.jpg')";
        } else {
            gridCanvas.style.backgroundImage = "url('../../images/guns-2.jpg')";
        }
        gridCanvas.style.backgroundSize = "contain";
    } else if (nature.some(keyword => inputValue.includes(keyword))) {
        randomSelect = Math.floor(Math.random() * 6);
        if (randomSelect === 0) {
            gridCanvas.style.backgroundImage = "url('../../images/nature-1.jpg')";
        } else if (randomSelect === 1) {
            gridCanvas.style.backgroundImage = "url('../../images/nature-2.jpg')";
        } else if (randomSelect === 2) {
            gridCanvas.style.backgroundImage = "url('../../images/nature-3.jpg')";
        } else if (randomSelect === 3) {
            gridCanvas.style.backgroundImage = "url('../../images/nature-4.jpg')";
        } else if (randomSelect === 4) {
            gridCanvas.style.backgroundImage = "url('../../images/lake.jpg')";
        } else if (randomSelect === 5) {
            gridCanvas.style.backgroundImage = "url('../../images/fish.jpg')";
        } 
        gridCanvas.style.backgroundSize = "contain";
    } else if (prettyLady.some(keyword => inputValue.includes(keyword))) {
        gridCanvas.style.backgroundImage = "url('../../images/pretty.jpg')";
        gridCanvas.style.backgroundSize = "contain";
    } else if (animal.some(keyword => inputValue.includes(keyword))) {
        randomSelect = Math.floor(Math.random() * 9);
        if (randomSelect === 0) {
            gridCanvas.style.backgroundImage = "url('../../images/bear.jpg')";
        } else if (randomSelect === 1) {
            gridCanvas.style.backgroundImage = "url('../../images/cat-1.jpg')";
        } else if (randomSelect === 2) {
            gridCanvas.style.backgroundImage = "url('../../images/cat-2.jpg')";
        } else if (randomSelect === 3) {
            gridCanvas.style.backgroundImage = "url('../../images/dog-1.jpg')";
        } else if (randomSelect === 4) {
            gridCanvas.style.backgroundImage = "url('../../images/dog-2.jpg')";
        } else if (randomSelect === 5) {
            gridCanvas.style.backgroundImage = "url('../../images/fish.jpg')";
        } else if (randomSelect === 6) {
            gridCanvas.style.backgroundImage = "url('../../images/joselyn-daisy.jpg')";
        } else if (randomSelect === 7) {
            gridCanvas.style.backgroundImage = "url('../../images/joselyn-daisy-2.jpg')";
        } else {
            gridCanvas.style.backgroundImage = "url('../../images/wolf.jpg')";
        } 
        gridCanvas.style.backgroundSize = "contain";
    } else if (inputValue === daisy) {
        randomSelect = Math.floor(Math.random() * 2);
        if (randomSelect === 0) {
            gridCanvas.style.backgroundImage = "url('../../images/daisy-1.jpg')";
        } else {
            gridCanvas.style.backgroundImage = "url('../../images/daisy-2.jpg')";
        }
        gridCanvas.style.backgroundSize = "contain";
    } else if (inputValue === joselyn) {
        randomSelect = Math.floor(Math.random() * 3);
        if (randomSelect === 0) {
            gridCanvas.style.backgroundImage = "url('../../images/joselyn-1.jpg')";
        } else if (randomSelect === 1) {
            gridCanvas.style.backgroundImage = "url('../../images/joselyn-2.jpg')";
        } else {
            gridCanvas.style.backgroundImage = "url('../../images/joselyn-3.jpg')";
        }
        gridCanvas.style.backgroundSize = "contain";
    } else if (inputValue !== "") {
        picasso();
    }
}


const textField = document.querySelector(".prompt-text");
const promptForm = document.querySelector(".prompt-form");

promptForm.addEventListener('submit', handleForm);





// // Submit Prompt
// function handleForm(event) {
//     event.preventDefault();
//     const inputValue = textField.value.toLowerCase(); // Convert the input to lowercase for case-insensitive comparison
//     if (inputValue === "mona lisa") {
//         gridCanvas.innerHTML = "";
//         gridCanvas.style.backgroundImage = "url('../../images/mona-lisa.jpg')";
//         gridCanvas.style.backgroundSize = "contain";
//     } else if (inputValue === "dog") {
//         gridCanvas.innerHTML = "";
//         gridCanvas.style.backgroundImage = "url('../../images/dog-1.jpg')";
//         gridCanvas.style.backgroundSize = "contain";  // Fix here
//     } else if (inputValue === "dogs" || inputValue === "cute") {
//         gridCanvas.innerHTML = "";
//         gridCanvas.style.backgroundImage = "url('../../images/joselyn-daisy.jpg')";
//         gridCanvas.style.backgroundSize = "contain";  // Fix here
//     } else if (inputValue === "cat" || inputValue === "kitty") {
//         gridCanvas.innerHTML = "";
//         gridCanvas.style.backgroundImage = "url('../../images/cat-2.jpg')";
//         gridCanvas.style.backgroundSize = "contain";  // Fix here
//     } else if (inputValue === "handsome" || inputValue === "hot") {
//         gridCanvas.innerHTML = "";
//         gridCanvas.style.backgroundImage = "url('../../images/handsome.jpg')";
//         gridCanvas.style.backgroundSize = "contain";  // Fix here
//     } else if (inputValue === "bff" || inputValue === "friends") {
//         gridCanvas.innerHTML = "";
//         gridCanvas.style.backgroundImage = "url('../../images/bff.jpg')";
//         gridCanvas.style.backgroundSize = "contain";  // Fix here
//     } else if (inputValue === "love" || inputValue === "family") {
//         gridCanvas.innerHTML = "";
//         gridCanvas.style.backgroundImage = "url('../../images/family.jpg')";
//         gridCanvas.style.backgroundSize = "contain";  // Fix here
//     } else if (inputValue !== "") {
//         picasso();
//     }
// }





