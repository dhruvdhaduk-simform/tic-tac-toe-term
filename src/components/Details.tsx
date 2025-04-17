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
            <Text>Press "q" to exit.</Text>
        </Box>
    );
}

export default Details;
