const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEL = document.getElementById('size');
const colorEl = document.getElementById('color');
const toolBtn = document.getElementById('tool');
const clearEl = document.getElementById('clear');

const ctx = canvas.getContext('2d');

const TOOLS = {
  pen: {
    icon: '<i class="fa-solid fa-pen" data-tool="pen"></i>',
    composite: 'source-over',
  },
  eraser: {
    icon: '<i class="fa-solid fa-eraser" data-tool="eraser"></i>',
    composite: 'destination-out',
  },
};

let size = 10;
let color = 'black';
let isPressed = false;
let x;
let y;
let tool = 'pen';

canvas.addEventListener('mousedown', (e) => {
  isPressed = true;

  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener('mouseup', (e) => {
  isPressed = false;

  x = undefined;
  y = undefined;
});

canvas.addEventListener('mousemove', (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2, true);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

function updateSizeOnScreen() {
  sizeEL.innerText = size;
}

function updatePainterTypeOnScreen() {
  toolBtn.innerHTML = TOOLS[tool].icon;
}

increaseBtn.addEventListener('click', () => {
  size += 5;

  if (size > 50) {
    size = 50;
  }

  updateSizeOnScreen();
});

decreaseBtn.addEventListener('click', () => {
  size -= 5;

  if (size < 5) {
    size = 5;
  }

  updateSizeOnScreen();
});

colorEl.addEventListener('change', (e) => (color = e.target.value));

toolBtn.addEventListener('click', () => {
  const isPen = tool === 'pen';
  tool = isPen ? 'eraser' : 'pen';

  applyTool();
  updatePainterTypeOnScreen();
});

clearEl.addEventListener('click', () =>
  ctx.clearRect(0, 0, canvas.width, canvas.height),
);

function applyTool() {
  ctx.globalCompositeOperation = TOOLS[tool].composite;
}
