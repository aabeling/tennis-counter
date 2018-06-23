import { Injectable } from '@angular/core';
import { Match } from './match';

/**
 * Service providing storage for a game.
 * Knows how to store and retrieve a game from storage.
 */
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  loadGame(): Match {

    const initialValue: Match = {
      id: 1,
      player1: 'Lena',
      player2: 'foobar',
      gamePoints: [0, 0],
      setPoints: [[0], [0]],
      currentSet: 0
    };
    const result = JSON.parse(localStorage.getItem('match')) || initialValue;

    return result;
  }

  saveGame(match: Match): void {

    localStorage.setItem('match', JSON.stringify(match));
  }

}
