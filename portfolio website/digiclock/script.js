const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const weekdayEl = document.getElementById('weekday');
const toggleBtn = document.getElementById('toggleBtn');
const darkModeBtn = document.getElementById('darkModeBtn');

let is24Hour = false;

function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    let period = '';

    if (!is24Hour) {
        period = hours >= 12 ? ' PM' : ' AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
    }

    hours = hours.toString().padStart(2, '0');
    timeEl.textContent = `${hours}:${minutes}:${seconds}${period}`;

    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    dateEl.textContent = now.toLocaleDateString('en-US', dateOptions);

    const weekdayOptions = { weekday: 'long' };
    weekdayEl.textContent = now.toLocaleDateString('en-US', weekdayOptions);
}

function toggleFormat() {
    is24Hour = !is24Hour;
    toggleBtn.textContent = is24Hour ? 'Switch to 12-Hour' : 'Switch to 24-Hour';
    updateClock();
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    darkModeBtn.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
}

// EVENT LISTENERS
toggleBtn.addEventListener('click', toggleFormat);
darkModeBtn.addEventListener('click', toggleDarkMode);

// START
updateClock();
setInterval(updateClock, 1000);
