# Pig Game (A JavaScript Game)

Pig Game (or Pig) was first created by John Scarne in 1945 which is basically a simple dice game. The rules of the game is that the players keep rolling a dice until a hit a 1 which is then the next player's turn. Yet, if the player has not hit a 1 then that player could 'hold' onto those values to add into their original value. The exact technicality of the game (according to Wikipedia) is:

- If the player rolls a 1, they score nothing and it becomes the next player's turn.
- If the player rolls any other number, it is added to their turn total and the player's turn continues.
- If a player chooses to "hold", their turn total is added to their score, and it becomes the next player's turn.
- The first player to score the winning score or more wins the game.

The player could hit `ROLL DICE` to continue to roll (show picture), `HOLD` to keep the score (show picture), or click `NEW GAME` to start a brand new game (show picture).

In the beginning of entering the page, the browser interacts with the user with a prompt asking `What should the winning score be?` which the user then inputs the score. (Show picture)

If the user does not input a numeric value or leaves it empty by clicking `OK`, then it automitically sets the pre-defined score of `30`:

```sh
winningScore = prompt('What should the winning score be?');

if (Number.isInteger(parseInt(winningScore))) {
    winningScore = parseInt(winningScore);
} else {
    winningScore = 30;
}

document.querySelector('.winning-score-panel').textContent = winningScore;
```

It then displays whatever the variable `winningScore` is to the browser. The object `parseInt()` is used to convert the string into numeric value from the prompt. The object `Number.isInteger()` checks if the value if numeric. If not, then it returns `false`.

The function `init()` initializes the code when the page is first started, or when the user clicks on `NEW GAME`, and this is done by setting `scores`, `activePlayer`, and `roundScore` to `0`. Last but not least is setting `gamePlaying` to `true`:

```sh
function init() {

    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    winningScore = prompt('What should the winning score be?');

    if (Number.isInteger(parseInt(winningScore))) {
        winningScore = parseInt(winningScore);
    } else {
        winningScore = 30;
    }

    document.querySelector('.winning-score-panel').textContent = winningScore;

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
```

The function `nextPlayer()` determines whether the current active player is playing. If the player is not playing it switches over to the next one. The numeric values of `0` and `1` are used for the active player since there are only two players in the game with an array of keys `0` and `1` for players 1 and 2, respectively. This is also used to input the player's score stored in an array of `scores`. The global variable `roundScore` is set to `0` which resets the dice values. Lastly, JS codes are used to dynamically update the browser:

```sh
function nextPlayer() {

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';

}
```

Two anonymous functions are created for event listeners. One is used when the user clicks on `btn-roll` (button roll) which is used to keep rolling the dice. It checks if the global variable `gamePlaying` is true. Inside the `if-statement`, variable `dice` is used to create a randomized numbers between `1` and `6`. This `dice` interacts with the DOM (Document Object Module) to dynamically change the images of the dice in the browser. Lastly, it checks if `dice` does not equal to `1` which stores randomize value into the global variable `roundScore` and updates the browser. If `dice` does equal to `1`, then it goes to the next player by using the function of `nextPlayer()`:

```sh
document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlaying) {

        var dice = Math.floor(Math.random() * 6) + 1;

        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        if (dice !== 1) {
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }
    }
});
```

The last event listener is when the user clicks on `btn-hold` (button hold) which is where the user wants to hold onto whatever value the randomize dice number is. As usual, the `if-conditional` checks if `gamePlaying` is `true`. Then, the global variable `roundScore` stores to the array of `scores` based on the current active player playing. This is done by using the global variable `activePlayer` based on the function `nextPlayer()`. `scores[activePlayer]` will keep adding the `roundScore` whenever the user keeps clicking button hold, and whenever the current active player has not hit a numeric value of `1`. This active player score would dynimcally interact with the browser by displaying it. Lastly, an `if-conditional` checks if the current active player has reached the winning score value, or exceeds it. If it does pass the conditional, then it dynmically displays the winning player. If it does not pass the conditional, then it goes to the next player by using the function `nextPlayer()`:

```sh
document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {

        scores[activePlayer] += roundScore;

        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        if (scores[activePlayer] >= winningScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }
});
```

The game implements JavaScript to make it work while also using the basics of HTML and CSS. No plug-ins for JS (JavaScript), but it does use the Google API Font for Lato and it uses the icons from Ionic Framework website.

This JavaScript game was inspired when I was learning on JavaScript from a Udemy course "The Complete JavaScript Course 2019: Build Real Projects!" by (name). All of my thanks and the code belongs to him.