import { useEffect, useState } from 'react';
import type {
    CellLocation,
    GameState,
    Row,
    Col,
    Turn,
    PlayerMarks,
    GameStatistic,
    GameResult,
    WinningLine,
} from '../gameTypes';
import checkWinner from '../utils/checkWinner';

function useGame() {
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

    const startNewGame = () => {
        setGameStarted(true);
        setGameResult({
            status: 'playing',
            winner: null,
            winningLine: null,
        });
        setGameState([
            ['', '', ''],
            ['', '', ''],
            ['', '', ''],
        ]);
        setFocusCell({
            row: 0,
            col: 0,
        });
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

    useEffect(() => {
        const winningLine = checkWinner(gameState);
        if (winningLine) {
            const winningMark = gameState[winningLine[0][0]][winningLine[0][1]];
            if (winningMark === '') return;
            let winner: 'player1' | 'player2';
            if (playerMarks.player1 === winningMark) winner = 'player1';
            else winner = 'player2';

            setGameResult({
                status: 'won',
                winner,
                winningLine: winningLine.map((cell) => ({
                    row: cell[0],
                    col: cell[1],
                })) as WinningLine,
            });

            let player1Won = gameStatistics.player1Won;
            let player2Won = gameStatistics.player2Won;

            if (winner === 'player1') player1Won++;
            else player2Won++;

            setGameStatistics({
                totalGames: gameStatistics.totalGames + 1,
                player1Won,
                player2Won,
            });

            setGameStarted(false);
        } else {
            let isEmptyCell = false;
            gameState.forEach((gameStateRow) => {
                if (!isEmptyCell) {
                    gameStateRow.forEach((gameStateCell) => {
                        if (gameStateCell === '') {
                            isEmptyCell = true;
                            return;
                        }
                    });
                }
            });

            if (!isEmptyCell) {
                setGameResult({
                    status: 'draw',
                    winner: null,
                    winningLine: null,
                });
                setGameStatistics({
                    totalGames: gameStatistics.totalGames + 1,
                    player1Won: gameStatistics.player1Won,
                    player2Won: gameStatistics.player2Won,
                });
                setGameStarted(false);
            }
        }
    }, [gameState]);

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
        startNewGame,
    };
}

export default useGame;
