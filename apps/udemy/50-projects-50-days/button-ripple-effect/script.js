const colors = [
  'rgb(255, 255, 255)',
  'rgb(191, 255, 0)',
  'rgb(0, 255, 255)',
  'rgb(255, 0, 255)',
  'rgb(255, 235, 59)',
  'rgb(255, 165, 0)',
];

// To adapt same effect for multiple buttons
const buttons = document.querySelectorAll('.ripple');

buttons.forEach((button) => {
  button.addEventListener('click', function (e) {
    const x = e.clientX;
    const y = e.clientY;

    const buttonLeft = e.target.offsetLeft; // x axis
    const buttonTop = e.target.offsetTop; // y axis

    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    const circle = document.createElement('span');
    circle.classList.add('circle');
    circle.style.top = yInside + 'px';
    circle.style.left = xInside + 'px';

    const randomColor = colors[getRandomIndex(colors.length)];

    // Sometimes a color similar to purple appears
    // const randomColor = `rgb(${getRandomNumber(0, 255)},${getRandomNumber(0, 255)},${getRandomNumber(0, 255)})`;

    circle.style.backgroundColor = randomColor;

    this.appendChild(circle);

    setTimeout(() => circle.remove(), 500);
  });
});

function getRandomIndex(length) {
  return Math.floor(Math.random() * length);
}

// function getRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
