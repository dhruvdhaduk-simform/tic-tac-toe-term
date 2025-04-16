import { Box, Text } from 'ink';
import { DimensionContext } from '../contexts/DimensionContext';
import { useContext } from 'react';

function Board() {
    const terminalDimensions = useContext(DimensionContext);

    let boardWidth: number;
    let boardHeight: number;

    const aspectRatio = terminalDimensions.width / terminalDimensions.height;

    if (aspectRatio > 2) {
        boardWidth = terminalDimensions.width / 2 - 2;
        boardHeight = boardWidth / 2;
    } else {
        boardHeight = terminalDimensions.height / 2 - 2;
        boardWidth = boardHeight * 2;
    }

    return (
        <Box
            borderColor="white"
            borderStyle="single"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap={1}
            // flexGrow={1}
        >
            <Box>
                <Box
                    borderColor="white"
                    borderStyle="single"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    gap={1}
                    width={boardWidth}
                    height={boardHeight}
                >
                    <Text>Board</Text>
                </Box>
            </Box>
        </Box>
    );
}

export default Board;
