//store the input from form
let userInput = prompt('what is your number?');
let squared = Math.pow(userInput,2)
let sqrt = Math.sqrt(squared)
console.log(squared)
console.log(sqrt)


//# of rows and columns
function setGridLines(){
    const container = document.querySelector('#container');
    container.style.gridTemplateRows = `repeat(${sqrt}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${sqrt}, 1fr)`;
} setGridLines()


function getNumberOfSquares(){
    for(let i = 0; i < squared; i++){ 
    const container = document.querySelector('#container');
    const div = document.createElement('div');
    div.style.border ='1px solid'
    container.append(div)
    }
}   getNumberOfSquares()