// my code
const contents = document.querySelectorAll('.content');
const listItems = document.querySelectorAll('nav ul li');

listItems.forEach((item, idx) => {
  item.addEventListener('click', () => {
    reset();
    item.classList.add('active');
    contents[idx].classList.add('show');
  });
});

function reset() {
  removeClass(contents, 'show');
  removeClass(listItems, 'active');
}

function removeClass(elements, className) {
  elements.forEach((el) => el.classList.remove(className));
}

// Brad's code
// const contents = document.querySelectorAll('.content');
// const listItems = document.querySelectorAll('nav ul li');

// listItems.forEach((item, idx) => {
//   item.addEventListener('click', () => {
//     hideAllContents();
//     hideAllItems();

//     item.classList.add('active');
//     contents[idx].classList.add('show');
//   });
// });

// function hideAllContents() {
//   contents.forEach((content) => content.classList.remove('show'));
// }

// function hideAllItems() {
//   listItems.forEach((item) => item.classList.remove('active'));
// }
