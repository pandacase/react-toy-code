
const media = document.querySelector("video");
const controls = document.querySelector(".controls");

const play = document.querySelector(".play");
const stop = document.querySelector(".stop");
const rwd = document.querySelector(".rwd");
const fwd = document.querySelector(".fwd");

const timerWrapper = document.querySelector(".timer");
const timer = document.querySelector(".timer span");
const timerBar = document.querySelector(".timer div");


// 替换控制栏
media.removeAttribute("controls");
controls.style.visibility = "visible";

// 按钮功能：播放/暂停
play.addEventListener("click", playMedia);
function playMedia() {
  if (media.paused) {
    play.setAttribute("data-icon", "u");
    media.play();
  } else {
    play.setAttribute("data-icon", "P");
    media.pause();
  }
}

// 按钮功能：停止
stop.addEventListener("click", stopMedia);
media.addEventListener("ended", stopMedia);
function stopMedia() {
  media.pause();
  media.currentTime = 0;
  play.setAttribute("data-icon", "P");

  rwd.classList.remove("active");
  fwd.classList.remove("active");
  clearInterval(intervalRwd);
  clearInterval(intervalFwd);

}

// 按钮功能：快进/快退
rwd.addEventListener("click", mediaRewind);
fwd.addEventListener("click", mediaForward);
let intervalFwd;
let intervalRwd;
function mediaRewind() {
  clearInterval(intervalFwd);
  fwd.classList.remove("active");

  if (rwd.classList.contains("active")) {
    rwd.classList.remove("active");
    clearInterval(intervalRwd);
    media.play();
  } else {
    rwd.classList.add("active");
    media.pause();
    intervalRwd = setInterval(windRewind, 200);
  }
}
function mediaForward() {
  clearInterval(intervalRwd);
  rwd.classList.remove("active");

  if (fwd.classList.contains("active")) {
    fwd.classList.remove("active");
    clearInterval(intervalFwd);
    media.play();
  } else {
    fwd.classList.add("active");
    media.pause();
    intervalFwd = setInterval(windForward, 200);
  }
}
function windRewind() {
  if (media.currentTime <= 3) {
    rwd.classList.remove("active");
    clearInterval(intervalRwd);
    stopMedia();
  } else {
    media.currentTime -= 3;
  }
}
function windForward() {
  if (media.currentTime >= media.duration - 3) {
    fwd.classList.remove("active");
    clearInterval(intervalFwd);
    stopMedia();
  } else {
    media.currentTime += 3;
  }
}

// 进度条
media.addEventListener("timeupdate", setTime);
function setTime() {
  const mins = Math.floor(media.currentTime / 60);
  const secs = Math.floor(media.currentTime % 60);

  const minValue = mins.toString().padStart(2, "0");
  const secValue = secs.toString().padStart(2, "0");

  const mediaTime = `${minValue}:${secValue}`;
  timer.textContent = mediaTime;

  const barLength =
    timerWrapper.clientWidth * (media.currentTime / media.duration);
  timerBar.style.width = `${barLength}px`;
}