const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggleEl = document.querySelector('.toggle');

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

let hoursRotates = 0;
let minutesRotates = 0;
let secondRotates = 0;

let prevHours = -1;
let prevMinutes = -1;
let prevSeconds = -1;

toggleEl.addEventListener('click', (e) => {
  const html = document.querySelector('html');
  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    e.target.innerHTML = 'Dark mode';
  } else {
    html.classList.add('dark');
    e.target.innerHTML = 'Light mode';
  }
});

function setTime() {
  const time = new Date();
  const month = time.getMonth();
  const hours = time.getHours();
  const day = time.getDay();
  const date = time.getDate();
  const hoursForClock = hours % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  // 💡 Reference of Udemy question //
  // https://www.udemy.com/course/50-projects-50-days/learn/lecture/23596744#questions/13515994
  // Another clock spin fix: by Lucas Rodrigues
  /*
  hourEl.style.transition = `${hours === 0 ? 'none' : 'all 0.5s ease-in'}`;
  minuteEl.style.transition = `${minutes === 0 ? 'none' : 'all 0.5s ease-in'}`;
  secondEl.style.transition = `${seconds === 0 ? 'none' : 'all 0.5s ease-in'}`;
  */

  if (prevHours > hoursForClock) hoursRotates++;
  if (prevMinutes > minutes) minutesRotates++;
  if (prevSeconds > seconds) secondRotates++;

  prevHours = hoursForClock;
  prevMinutes = minutes;
  prevSeconds = seconds;

  const hoursDeg = scale(hoursForClock, 0, 12, 0, 360) + 360 * hoursRotates;
  const minutesDeg = scale(minutes, 0, 60, 0, 360) + 360 * minutesRotates;
  const secondsDeg = scale(seconds, 0, 60, 0, 360) + 360 * secondRotates;

  hourEl.style.transform = `translate(-50%, -100%) rotate(${hoursDeg}deg)`;

  minuteEl.style.transform = `translate(-50%, -100%) rotate(${minutesDeg}deg)`;

  secondEl.style.transform = `translate(-50%, -100%) rotate(${secondsDeg}deg)`;

  const formattedMinutes = String(minutes).padStart(2, '0');
  timeEl.innerHTML = `${hoursForClock}:${formattedMinutes} ${ampm}`;

  dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
}

// Source - https://stackoverflow.com/a/23202637
function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

setTime();

setInterval(setTime, 1000);
