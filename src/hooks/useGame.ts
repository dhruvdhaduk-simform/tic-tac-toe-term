import { useEffect, useState } from 'react';
import type {
    CellLocation,
    GameState,
    Row,
    Col,
    CellOption,
    Turn,
    PlayerMarks,
    GameStatistic,
    GameResult,
} from '../gameTypes';

function useGame(player1Name: string, player2Name: string) {
    const [gameStarted, setGameStarted] = useState(true);

    const [playerMarks, setPlayerMarks] = useState<PlayerMarks>({
        player1: 'O',
        player2: 'X',
    });

    const [turn, setTurn] = useState<Turn>('player1');

    const [gameStatistics, setGameStatistics] = useState<GameStatistic>({
        totalGames: 0,
        player1Won: 0,
        player2Won: 0,
    });

    const [gameState, setGameState] = useState<GameState>([
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ]);

    const [focusCell, setFocusCell] = useState<CellLocation>({
        row: 0,
        col: 0,
    });

    const [gameResult, setGameResult] = useState<GameResult>({
        status: 'playing',
        winner: null,
        winningLine: null,
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

    const handleBoardInput = () => {
        if (gameState[focusCell.row][focusCell.col] === '' && turn !== 'none') {
            setGameState((prevGameState) => {
                const newGameState = prevGameState.map(
                    (gameStateRow, rowIndex) => {
                        const newGameStateRow = [...gameStateRow];
                        if (rowIndex === focusCell.row) {
                            newGameStateRow[focusCell.col] = playerMarks[turn];
                        }
                        return newGameStateRow;
                    }
                );

                return newGameState as GameState;
            });

            setTurn(turn === 'player1' ? 'player2' : 'player1');
        }
    };

    useEffect(() => {
        if (gameStarted) {
            const player1Mark = Math.random() < 0.5 ? 'O' : 'X';
            const player2Mark = player1Mark === 'O' ? 'X' : 'O';

            setPlayerMarks({ player1: player1Mark, player2: player2Mark });
            setTurn(Math.random() < 0.5 ? 'player1' : 'player2');
        } else {
            setTurn('none');
        }
    }, [gameStarted]);

    return {
        gameStarted,
        gameStatistics,
        playerMarks,
        turn,
        gameState,
        gameResult,
        focusCell,
        moveFocus,
        handleBoardInput,
    };
}

export default useGame;
