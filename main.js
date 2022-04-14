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
const colorPicker = document.getElementById("colorPicker");

clearBtn.onclick = () => resetGrid();
sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value);
sizeSlider.onchange = (e) => changeSize(e.target.value);
rainbowBtn.onclick = () => changeMode("rainbowMode");
colorBtn.onclick = () => changeMode("colorMode");
eraserBtn.onclick = () => changeMode("eraserMode");
colorPicker.onchange = (e) => changeColor(e.target.value);

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

function changeMode(newMode) {
    currentMode = newMode;
}

function changeColor(newColor) {
    currentColor = newColor;
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
    if (currentMode === "colorMode") {
    e.target.style.backgroundColor = currentColor;
    } else if (currentMode === "rainbowMode") {
        const randomR = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    } else if (currentMode === "eraserMode") {
        e.target.style.backgroundColor = "#fefefe";
    }
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