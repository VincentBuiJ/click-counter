let score = 0;

const scoreDisplay = document.getElementById("score");
const increaseButton = document.getElementById("increase");

increaseButton.addEventListener("click", () => {
  score = score + 1;
  scoreDisplay.textContent = score;
});

const decreaseButton = document.getElementById("decrease");

decreaseButton.addEventListener("click", () => {
  if (score > 0) {
    score = score - 1;
    scoreDisplay.textContent = score;
  }
});

const resetButton = document.getElementById("reset");

resetButton.addEventListener("click", function () {
  score = 0;
  scoreDisplay.textContent = score;
});
