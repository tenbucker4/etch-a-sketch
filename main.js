function startSketch() {
    populatePixels(16);
    clearPixels();
}

function setGridSize(input) {
    if (input >= 2 || input <= 100) {
        populatePixels(input);
    } else {
        return;
    }
}

function populatePixels (size) {
let sketchContainer = document.querySelector(".sketch-container");
let squares = sketchContainer.querySelectorAll("div");
squares.forEach((div) => div.remove());
sketchContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
sketchContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

let sizeSquared = size * size
for (let i = 0; i < sizeSquared; i++) {
    let pixel = document.createElement("div");
    pixel.addEventListener("mouseover", () => {
        pixel.style.backgroundColor = "black";
    });
    sketchContainer.insertAdjacentElement("beforeend", pixel);
    }
}

function clearPixels() {
    let clearButton = document.querySelector(".clear-button");
    clearButton.addEventListener("click", () => {
        populatePixels();
    });
}

startSketch();