// Set button clicked (8, 16, 32 or 64) to be the grid size
// function setPixels() {
// let btns = document.querySelectorAll("btn");
//btns.forEach((btn) =>
  //  btn.addEventListener("click", () => {
    //  size = btn.id;
    //})
  //);
//}

// Create grid of divs
function populatePixels () {
let sketchContainer = document.querySelector(".sketch-container");
sketchContainer.style.gridTemplateColumns = "repeat(16, 1fr)";
sketchContainer.style.gridTemplateRows = "repeat(16, 1fr)";

    for (let i = 0; i < 256; i++) {
        let pixel = document.createElement("div");
        pixel.style.backgroundColor = "lightgrey";
        sketchContainer.insertAdjacentElement("beforeend", pixel);
    }
}

populatePixels();

// Create a hover effect on pixels

// When mouse over pixel, change div type to color