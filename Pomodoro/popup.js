let timer;
let minutes = 25;
let seconds = 0;
let isRunning = false;

function updateDisplay() {
  const display = document.getElementById('time-display');
  display.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(decreaseTime, 1000);
  }
}

function decreaseTime() {
  if (seconds > 0) {
    seconds--;
  } else if (minutes > 0) {
    minutes--;
    seconds = 59;
  } else {
    clearInterval(timer);
    isRunning = false;
  }
  updateDisplay();
}


function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
  }


function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  minutes = 25;
  seconds = 0;
  updateDisplay();
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('pause-button').addEventListener('click', pauseTimer); 
document.getElementById('reset-button').addEventListener('click', resetTimer);

updateDisplay();
