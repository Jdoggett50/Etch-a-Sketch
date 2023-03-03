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
    div.classList.add('toggle-lines')
    container.append(div);
    }
}

function colorTarget(evt) {
    evt.target.classList.add('colored-squares');
}

slider.addEventListener ('input', () => {
    setGridLines()
    generateSquareArea()
    console.log(innerDivLines)
    }
)

resetBtn.addEventListener('click', () => {
    setGridLines()
    generateSquareArea()
    }
)

container.addEventListener('mouseover', colorTarget)

lineBtn.addEventListener('click', () => {
    innerDivLines.classList.remove('toggle-lines')
})
