const panelDiv = document.querySelector(".panel-div");
const size = 64;
let isMouseDown = false; // Track mouse button state
let selectedColor = "black"; // Default color

// Add event listeners to track mouse button state
document.addEventListener("mousedown", () => {
    isMouseDown = true;
});

document.addEventListener("mouseup", () => {
    isMouseDown = false;
});

function createGrid(size) {
    panelDiv.innerHTML = ""; // Clear existing grid
    for (let i = 0; i < size; i++) {
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("row-div");
        for (let j = 0; j < size; j++) {
            const cellDiv = document.createElement("div");
            cellDiv.classList.add("cell-div");
            cellDiv.addEventListener("mouseover", () => {
                if (isMouseDown) {
                    cellDiv.style.backgroundColor = selectedColor; // Use selected color
                }
            });
            rowDiv.appendChild(cellDiv);
        }
        panelDiv.appendChild(rowDiv);
    }
}

createGrid(size); // Initial grid creation

const clearButton = document.querySelector("#clear-button");
clearButton.addEventListener("click", () => {
    const cellDivs = document.querySelectorAll(".cell-div");
    cellDivs.forEach(cell => {
        cell.style.backgroundColor = "white"; // Clear colors
    });
});

const colorButtons = document.querySelectorAll(".color-button");
colorButtons.forEach(button => {
    button.addEventListener("click", () => {
        selectedColor = button.style.backgroundColor; // Update selected color
    });
});