
// Grid Creation

const standardGridRowCount = 16
const standardRowSquareCount = 16
var userInputGridRowCount = 0
var userInputGridSquareCount = 0


function createGrid(gridSize) {
    for (i=1; i <= gridSize; i++) { 
        grid = document.getElementById('grid-container')
        gridRow = createRow(i)
        grid.appendChild(gridRow)
}}

function createSquare() {
    let individualSquare = Object.assign(document.createElement("div"), { className: 'individualSquare' })
    return individualSquare
}

function createRow(rowCount) {
    let rowID = "row-" + rowCount 
    let gridRow = Object.assign(document.createElement("div"), { id: rowID }, {className: "grid-row"} )
    for (j=1; j <= standardRowSquareCount; j++) {
        individualSquare = createSquare()
        squareID = "square-"+String(rowCount)+"-"+String(j)
        individualSquare.id = squareID
        gridRow.appendChild(individualSquare)
    }    
    return gridRow  
}

createGrid(standardGridRowCount)

// Event Listeners/Animation
