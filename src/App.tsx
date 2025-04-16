import { Text, useInput, useApp, Box } from 'ink';

function App() {
    const { exit } = useApp();

    useInput((input) => {
        if (input.toLowerCase() === 'q') {
            exit();
        }
    });

    return (
        <Box flexDirection="column">
            <Text color="green">Hello, World ! </Text>
            <Text color="green">Press "q" to exit.</Text>
        </Box>
    );
}

export default App;
