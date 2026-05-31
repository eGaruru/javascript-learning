'use strict';

const MODAL_DATA = [
  {
    title: `I'm a modal window 1 😍`,
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.`,
  },
  {
    title: `I'm a modal window 2 🥰`,
    content: `      
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi id corrupti magni esse ipsum consequuntur itaque. Minus eveniet consectetur commodi rerum perspiciatis. Quod aliquam aspernatur, numquam vel nesciunt illum, quos assumenda natus tenetur officia in! Eum placeat consequuntur tempore magnam vero eaque est nisi sed. Cumque natus repellendus similique eaque, obcaecati id repudiandae, quidem laboriosam quasi quis assumenda voluptate quibusdam dicta, nostrum cum. Illum nihil molestiae ipsam quod quia. Accusamus, expedita nam a ratione dolore in reprehenderit cupiditate quo voluptatum itaque aspernatur laudantium consectetur rem ad, saepe, quam ducimus sunt ipsum pariatur libero! Pariatur mollitia veniam, modi libero soluta similique?`,
  },
  {
    title: `I'm a modal window 3 😘`,
    content: `
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt labore eos numquam reprehenderit soluta? Ea saepe perspiciatis mollitia molestias unde non, voluptatum at nesciunt, quas aliquam eveniet, cum necessitatibus dicta minima voluptas ipsam veritatis optio tempore deserunt iusto? Debitis praesentium error, laudantium quasi natus reprehenderit ducimus saepe iste nisi libero.`,
  },
];

const modal = document.querySelector('.modal');
const title = modal.querySelector('h1');
const content = modal.querySelector('p');

const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// Use button element for event listener
btnsOpenModal.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    if (!MODAL_DATA[i]) return;

    title.textContent = MODAL_DATA[i].title;
    content.textContent = MODAL_DATA[i].content;
    openModal();
  });
});

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
