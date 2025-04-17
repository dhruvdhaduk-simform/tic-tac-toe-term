import { Box, Text } from 'ink';

function Details({
    player1Name,
    player2Name,
}: {
    player1Name: string;
    player2Name: string;
}) {
    return (
        <Box
            borderColor="blackBright"
            borderStyle="single"
            flexDirection="column"
            justifyContent="space-evenly"
            alignItems="center"
            gap={1}
            flexGrow={1}
        >
            <Box
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                gap={1}
            >
                <Text>Hello, {player1Name}</Text>
                <Text>Hello, {player2Name}</Text>
            </Box>
            <Box
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                gap={1}
            >
                <Text>Use 'Arrow keys' to move to different cells.</Text>
                <Text>Use 'Space' to put 'X' or 'O' in current cell.</Text>
                <Text>Press "q" to exit.</Text>
            </Box>
        </Box>
    );
}

export default Details;
