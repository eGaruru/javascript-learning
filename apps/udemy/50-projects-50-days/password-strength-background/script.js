// my code
const background = document.getElementById('background');
const password = document.getElementById('password');

password.addEventListener('input', (e) => {
  const input = e.target.value;
  const length = input.length;

  const blur = length === 0 ? 20 : Math.max(0, 20 - length * 2);
  background.style.filter = `blur(${blur}px)`;
});

// Brad's code
// const password = document.getElementById('password');
// const background = document.getElementById('background');

// password.addEventListener('input', (e) => {
//   const input = e.target.value;
//   const length = input.length;
//   const blurValue = 20 - length * 2;
//   background.style.filter = `blur(${blurValue}px)`;
// });
