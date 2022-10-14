const dispScore = document.querySelector('.score');
const dispLevel = document.querySelector('.level');
const btn = document.querySelector('.btn');
const input = document.querySelector(".input");
const comment = document.querySelector('.comment');
let gameLevel = 1;
let score = 0;
let max = 2
let min = 0

const username = prompt('Enter username');

const user = `<span class="user">Hello ${username}👋🏼,</span>`

comment.insertAdjacentHTML('beforebegin', user)

const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min) + 1) + min;
}

const changeLevel = () => {
  gameLevel++;
  score++
  dispLevel.innerText = gameLevel;
  dispScore.innerText = score;
}

const resetValue = () => {
  input.value = "";
}

const increaseRange = () => {
  return max++
}

btn.addEventListener("click", (e) => {
  e.preventDefault()

  const guess = Number(input.value)

  const randomNumber = randomInt(min, max);

  if (guess === 0) {
    comment.textContent = 'Invalid Input⚠️'
    return;
  }

  if (guess === randomNumber) {
    comment.textContent = 'Congratulations🎉🎉';
    changeLevel();
    resetValue();
    increaseRange();
  }

  if (guess != randomNumber) {
    comment.textContent = 'Try Again😢😢';
    resetValue();
  }
})