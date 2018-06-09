import { Component, OnInit } from '@angular/core';
import { Match } from '../match';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  match: Match = {
    id: 1,
    player1: 'Lena',
    player2: 'foobar',
    gamePoints: [0, 0]
  };

  constructor() { }

  ngOnInit() {
  }

  incGamePoints(player): void {

    const other: number = (player + 1) % 2;

    if (this.match.gamePoints[player] < 3) {
      /* counting points beyond 40 is easy */
      this.match.gamePoints[player]++;
    } else if (this.match.gamePoints[player] === 3) {
      if (this.match.gamePoints[other] < 3) {
        /* match won by player */
        this.match.gamePoints[0] = 0;
        this.match.gamePoints[1] = 0;
      } else if (this.match.gamePoints[other] === 3) {
        /* advantage player */
        this.match.gamePoints[player] = 4;
        this.match.gamePoints[other] = 3;
      } else if (this.match.gamePoints[other] === 4) {
        /* deuce */
        this.match.gamePoints[0] = 5;
        this.match.gamePoints[1] = 5;
      } else if (this.match.gamePoints[other] === 5) {
        /* advantage player */
        this.match.gamePoints[player] = 4;
        this.match.gamePoints[other] = 3;
      }
    } else if (this.match.gamePoints[player] === 4) {
      /* match won by player */
      this.match.gamePoints[0] = 0;
      this.match.gamePoints[1] = 0;
    } else {
      /* it is deuce now and player will have advantage */
      this.match.gamePoints[player] = 4;
      this.match.gamePoints[other] = 3;
    }
  }

}
