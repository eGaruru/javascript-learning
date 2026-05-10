// my code
const imageContainer = document.getElementById('imgs');
const images = imageContainer.querySelectorAll('img');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

const IMAGE_WIDTH = 500;

let currentIndex = 0;

let interval = setInterval(() => slide('right'), 2000);

leftBtn.addEventListener('click', () => slide('left'));

rightBtn.addEventListener('click', () => slide('right'));

function slide(direction) {
  direction === 'right' ? toNext() : toPrev();
  displayNextImage();
  resetInterval();
}

function toPrev() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
}

function toNext() {
  currentIndex++;
  if (currentIndex > images.length - 1) {
    currentIndex = 0;
  }
}

function displayNextImage() {
  imageContainer.style.transform = `translateX(-${IMAGE_WIDTH * currentIndex}px)`;
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(() => slide('right'), 2000);
}

// Brad's code
// const imgs = document.getElementById('imgs');
// const leftBtn = document.getElementById('left');
// const rightBtn = document.getElementById('right');

// const img = document.querySelectorAll('#imgs img');

// let idx = 0;

// let interval = setInterval(run, 2000);

// function run() {
//   idx++;

//   changeImage();
// }

// function changeImage() {
//   if (idx > img.length - 1) {
//     idx = 0;
//   } else if (idx < 0) {
//     idx = img.length - 1;
//   }

//   imgs.style.transform = `translateX(-${500 * idx}px)`;
// }

// function resetInterval() {
//   clearInterval(interval);
//   interval = setInterval(run, 2000);
// }

// rightBtn.addEventListener('click', () => {
//   idx++;

//   changeImage();
//   resetInterval();
// });

// leftBtn.addEventListener('click', () => {
//   idx--;

//   changeImage();
//   resetInterval();
// });
