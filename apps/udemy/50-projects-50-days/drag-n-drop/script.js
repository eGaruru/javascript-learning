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

function dragStart(e) {
  const currentTarget = e.currentTarget;

  draggedItem = currentTarget;

  currentTarget.classList.add('hold');
  // To take time to add hold class
  setTimeout(() => {
    currentTarget.classList.remove('fill', 'hold');
    currentTarget.classList.add('invisible');
  }, 0);
}

function dragEnd(e) {
  const currentTarget = e.currentTarget;

  currentTarget.classList.remove('invisible');
  currentTarget.classList.add('fill');
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  e.currentTarget.classList.add('hovered');
}

function dragLeave(e) {
  e.currentTarget.classList.remove('hovered');
}

function dragDrop(e) {
  const currentTarget = e.currentTarget;

  currentTarget.classList.remove('hovered');
  currentTarget.classList.add('empty');
  currentTarget.append(draggedItem);
  draggedItem = null;
}

function dragEnterTrash(e) {
  e.preventDefault();
  e.currentTarget.classList.add('trash-hovered');
}

function dragLeaveTrash(e) {
  e.currentTarget.classList.remove('trash-hovered');
}

function dragDropTrash(e) {
  e.currentTarget.classList.remove('trash-hovered');

  if (draggedItem) {
    draggedItem.remove();
    draggedItem = null;
  }
}
