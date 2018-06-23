import { Component, OnInit } from '@angular/core';
import { Match } from '../match';
import { StorageService } from '../storage.service';

/**
 * Controller for a game.
 */
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  match: Match;

  constructor(private storageService: StorageService) { }

  ngOnInit() {

    this.match = this.storageService.loadGame();
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
        this.incSetPoints(player);
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
      this.incSetPoints(player);
    } else {
      /* it is deuce now and player will have advantage */
      this.match.gamePoints[player] = 4;
      this.match.gamePoints[other] = 3;
    }

    this.storageService.saveGame(this.match);
  }

  incSetPoints(player): void {

    const other: number = (player + 1) % 2;

    this.match.setPoints[player][this.match.currentSet]++;

    /* check if set is won */
    /* todo: add tie break handling */
    if (this.match.setPoints[player][this.match.currentSet] >= 6
      && this.match.setPoints[player][this.match.currentSet]
      - this.match.setPoints[other][this.match.currentSet] > 1) {

        /* set is won */
        this.match.currentSet++;
        this.match.setPoints[0].push(0);
        this.match.setPoints[1].push(0);
      }
  }
}
