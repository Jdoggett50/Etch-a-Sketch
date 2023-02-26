//create grid pattern
const boxCount = document.querySelector('#box-count');
const sliderInput = boxCount.value;
let squared = Math.pow(sliderInput,2);
let sqrt = Math.sqrt(squared);

function setGridLines(){
    const container = document.querySelector('#container');
    container.style.gridTemplateRows = `repeat(${sqrt}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${sqrt}, 1fr)`;
} setGridLines()

function generateSquares(){
    for(let i = 0; i < squared; i++){ 
    const container = document.querySelector('#container');
    const div = document.createElement('div');
    div.style.border ='1px solid';
    container.append(div);
    }
} generateSquares()

