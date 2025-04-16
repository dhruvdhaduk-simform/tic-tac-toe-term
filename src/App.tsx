import { Text, useInput, useApp, Box } from 'ink';
import { useEffect, useState } from 'react';

import Board from './components/Board';
import Details from './components/Details';

import { DimensionContext } from './contexts/DimensionContext';

function App() {
    const { exit } = useApp();
    const [terminalDimensions, setTerminalDimensions] = useState({
        width: process.stdout.columns,
        height: process.stdout.rows,
    });

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

    useInput((input) => {
        if (input.toLowerCase() === 'q') {
            exit();
        }
    });

    const aspectRatio = terminalDimensions.width / terminalDimensions.height;

    return (
        <DimensionContext.Provider value={terminalDimensions}>
            <Box
                width={terminalDimensions.width}
                height={terminalDimensions.height}
                borderColor="white"
                borderStyle="single"
                flexDirection={aspectRatio > 2 ? 'row' : 'column'}
                justifyContent="center"
                alignItems="stretch"
                gap={1}
            >
                <Board />
                <Details />
            </Box>
        </DimensionContext.Provider>
    );
}

export default App;
