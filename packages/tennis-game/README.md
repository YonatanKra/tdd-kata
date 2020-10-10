# tennis-game

This kata is about implementing a simple tennis game.

## The Three Rules of TDD

1. You are not allowed to write any production code unless it is to make a failing unit test pass.
2. You are not allowed to write any more of a unit test than is sufficient to fail; and compilation failures are failures.
3. You are not allowed to write any more production code than is sufficient to pass the one failing unit test.

Which means the workflow is:

1. Write a failing test. Stop writing the test as soon as it fails.
2. Write the minimal production code required for the test to pass. Stop writing any code once the test passes.
3. Refactor the test code and the production code without altering the functionality. All tests should pass.

## Running unit tests

Run `nx test tennis-game --watch` to execute the unit tests via [Jest](https://jestjs.io).

## Before you start:
* Try not to read ahead. 
* Do one task at a time. The trick is to learn to work incrementally.
* All tests should always pass, regardless of environment conditions.

## The Kata

The scoring system is rather simple:

1. Each player can have either of these points in one game 0 15 30 40
2. If you have 40 and you win the ball you win the game, however, there are special rules.
3. If both have 40 the players are deuce.
    1. After deuce, the winner of a ball will have advantage and game ball.
    2. If the player with advantage wins the ball he wins the game
    3. If the player without advantage wins they are back at deuce.
4. A game is won by the first player to have won at least four points in total and at least two points more than the opponent.
5. The running score of each game is described in a manner peculiar to tennis: scores from zero to three points are described as “love”, “fifteen”, “thirty”, and “forty” respectively.
6. If at least three points have been scored by each player, and the scores are equal, the score is “deuce”.
7. If at least three points have been scored by each side and a player has one more point than his opponent, the score of the game is “advantage” for the player in the lead.
