let [seconds, minutes, hours] = [0, 0, 0];
let time = document.getElementById("time");
let timer = null;
let isRunning = false;

function stopwatch() {
  seconds++;

  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  time.innerHTML = `${h}:${m}:${s}`;
}

function startWatch() {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(stopwatch, 1000);
}

function stopWatch() {
  clearInterval(timer);
}

function clearWatch() {
  clearInterval(timer);
  [seconds, minutes, hours] = [0, 0, 0];
  time.innerHTML = "00:00:00";
  isRunning = false;

  // Reset button text to "Start"
  const btn = document.getElementById('controlBtn');
  btn.textContent = 'START';
}

function toggleWatch() {
  const btn = document.getElementById('controlBtn');
  if (isRunning) {
    stopWatch();
    btn.textContent = 'START';
  } else {
    startWatch();
    btn.textContent = 'STOP';
  }
  isRunning = !isRunning;
}
