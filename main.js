const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = "black";
const DEFAULT_MODE = "colorMode"

let currentSize = DEFAULT_SIZE;
let currentColor = DEFAULT_COLOR;
let currentMode = DEFAULT_MODE;

const grid = document.getElementById("grid");
const clearBtn = document.getElementById("clearBtn");
const sizeSlider = document.getElementById("sizeSlider");
const sizeValue = document.getElementById("sizeValue");
const colorBtn = document.getElementById("colorBtn");
const rainbowBtn = document.getElementById("rainbowBtn");
const eraserBtn = document.getElementById("eraserBtn");

clearBtn.onclick = () => resetGrid();
sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value)
sizeSlider.onchange = (e) => changeSize(e.target.value)

function changeSize(value) {
    setSize(value);
    updateSizeValue(value);
    resetGrid();
}

function updateSizeValue(value) {
    sizeValue.textContent = `${value} x ${value}`;
}

function setSize(newSize) {
    currentSize = newSize
}

function populateGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("grid-element");
        gridSquare.addEventListener("mouseover", draw)
        grid.appendChild(gridSquare);
    }
}

function draw(e) {
    e.target.style.backgroundColor = "black";
}

function resetGrid() {
    clearGrid();
    populateGrid(currentSize);
}

function clearGrid() {
    grid.innerHTML = "";
}

window.onload = () => {
    populateGrid(DEFAULT_SIZE);
}