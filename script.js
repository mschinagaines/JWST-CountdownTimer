const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('minutes');
const secsEl = document.getElementById('seconds');

const newBeginnings = '31 Oct 2021';

function countdown() {
    const newDate = new Date(newBeginnings);
    const currentDate = new Date();

    const totalSeconds = (newDate - currentDate) / 1000;
    
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = minutes;
    secsEl.innerHTML = seconds;
}

// initial call
countdown();

setInterval(countdown, 1000);
