//create grid pattern
const slider = document.querySelector('#slider');
const container = document.querySelector('#container');
const resetBtn = document.querySelector('#reset-btn');
const lineBtn = document.querySelector('#line-btn');

function setGridLines(){
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

function colorTarget(evt) {
    evt.target.classList.add('colored-squares');
}
container.addEventListener('mouseover', colorTarget)

function toggleLines (){
let containerChildNodes = container.childNodes;
containerChildNodes.forEach((child) => {
        child.classList.toggle('lines')
        }
    )
}

lineBtn.addEventListener('click', () => {
  toggleLines()
    }
)

//toggle the text inside the button
//create a button to generate random rgb values