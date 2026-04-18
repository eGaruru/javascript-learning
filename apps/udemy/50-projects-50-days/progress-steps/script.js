const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () => {
  currentActive++

  if (currentActive > circles.length) {
    currentActive = circles.length
  }

  update()
})

prev.addEventListener('click', () => {
  currentActive--

  if (currentActive < 1) {
    currentActive = 1
  }

  update()
})

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }
  })

  /* Changing from Udemy Corce
  // ⚠ Narrow your search criteria .circle.active -> I do not use this time
  // const actives = document.querySelectorAll('.active')

  // I do not use this time, because actives are not used
  // progress.style.width =
  //   ((actives.length - 1) / (circles.length - 1)) * 100 + '%'
  */

  // 💡 Calculate with existing conditions
  progress.style.width =
    ((currentActive - 1) / (circles.length - 1)) * 100 + '%'

  if (currentActive === 1) {
    prev.disabled = true
  } else if (currentActive === circles.length) {
    next.disabled = true
  } else {
    prev.disabled = false
    next.disabled = false
  }
}
