import type { GameState, Row, Col } from '../gameTypes';

const WINNING_LINES: [[Row, Col], [Row, Col], [Row, Col]][] = [
    [[0, 0], [0, 1], [0, 2]],
    [[1, 0], [1, 1], [1, 2]],
    [[2, 0], [2, 1], [2, 2]],

    [[0, 0], [1, 0], [2, 0]],
    [[0, 1], [1, 1], [2, 1]],
    [[0, 2], [1, 2], [2, 2]],

    [[0, 0], [1, 1], [2, 2]],
    [[0, 2], [1, 1], [2, 0]],
];

export default function checkWinner(gameState: GameState) {
    for (const line of WINNING_LINES) {
        const c1 = gameState[line[0][0]][line[0][1]];
        const c2 = gameState[line[1][0]][line[1][1]];
        const c3 = gameState[line[2][0]][line[2][1]];

        if (c1 !== '' && c1 === c2 && c1 === c3) {
            return line;
        }
    }

    return null;
}

