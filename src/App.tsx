import { Text, useInput, useApp, Box } from 'ink';
import { useEffect, useState } from 'react';

import Board from './components/Board';
import Details from './components/Details';

import { DimensionContext } from './contexts/DimensionContext';
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
        focusCell,
        gameStarted,
        playerMarks,
        turn,
        moveFocus,
        handleBoardInput,
    } = useGame(player1Name, player2Name);

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
    });

    const aspectRatio = terminalDimensions.width / terminalDimensions.height;

    return (
        <DimensionContext.Provider value={terminalDimensions}>
            <Box
                width={terminalDimensions.width}
                height={terminalDimensions.height}
                flexDirection={aspectRatio > 2 ? 'row' : 'column'}
                justifyContent="center"
                alignItems="stretch"
                gap={1}
            >
                <Board gameState={gameState} focusCell={focusCell} />
                <Details player1Name={player1Name} player2Name={player2Name} />
            </Box>
        </DimensionContext.Provider>
    );
}

export default App;
