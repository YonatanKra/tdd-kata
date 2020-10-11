import { TennisGame } from '@tdd-kata/tennis-game';
import Mock = jest.Mock;

describe(`tennis`, function() {
  let tennisGame: TennisGame;
  let logger = {
    log: (str: string) => undefined
  };

  beforeEach(function() {
    tennisGame = new TennisGame(logger);
  });

  it(`should have two players`, function() {
    expect(tennisGame.players.length).toEqual(2);
  });

  it(`should start players with 0 points`, function() {
    tennisGame.players.forEach(player => expect(player.points === 0));
  });

  it(`should allow points of 0, 15, 30, 40 for player`, function() {
    function collectPoints() {
      pointsCollection.push(tennisGame.players[0].points);
    }
    const pointsCollection = [];
    const expectedPointsCollection = [0, 15, 30, 40, 40];

    collectPoints();
    tennisGame.raisePoints(0);
    collectPoints();
    tennisGame.raisePoints(0);
    collectPoints();
    tennisGame.raisePoints(0);
    collectPoints();
    tennisGame.raisePoints(0);
    collectPoints();

    expect(pointsCollection).toStrictEqual(expectedPointsCollection);
  });

  describe(`getWinnerLoser`, function() {
    it(`should return the param index as winner and the other one as loser`, function() {
      const {winner, loser} = tennisGame.getWinnerAndLoser(1);
      expect(winner).toEqual(tennisGame.players[1]);
      expect(loser).toEqual(tennisGame.players[0]);
    });
  });

  describe(`duece`, function() {
    beforeEach(function() {
      (function enterDueceState() {
        [1,2,3].forEach(() => {
          tennisGame.raisePoints(0);
          tennisGame.raisePoints(1);
        });
      })();
    });

    it(`should have advantage and winner as null`, function() {
      expect(tennisGame.winner).toEqual(null);
      expect(tennisGame.advantage).toEqual(null);
    });

    it(`should enter a deuce when both players are at 40`, function() {
      expect(tennisGame.isDuece).toEqual(true);
    });

    it(`should set winner advantage if in duece`, function() {
      tennisGame.raisePoints(0);
      expect(tennisGame.advantage).toEqual(0);
    });

    it(`should set a winner with advantage as the game winner`, function() {
      tennisGame.raisePoints(1);
      tennisGame.raisePoints(1);
      expect(tennisGame.winner).toEqual(1);
    });
  });

  it(`should set the winner if is above 40 and no duece`, function() {
    const losersPoints = [0, 15 ,30];
    const winningPlayer = 1;
    const losingPlayer = 0;

    function playMatchPoint(losersMatchPoints: number) {
      const breakPointTennisGame = new TennisGame(logger);
      breakPointTennisGame.players[winningPlayer].points = 40;
      breakPointTennisGame.players[losingPlayer].points = losersMatchPoints;
      breakPointTennisGame.raisePoints(winningPlayer);
      expect(breakPointTennisGame.winner).toEqual(winningPlayer);
    }

    losersPoints.forEach(playMatchPoint);

  });

  describe(`reportScore`, function() {
    beforeEach(function() {
      logger.log = jest.fn();
    });

    afterEach(function() {
      (logger.log as Mock).mockRestore();
    });

    it(`should report the score as Tennis strings`, function() {
      const scores = [0, 15, 30, 40];
      const tennisStrings = ['love', 'fifteen', 'thirty', 'forty'];

      scores.forEach((score, index) => {
        (logger.log as Mock).mockClear();
        tennisGame.players[0].points = score;
        tennisGame.reportScore();
        expect(logger.log).toHaveBeenCalledWith(`${tennisStrings[index]} - love`);
      });
    });

    it(`should report duece as the score if tied at 40`, function() {
      tennisGame.players[0].points = 30;
      tennisGame.players[1].points = 40;
      tennisGame.raisePoints(0);
      tennisGame.reportScore();
      expect(logger.log).toHaveBeenCalledWith(`duece`);
    });

    it(`should report adnvatage for winning player`, function() {
      const advantagePlayer = 1;
      tennisGame.players[0].points = 30;
      tennisGame.players[1].points = 40;
      tennisGame.raisePoints(0);
      tennisGame.raisePoints(advantagePlayer);
      tennisGame.reportScore();
      expect(logger.log).toHaveBeenCalledWith(`player ${advantagePlayer} advantage`);
    });

    it(`should report the winner`, function() {
      const winner = 0;
      tennisGame.players[winner].points = 40;
      tennisGame.raisePoints(winner);
      tennisGame.reportScore();
      expect(logger.log).toHaveBeenCalledWith(`player ${winner} won the game!`);
    });
  });

  it(`should report the score on every point`, function() {
    spyOn(tennisGame, 'reportScore');
    tennisGame.raisePoints(0);
    expect(tennisGame.reportScore).toHaveBeenCalled();
  });
});
