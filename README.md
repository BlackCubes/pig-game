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

The function `init()` initializes the code when the page is first started, or when the user clicks on `NEW GAME`, and this is done by setting `scores`, `activePlayer`, and `roundScore` to `0`. Last but not least it sets `gamePlaying` to `true`:

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

The game implements JavaScript to make it work while also using the basics of HTML and CSS. No plug-ins for JS (JavaScript), but it does use the Google API Font for Lato and it uses the icons from Ionic Framework website.

This JavaScript game was inspired when I was learning on JavaScript from a Udemy course "The Complete JavaScript Course 2019: Build Real Projects!" by (name). All of my thanks and the code belongs to him.