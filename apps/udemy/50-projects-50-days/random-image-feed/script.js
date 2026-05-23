// my code
const container = document.querySelector('.container');

const URL = 'https://picsum.photos/';
const MAX_ID = 1000;
const IMAGE_WIDTH = 300;
const IMAGE_HEIGHT = 300;
const COLUMN = 3;
const ROW = 5;

init();

function init() {
  updateFeed();
  setInterval(updateFeed, 10000);
}

function updateFeed() {
  container.replaceChildren();
  createFeed();
}

function createFeed() {
  const fragmentRow = document.createDocumentFragment();

  for (let i = 0; i < ROW; i++) {
    const row = document.createElement('div');
    row.classList.add('row');

    for (let j = 0; j < COLUMN; j++) {
      const img = document.createElement('img');
      img.src = createImgUrl();
      img.onerror = function () {
        this.src = createImgUrl();
      };

      row.appendChild(img);
    }

    fragmentRow.appendChild(row);
  }

  container.appendChild(fragmentRow);
}

function createImgUrl() {
  const id = getRandomId();
  return `${URL}id/${id}/${IMAGE_WIDTH}/${IMAGE_HEIGHT}`;
}

function getRandomId() {
  return Math.floor(Math.random() * MAX_ID + 1);
}

// Brad's code *Replaced unsplash URL to picsum URL
// const container = document.querySelector('.container');
// const baseURL = 'https://picsum.photos/';
// const rows = 10;

// for (let i = 0; i < rows * 3; i++) {
//   const img = document.createElement('img');
//   img.src = `${baseURL}${getRandomSize()}`;
//   container.appendChild(img);
// }

// function getRandomSize() {
//   return `${getRandomNr()}/${getRandomNr()}`;
// }

// function getRandomNr() {
//   return Math.floor(Math.random() * 10) + 300;
// }
