//create grid pattern
const slider = document.querySelector('#slider');
const container = document.querySelector('#container');
const resetBtn = document.querySelector('#reset')

function setGridLines(){
  let sliderSqrt = Math.sqrt(Math.pow(slider.value,2))
  container.style.gridTemplateRows = `repeat(${sliderSqrt}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${sliderSqrt}, 1fr)`;
} 

function generateSquareArea(){
    container.textContent ='';
    for(let i = 0; i < Math.pow(slider.value, 2); i++){
    const div = document.createElement('div');
    div.style.border ='1px solid';
    container.append(div);
    }
}

function colorTarget(evt) {
  evt.target.classList.add('colored-squares');
}

function resetGrid() {
  console.log(container.classList)
} 

slider.addEventListener ('input', () => {
    setGridLines()
    generateSquareArea()
})

resetBtn.addEventListener('click', () => {
  setGridLines()
  generateSquareArea()
})

container.addEventListener('mouseover', colorTarget)
