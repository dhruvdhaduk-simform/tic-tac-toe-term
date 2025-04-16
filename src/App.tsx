import { Text, useInput, useApp, Box } from 'ink';
import { useEffect, useState } from 'react';

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

    return (
        <Box
            width={terminalDimensions.width}
            height={terminalDimensions.height}
            borderColor="white"
            borderStyle="single"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap={1}
        >
            <Text color="green">Hello, World ! </Text>
            <Text color="green">Press "q" to exit.</Text>
            <Text>
                Dimensions : {terminalDimensions.width} x{' '}
                {terminalDimensions.height}
            </Text>
        </Box>
    );
}

export default App;
