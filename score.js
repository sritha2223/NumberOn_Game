const scoreBoard = document.getElementById("score-board");
const playAgainButton = document.getElementById("play-again-button");

const urlParams = new URLSearchParams(window.location.search);
const score = urlParams.get("score");
if (scoreBoard) {
  scoreBoard.textContent = score !== null ? score : "0";
}
playAgainButton.onclick = () => {
  location.href = "./game.html";
};
