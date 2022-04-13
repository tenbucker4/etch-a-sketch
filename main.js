function startSketch() {
    populatePixels();
    clearPixels();
}

// Create grid of divs
function populatePixels () {
let sketchContainer = document.querySelector(".sketch-container");
let squares = sketchContainer.querySelectorAll("div");
squares.forEach((div) => div.remove());
sketchContainer.style.gridTemplateColumns = "repeat(16, 1fr)";
sketchContainer.style.gridTemplateRows = "repeat(16, 1fr)";

for (let i = 0; i < 256; i++) {
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

// Create a hover effect on pixels

// When mouse over pixel, change div type to selected color