const SIZE = 640; //the number of pixels in the grid
const NUM_CELLS = 32; //the number of cells on each axis of the grid
const CELL_SIZE = SIZE / NUM_CELLS; 


const canvas = document.querySelector('.canvas');


for (let i = 0; i < NUM_CELLS * NUM_CELLS; i++){
  const div  = document.createElement('div');
  div.classList.add('cell');
  div.style.width = `${CELL_SIZE}px`; 
  div.style.height = `${CELL_SIZE}px`; 
  div.addEventListener('mouseover', () => {
    div.style.background = 'black';
    console.log('this is happening');
  })
  canvas.appendChild(div);
}
