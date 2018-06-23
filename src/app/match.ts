/**
 * Holds information about a match.
 */
export class Match {
    id: number;
    player1: string;
    player2: string;

    /* points in the current game */
    gamePoints: number[];

    /* games won, first index is player (0 or 1), second index is the set */
    setPoints: number[][];

    /* index of the current set, starting with 0 */
    currentSet: number;
}
