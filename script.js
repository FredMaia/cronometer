var s = 0;
var m = 0;
var ms = 0;
var intervalo;
var overview = document.getElementById("overview");
var isRunning = false;
var pausebtn = document.getElementById("pausebtn");
function myStartFunction() {}
function start() {
  if (!isRunning) {
    intervalo = setInterval(function () {
      if (ms < 10 && s < 10 && m < 10) {
        overview.innerHTML = `0${m}:0${s}:0${ms}`
      } else if (ms < 10 && s < 10) {
        overview.innerHTML = `${m}:0${s}:0${ms}`
      } else if (ms < 10 && m < 10) {
        overview.innerHTML = `0${m}:${s}:0${ms}`
      } else if (ms < 10) {
        overview.innerHTML = `${m}:${s}:0${ms}`
      } else if (m < 10 && s < 10) {
        overview.innerHTML = `0${m}:0${s}:${ms}`
      } else if (m < 10) {
        overview.innerHTML = `0${m}:${s}:${ms}`
      } else if (s < 10) {
        overview.innerHTML = `0${m}:${s}:0${ms}`
      } else {
        overview.innerHTML = `${m}:${s}:${ms}`
      }
      ms++;

      if (ms == 100) {
        ms = 0;
        s++;
      }

      if (s == 60) {
        s = 0;
        m++;
      }
      isRunning = true;
    }, 10);
  }
}
function pause() {
  if (isRunning) {
    clearInterval(intervalo);
    isRunning = false
    pausebtn.innerText = "RESUME"
  } else {
    start();
    pausebtn.innerText = "PAUSE"
  }
}

function reset() {
  clearInterval(intervalo);
  isRunning = false
  m = 0;
  s = 0;
  ms = 0;

  overview.innerHTML = `0${m}:0${s}:0${ms}`
}
