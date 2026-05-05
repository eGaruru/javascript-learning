const textEl = document.getElementById('text');
const form = document.getElementById('input-text');
const writingEl = document.getElementById('writing');
const speedEl = document.getElementById('speed');

let currentText = 'We Love Programming!';
let idx = 1;
let speed = 300 / speedEl.value;
let timeoutId = null;

writeText(currentText);

function writeText(text) {
  textEl.innerText = text.slice(0, idx);

  idx++;

  if (idx > text.length) {
    idx = 1;
  }

  if (timeoutId) clearTimeout(timeoutId);
  timeoutId = setTimeout(() => writeText(text), speed);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const newText = writingEl.value;
  if (!newText) return;
  currentText = newText;
  idx = 1;
  speed = 300 / speedEl.value;
  writeText(newText);
});
