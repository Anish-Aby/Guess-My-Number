'use strict';

const randomNumber = Math.floor(Math.random() * 20) + 1;
let message = $('.message');
let body = $('body');
let highScore = $('.highscore');
let userHighScore = 0;
let currentScore = Number($('.score').html());

$('.check').on('click', function () {
  let userGuess = Number($('.guess').val());

  if (userGuess > randomNumber) {
    message.html('📈 Too high! Try a lower number');
    reduceScore();
  } else if (userGuess < randomNumber) {
    message.html('📉 Too low! Try a higher number');
    reduceScore();
  } else if (userGuess === randomNumber) {
    body.css('background-color', '#60b347');
    message.html('🎉 Correct number');
    userHighScore = Math.max(userHighScore, currentScore);
  }
});

$('.again').on('click', () => {
  body.css('background-color', '#222');
  message.html('Start guessing...');
  highScore.html(`${userHighScore}`);
  $('.score').html('20');
});

function reduceScore() {
  currentScore--;
  $('.score').html(`${currentScore}`);
}
