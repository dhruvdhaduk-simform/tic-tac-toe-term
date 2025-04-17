import { Box, Text } from 'ink';

function Details() {
    return (
        <Box
            borderColor="blackBright"
            borderStyle="single"
            flexDirection="column"
            justifyContent="center"
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
                <Text>Use 'Arrow keys' to move to different cells.</Text>
                <Text>Use 'Space' to put 'X' or 'O' in current cell.</Text>
                <Text>Press "q" to exit.</Text>
            </Box>
        </Box>
    );
}

export default Details;
