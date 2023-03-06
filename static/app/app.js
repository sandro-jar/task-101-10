const wall = document.querySelector(".wall");
const wall2 = document.querySelector(".wall-2");
const ball = document.querySelector(".ball");
const result = document.querySelector(".result");
const playButton = document.querySelector(".play-button");
playButton.addEventListener("click", () => {
  wall.classList.toggle("wall-animation");
  wall2.classList.toggle("wall-2-animation");
  ball.classList.toggle("ball-animation");
  result.classList.toggle("result-animation");
});
