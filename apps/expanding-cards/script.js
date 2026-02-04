const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses()
    panel.classList.add('active')
  })
})

// remove active class from all node list(panels)
function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove('active')
  })
}
