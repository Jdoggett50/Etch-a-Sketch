//create grid pattern
const slider = document.querySelector('#slider');
const grid = document.querySelector('#grid');
const resetBtn = document.querySelector('#reset-btn');
const lineBtn = document.querySelector('#line-btn');
let myFill = document.querySelector('#my-fill') 

function setGridLines(){
    let sliderSqrt = Math.sqrt(Math.pow(slider.value,2))
    grid.style.backgroundColor ='white';
    grid.style.gridTemplateRows = `repeat(${sliderSqrt}, 1fr)`;
    grid.style.gridTemplateColumns = `repeat(${sliderSqrt}, 1fr)`;
} 
function generateSquareArea(){
    grid.textContent ='';
    for(let i = 0; i < Math.pow(slider.value, 2); i++){
    const div = document.createElement('div');
    grid.append(div);
    }
}

function fillBlack(evt) {
  evt.target.style.border = '1px solid';
  evt.target.style.backgroundColor ='black';
}

function toggleLines (){
  // container.classList.toggle('lines')
  let gridChildNodes = grid.childNodes;
  gridChildNodes.forEach((child) => {
    child.classList.toggle('lines')
    }
)}

function randomColor(evt){
  let random = () => Math.floor(Math.random()*258);
  evt.target.style.border = `rgb(${random()},${random()},${random()})`;
  evt.target.style.backgroundColor =`rgb(${random()},${random()},${random()})`;
}

myFill.addEventListener('input',() => {
  if(myFill.value.toLowerCase() == 'black')   {
    grid.removeEventListener('mouseover',randomColor);
    grid.addEventListener('mouseover', fillBlack);
  } else if (myFill.value.toLowerCase() == 'random'){ 
    grid.removeEventListener('mouseover', fillBlack);
    grid.addEventListener('mouseover', randomColor);
  } else if(myFill.value.toLowerCase() == 'none'){        
    grid.removeEventListener('mouseover',randomColor);
    grid.removeEventListener('mouseover',fillBlack);
  }
})

lineBtn.addEventListener('click', () => {
    toggleLines()
    }
  )

  slider.addEventListener ('input', () => {
    setGridLines()
    generateSquareArea()
    }
)

resetBtn.addEventListener('click', () => {
    grid.removeEventListener('mouseover', fillBlack);
    grid.removeEventListener('mouseover',randomColor);
    myFill.value = 'None';
    setGridLines()
    generateSquareArea()
    }
)