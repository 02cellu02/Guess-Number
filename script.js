'use strict';

// document.querySelector('.message').textContent = '👏 Correct Number!';
let unknownNo = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.check').addEventListener('click', function () {
  let input = Number(document.querySelector('.guess').value);
  //   console.log(typeof input);
  if (!input) {
    document.querySelector('.message').textContent =
      "you haven't entered a number!👀";
    return;
  } else if (input < 1 || input > 20) {
    document.querySelector('.message').textContent =
      'Enter a number between 1 and 20!🙂';
    return;
  }
  //   console.log(input);

  if (input === unknownNo) {
    document.querySelector('.message').textContent = '👏 Correct Number!';
    document.querySelector('.number').textContent = unknownNo;
    let highScore = document.querySelector('.highscore').textContent;
    let currentscore = document.querySelector('.score').textContent;
    if (highScore < currentscore)
      document.querySelector('.highscore').textContent = currentscore;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else {
    if (document.querySelector('.score').textContent == 0) {
      document.querySelector('.message').textContent = 'Game Over 💢';
      return;
    }
    document.querySelector('.score').textContent -= 1;
    if (input < unknownNo) {
      document.querySelector('.message').textContent = 'Too Low 😢';
    } else {
      document.querySelector('.message').textContent = 'Too high 😔';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = null;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  unknownNo = Math.trunc(Math.random() * 20) + 1;
});
