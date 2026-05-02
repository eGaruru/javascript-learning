const sliderContainer = document.querySelector('.slider-container');
const sliderRight = document.querySelector('.right-slide');
const sliderLeft = document.querySelector('.left-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');

const slidesLength = sliderLeft.querySelectorAll('div').length;

// create clones and add in slides
const firstRightClone = sliderRight.firstElementChild.cloneNode(true);
const lastReightClone = sliderRight.lastElementChild.cloneNode(true);
const firstLeftClone = sliderLeft.firstElementChild.cloneNode(true);
const lastLeftClone = sliderLeft.lastElementChild.cloneNode(true);

sliderRight.appendChild(firstRightClone);
sliderRight.prepend(lastReightClone);
sliderLeft.appendChild(firstLeftClone);
sliderLeft.prepend(lastLeftClone);

let activeSlideIndex = 1;

// initial setting
sliderLeft.style.top = `-${(slidesLength + 1) * 100}vh`;

calculateDisplayHeight();

upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

const changeSlide = (direction) => {
  sliderLeft.style.transition = 'transform 0.5s ease-in-out';
  sliderRight.style.transition = 'transform 0.5s ease-in-out';

  if (direction === 'up') {
    activeSlideIndex++;
  } else if (direction === 'down') {
    activeSlideIndex--;
  }

  calculateDisplayHeight();
};

sliderRight.addEventListener('transitionend', () => {
  if (activeSlideIndex === slidesLength + 1) {
    sliderLeft.style.transition = 'none';
    sliderRight.style.transition = 'none';
    activeSlideIndex = 1;
  } else if (activeSlideIndex === 0) {
    sliderLeft.style.transition = 'none';
    sliderRight.style.transition = 'none';
    activeSlideIndex = slidesLength;
  }

  calculateDisplayHeight();
});

function calculateDisplayHeight() {
  const sliderHeight = sliderContainer.clientHeight;

  sliderRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;

  sliderLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
}
