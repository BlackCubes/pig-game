var scores, roundScore, activePlayer, gamePlaying, winningScore;

init();

document.querySelector('.btn-roll').addEventListener('click', function() {

});

function init() {

    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    winningScore = prompt('What should the winning score be?');

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

}