interface TennisPlayer {
  points: number;
}

interface Logger {
  log: (message: string) => void
}
const nextPoints = {
  0: 15,
  15: 30,
  30: 40
}

const SCORES_STRINGS = {
  0: 'love',
  15: 'fifteen',
  30: 'thirty',
  40: 'forty'
};

export class TennisGame {
  constructor(private logger: Logger = console) {

  }

  players: [TennisPlayer, TennisPlayer] = [{points: 0}, {points: 0}];
  isDuece: boolean = false;
  advantage: number | null = null;
  winner: number | null = null;

  getWinnerAndLoser(winnerIndex: number) {
    return {
      winner: this.players[winnerIndex],
      loser: winnerIndex ? this.players[0] : this.players[1]
    }
  }

  raisePoints(playerIndex: number) {
    const {winner: roundWinner} = this.getWinnerAndLoser(playerIndex);
    const playerCurrentPoints = roundWinner.points;
    if (nextPoints[playerCurrentPoints]) {
      roundWinner.points = nextPoints[playerCurrentPoints];
    }
    this.checkWinner(playerIndex, playerCurrentPoints);
    this.reportScore();
  }

  checkWinner(winnerIndex: number, originalPoints: number = 0) {
    const {winner: roundWinner, loser: roundLoser} = this.getWinnerAndLoser(winnerIndex);

    if (this.isDuece) {
      if (this.advantage === winnerIndex) return this.winner = winnerIndex;
      this.advantage = winnerIndex;
      return;
    }

    if (roundWinner.points === 40 && roundLoser.points === 40) {
      this.isDuece = true;
      return;
    }

    if (originalPoints === 40) {
      this.winner = winnerIndex;
    }
  }

  get report() {
    if (this.winner !== null) return `player ${this.winner} won the game!`;

    if (this.advantage) return `player ${this.advantage} advantage`;

    if (this.isDuece) return 'duece';

    return `${SCORES_STRINGS[this.players[0].points]} - ${SCORES_STRINGS[this.players[1].points]}`;
  }
  reportScore() {
    this.logger.log(this.report);
  }
}
