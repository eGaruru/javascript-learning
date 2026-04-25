const fills = document.querySelectorAll('.fill');
const empties = document.querySelectorAll('.empty');
const trashBoxEl = document.getElementById('trash-box');
const fileInputEl = document.getElementById('file-input');
const uploadIcons = document.querySelectorAll('.upload-icon');

for (const fill of fills) {
  fill.addEventListener('dragstart', dragStart);
  fill.addEventListener('dragend', dragEnd);
}

trashBoxEl.addEventListener('dragover', dragOver);
trashBoxEl.addEventListener('dragenter', dragEnterTrash);
trashBoxEl.addEventListener('dragleave', dragLeaveTrash);
trashBoxEl.addEventListener('drop', dragDropTrash);

for (const empty of empties) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}

for (const icon of uploadIcons) {
  icon.addEventListener('click', clickUploadIcon);
}

fileInputEl.addEventListener('change', (e) => {
  const file = e.target.files[0];

  if (!file) {
    alert('No file selected. Please try again.');
    uploadTarget = null;
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    const fillNew = document.createElement('div');
    fillNew.classList.add('fill');
    fillNew.setAttribute('draggable', 'true');
    fillNew.style.backgroundImage = `url('${reader.result}')`;

    fillNew.addEventListener('dragstart', dragStart);
    fillNew.addEventListener('dragend', dragEnd);

    uploadTarget.replaceChildren();
    uploadTarget.append(fillNew);

    uploadTarget = null;
    fileInputEl.value = '';
  };

  reader.readAsDataURL(file);
});

fileInputEl.addEventListener('cancel', () => {
  uploadTarget = null;
  return;
});

let draggedItem = null;
let uploadTarget = null;

function clickUploadIcon(e) {
  const emptyEl = e.currentTarget.parentElement;
  if (emptyEl.querySelector('.fill')) return;

  uploadTarget = emptyEl;
  fileInputEl.click();
}

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
  const parentEmpty = draggedItem.parentElement;

  const prevfill = e.currentTarget.querySelector('.fill');
  if (prevfill) {
    parentEmpty.append(prevfill);
  } else {
    restoreUploadIcon(parentEmpty);
  }

  currentTarget.classList.remove('hovered');
  currentTarget.classList.add('empty');

  const prevIcon = currentTarget.querySelector('.upload-icon');
  if (prevIcon) prevIcon.remove();

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
    const parentEmpty = draggedItem.parentElement;
    restoreUploadIcon(parentEmpty);

    draggedItem.remove();
    draggedItem = null;
  }
}

// --- Helper --- //
function restoreUploadIcon(targetEl) {
  const iconEl = document.createElement('i');
  iconEl.classList.add('fa-solid', 'fa-plus', 'upload-icon');
  iconEl.addEventListener('click', clickUploadIcon);
  targetEl.append(iconEl);
}
