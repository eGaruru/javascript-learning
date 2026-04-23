const fills = document.querySelectorAll('.fill');
const empries = document.querySelectorAll('.empty');
const trashBoxEl = document.getElementById('trash-box');

for (const fill of fills) {
  fill.addEventListener('dragstart', dragStart);
  fill.addEventListener('dragend', dragEnd);
}

trashBoxEl.addEventListener('dragover', dragOver);
trashBoxEl.addEventListener('dragenter', dragEnterTrash);
trashBoxEl.addEventListener('dragleave', dragLeaveTrash);
trashBoxEl.addEventListener('drop', dragDropTrash);

for (const empty of empries) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}

let draggedItem = null;

function dragStart() {
  draggedItem = this;

  this.className += ' hold';
  // To take time to add hold class
  setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd() {
  this.className = 'fill';
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.className += ' hovered';
}

function dragLeave() {
  this.className = 'empty';
}

function dragDrop() {
  this.className = 'empty';
  this.append(draggedItem);
  draggedItem = null;
}

function dragEnterTrash(e) {
  e.preventDefault();
  this.classList.add('trash-hovered');
}

function dragLeaveTrash() {
  this.classList.remove('trash-hovered');
}

function dragDropTrash(e) {
  this.classList.remove('trash-hovered');

  if (draggedItem) {
    draggedItem.remove();
    draggedItem = null;
  }
}
