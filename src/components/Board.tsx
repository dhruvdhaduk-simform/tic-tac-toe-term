import { Box } from 'ink';
import Cell from './Cell';

function Board() {
    return (
        <Box
            borderColor="blackBright"
            borderStyle="single"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            paddingX={2}
        >
            <Box gap={1}>
                <Cell option="O" />
                <Cell option="X" />
                <Cell option="O" />
            </Box>
            <Box gap={1}>
                <Cell option="X" />
                <Cell option="O" />
                <Cell option="O" />
            </Box>
            <Box gap={1}>
                <Cell option="O" />
                <Cell option="X" />
                <Cell option="X" />
            </Box>
        </Box>
    );
}

export default Board;
