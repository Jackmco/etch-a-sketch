// Grid Creation

const standardGridRowCount = 16
const standardRowSquareCount = 16
var userInputGridRowCount = 0
var userInputGridSquareCount = 0

gridSquares = document.getElementsByClassName("individualSquare")
gridContainer = document.getElementById("grid-container")

function createGrid(gridSize) {
    let delta = .1
    for (i=1; i <= gridSize; i++) { 
        grid = document.getElementById('grid-container')
        gridRow = createRow(i, gridSize) // gridSize equals how many squares should be in a row
        grid.appendChild(gridRow)
    }
    console.log("Grid created")
    for (i=0; i < gridSquares.length; i++) { 
        gridSquares[i].addEventListener('mouseover', (changeColor) => {
            let randomRedValue = getRGBInteger(1,255)
            let randomGreenValue = getRGBInteger(1,255)
            let randomBlueValue = getRGBInteger(1,255)
            randomColorValue = "rgb(" + randomRedValue + ", " + randomGreenValue + ", " + randomBlueValue + ")"
            changeColor.target.style.background = randomColorValue
            changeColor.target.style.opacity = Number(changeColor.target.style.opacity) + 0.1   
            console.log(changeColor.target.style.opacity)         
            })
    }
    console.log("Hover event listener set")
}

function createSquare() {
    let individualSquare = Object.assign(document.createElement("div"), { className: 'individualSquare' })
    individualSquare.style.background = "white"
    return individualSquare
}

function createRow(rowCount, squareCount) {
    let rowID = "row-" + rowCount 
    let gridRow = Object.assign(document.createElement("div"), { id: rowID }, {className: "grid-row"} )
    for (j=1; j <= squareCount; j++) {
        individualSquare = createSquare()
        squareID = "square-"+String(rowCount)+"-"+String(j)
        individualSquare.id = squareID
        gridRow.appendChild(individualSquare)
    }    
    return gridRow  
}

createGrid(standardGridRowCount) // Creating Grid

// Create custom grid
newCustomGridButton = document.getElementById("new-custom-grid-button")
newCustomGridButton.addEventListener("click", (makeCustomGrid) => {
    userInputGridRowCount = prompt("How large should the square grid be? (Pick a number 1-100)")
    userInputGridSquareCount = userInputGridRowCount
    gridContainer.innerHTML = ""
    createGrid(userInputGridRowCount)
})

// Clear button
clearButton = document.getElementById("clear-button")
clearButton.addEventListener("click", (clearSquare) => {
    for (i=0; i < gridSquares.length; i++) { 
        gridSquares[i].style.background = "white"
    }
    console.log("Grid cleared")
}) 

// Create fresh standard grid
newStandardGridButton = document.getElementById("new-standard-grid-button")
newStandardGridButton.addEventListener("click", (makeStandardGrid) => {
    gridContainer.innerHTML = ""
    createGrid(standardGridRowCount)
})

function getRGBInteger(min, max) {
    return String(Math.floor(Math.random() * (max - min) ) + min)
  }