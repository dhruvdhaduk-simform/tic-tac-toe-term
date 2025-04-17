import { useState } from 'react';
import type { GameState } from '../gameTypes';

function useGame() {
    const [gameState, setGameState] = useState<GameState>([
        ['X', 'O', ''],
        ['O', '', 'X'],
        ['X', 'O', ''],
    ]);

    return { gameState };
}

export default useGame;
