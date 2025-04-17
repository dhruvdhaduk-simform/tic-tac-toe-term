import { useState } from 'react';
import { FocusCell, type GameState, type Row, type Col } from '../gameTypes';

function useGame() {
    const [gameState, setGameState] = useState<GameState>([
        ['X', 'O', ''],
        ['O', '', 'X'],
        ['X', 'O', ''],
    ]);

    const [focusCell, setFocusCell] = useState<FocusCell>({
        row: 0,
        col: 0,
    });

    const moveFocus = (direction: 'up' | 'down' | 'left' | 'right') => {
        let row = focusCell.row;
        let col = focusCell.col;
        switch (direction) {
            case 'up':
                row = (row <= 0 ? 0 : row - 1) as Row;
                break;
            case 'down':
                row = (row >= 2 ? 2 : row + 1) as Row;
                break;
            case 'left':
                col = (col <= 0 ? 0 : col - 1) as Col;
                break;
            case 'right':
                col = (col >= 2 ? 2 : col + 1) as Col;
                break;
        }

        setFocusCell({ row, col });
    };

    return { gameState, focusCell, moveFocus };
}

export default useGame;
