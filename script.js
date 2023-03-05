//create grid pattern
const slider = document.querySelector('#slider');
const container = document.querySelector('#container');
const resetBtn = document.querySelector('#reset-btn');
const lineBtn = document.querySelector('#line-btn');
const colorBlack = document.querySelector('#color-black')
const randomColor = document.querySelector('#random-color')
let containerChildNodes = container.childNodes;

function setGridLines(){
    container.style.backgroundColor = 'white';
    let sliderSqrt = Math.sqrt(Math.pow(slider.value,2))
    container.style.gridTemplateRows = `repeat(${sliderSqrt}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${sliderSqrt}, 1fr)`;
} 
function generateSquareArea(){
    container.textContent ='';
    for(let i = 0; i < Math.pow(slider.value, 2); i++){
    const div = document.createElement('div');
    container.append(div);
    }
}
slider.addEventListener ('input', () => {
    setGridLines()
    generateSquareArea()
    }
)

resetBtn.addEventListener('click', () => {
    setGridLines()
    generateSquareArea()
    }
)

function fillBlack(evt) {
    evt.target.classList.add('black-fill');
}
container.addEventListener('mouseover',fillBlack)

function toggleLines (){
containerChildNodes.forEach((child) => {
        child.classList.toggle('lines')
        }
    )
}

lineBtn.addEventListener('click',toggleLines)

function toRandomColor(evt){
    let random = () => Math.floor(Math.random()*258);
    evt.target.style.backgroundColor = `rgb(${random()}, ${random()}, ${random()})`
}

//  Notes:
//      random button activates the colors
//      one should activate and the other register the 
//      color change
//  toggle the text inside the button
//  create a button to generate random rgb values
