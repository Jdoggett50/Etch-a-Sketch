let numberOfSquares = 4;

function getNumberOfSquares(){
    for(let i = 0; i < numberOfSquares; i++){
    //if using grid-can indicate grid lines depending on 
    const container = document.querySelector('#container');
    const div = document.createElement('div');
    div.style.border ='1px solid'
    container.append(div)
    }
}   getNumberOfSquares()

//determine placement
const selectionSquared = () => {
    return numberOfSquares * numberOfSquares
}

console.log(selectionSquared())

//# of rows and columns 
function setGridArea(){
    const container = document.querySelector('#container');
    container.style.gridTemplateRows = `repeat(2, 1fr)`;
    container.style.gridTemplateColumns = `repeat(2, 1fr)`;
} setGridArea()

