//create grid pattern
const slider = document.querySelector('#slider');

function setGridLines(){
    let sliderSqrt = Math.sqrt(Math.pow(slider.value,2))
    const container = document.querySelector('#container');
    container.style.gridTemplateRows = `repeat(${sliderSqrt}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${sliderSqrt}, 1fr)`;
}

function generateSquares(){
    for(let i = 0; i < Math.pow(slider.value,2); i++){ 
    const container = document.querySelector('#container');
    const div = document.createElement('div');
    div.style.border ='1px solid';
    container.append(div);
    }
}

slider.addEventListener ('input', () => {
    setGridLines()
    generateSquares()
})

//zero grid needs to start at 0
//clear grid when new selection is made