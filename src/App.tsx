import { useInput, useApp, Box } from 'ink';
import { useEffect, useState } from 'react';

import Board from './components/Board';
import Details from './components/Details';

import useGame from './hooks/useGame';

function App({
    player1Name,
    player2Name,
}: {
    player1Name: string;
    player2Name: string;
}) {
    const { exit } = useApp();
    const [terminalDimensions, setTerminalDimensions] = useState({
        width: process.stdout.columns,
        height: process.stdout.rows,
    });

    const {
        gameState,
        gameResult,
        gameStatistics,
        focusCell,
        gameStarted,
        playerMarks,
        turn,
        moveFocus,
        handleBoardInput,
        startNewGame,
    } = useGame();

    useEffect(() => {
        const handleResize = () => {
            setTerminalDimensions({
                width: process.stdout.columns,
                height: process.stdout.rows,
            });
        };

        process.stdout.on('resize', handleResize);

        return () => {
            process.stdout.off('resize', handleResize);
        };
    }, []);

    useInput((input, key) => {
        if (input.toLowerCase() === 'q') {
            exit();
            return;
        }

        if (input === ' ') {
            handleBoardInput();
        }

        if (key.upArrow || input === 'k' || input === 'w') {
            moveFocus('up');
        } else if (key.downArrow || input === 'j' || input === 's') {
            moveFocus('down');
        } else if (key.leftArrow || input === 'h' || input === 'a') {
            moveFocus('left');
        } else if (key.rightArrow || input === 'l' || input === 'd') {
            moveFocus('right');
        }

        if (gameStarted === false && key.return) {
            startNewGame();
        }
    });

    const aspectRatio = terminalDimensions.width / terminalDimensions.height;

    const previewMark = turn !== 'none' ? playerMarks[turn] : '';

    return (
        <Box
            width={terminalDimensions.width}
            height={terminalDimensions.height}
            flexDirection={aspectRatio > 2 ? 'row' : 'column'}
            justifyContent="center"
            alignItems="stretch"
            gap={1}
        >
            <Board
                gameState={gameState}
                focusCell={focusCell}
                previewMark={previewMark}
                gameResult={gameResult}
            />
            <Details
                player1Name={player1Name}
                player2Name={player2Name}
                turn={turn}
                playerMarks={playerMarks}
                gameResult={gameResult}
                gameStatistics={gameStatistics}
            />
        </Box>
    );
}

export default App;
