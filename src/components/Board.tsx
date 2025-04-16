import { Box, Text } from 'ink';
import { DimensionContext } from '../contexts/DimensionContext';
import { useContext } from 'react';

function Board() {
    const terminalDimensions = useContext(DimensionContext);

    return (
        <Box
            borderColor="white"
            borderStyle="single"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap={1}
            flexGrow={1}
        >
            <Box>
                <Text>Board</Text>
            </Box>
        </Box>
    );
}

export default Board;
