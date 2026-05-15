// my code
const boxes = document.getElementById('boxes');
const toggleBtn = document.getElementById('btn');

const COLUMN_LENGTH = 4;
const ROW_LENGTH = 4;
const BOX_SIZE = 125;

for (let i = 0; i < ROW_LENGTH; i++) {
  for (let j = 0; j < COLUMN_LENGTH; j++) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.backgroundPosition = `-${j * BOX_SIZE}px -${i * BOX_SIZE}px`;
    boxes.appendChild(box);
  }
}

toggleBtn.addEventListener('click', () => boxes.classList.toggle('big'));

// Brad's code
// const boxesContainer = document.getElementById('boxes');
// const btn = document.getElementById('btn');

// btn.addEventListener('click', () => boxesContainer.classList.toggle('big'));

// function createBoxes() {
//   for (let i = 0; i < 4; i++) {
//     for (let j = 0; j < 4; j++) {
//       const box = document.createElement('div');
//       box.classList.add('box');
//       box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
//       boxesContainer.appendChild(box);
//     }
//   }
// }

// createBoxes();
