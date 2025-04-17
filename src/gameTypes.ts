export type CellOption = 'X' | 'O' | '';
export type GameState = [
    [CellOption, CellOption, CellOption],
    [CellOption, CellOption, CellOption],
    [CellOption, CellOption, CellOption],
];

export type Row = 0 | 1 | 2;
export type Col = 0 | 1 | 2;

export interface FocusCell {
    row: Row;
    col: Col;
}
