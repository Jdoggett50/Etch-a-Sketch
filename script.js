//create grid pattern
const slider = document.querySelector('#slider');
const container = document.querySelector('#container');
const resetBtn = document.querySelector('#reset-btn');
const lineBtn = document.querySelector('#line-btn');
let myFill = document.querySelector('#my-fill') 

function setGridLines(){
    let sliderSqrt = Math.sqrt(Math.pow(slider.value,2))
    container.style.backgroundColor ='white';
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

function fillBlack(evt) {
    evt.target.style.backgroundColor ='black'
}

function toggleLines (){
  // container.classList.toggle('lines')
  let containerChildNodes = container.childNodes;
  containerChildNodes.forEach((child) => {
    child.classList.toggle('lines')
    }
)}

function randomColor(evt){
  let random = () => Math.floor(Math.random()*258);
  evt.target.style.backgroundColor =`rgb(${random()},${random()},${random()})`
}

myFill.addEventListener('input',() => {
  if(myFill.value.toLowerCase() == 'black')   {
    container.removeEventListener('mouseover',randomColor);
    container.addEventListener('mouseover', fillBlack);
  } else if (myFill.value.toLowerCase() == 'random'){ 
    container.removeEventListener('mouseover', fillBlack);
    container.addEventListener('mouseover', randomColor);
  } else if(myFill.value.toLowerCase() == 'none'){        
    container.removeEventListener('mouseover',randomColor);
    container.removeEventListener('mouseover',fillBlack);
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
    container.removeEventListener('mouseover', fillBlack);
    container.removeEventListener('mouseover',randomColor);
    myFill.value = 'None';
    setGridLines()
    generateSquareArea()
    }
)