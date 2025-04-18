export type CellOption = 'X' | 'O' | '';
export type GameState = [
    [CellOption, CellOption, CellOption],
    [CellOption, CellOption, CellOption],
    [CellOption, CellOption, CellOption],
];

export type Row = 0 | 1 | 2;
export type Col = 0 | 1 | 2;

export interface CellLocation {
    row: Row;
    col: Col;
}

export type Turn = 'player1' | 'player2' | 'none';

export interface PlayerMarks {
    player1: Exclude<CellOption, ''>;
    player2: Exclude<CellOption, ''>;
}

export interface GameStatistic {
    totalGames: number;
    player1Won: number;
    player2Won: number;
}

export type WinningLine = [CellLocation, CellLocation, CellLocation];

export type GameResult =
    | {
          status: 'won';
          winner: 'player1' | 'player2';
          winningLine: WinningLine;
      }
    | {
          status: 'draw' | 'playing';
          winner: null;
          winningLine: null;
      };
