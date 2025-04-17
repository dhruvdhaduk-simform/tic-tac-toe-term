import { Box } from 'ink';
import Cell from './Cell';
import type { GameState } from '../gameTypes';

function Board({ gameState }: { gameState: GameState }) {
    return (
        <Box
            borderColor="blackBright"
            borderStyle="single"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            paddingX={2}
        >
            {gameState.map((gameStateRow) => (
                <Box gap={1}>
                    {gameStateRow.map((gameStateCell) => (
                        <Cell option={gameStateCell} />
                    ))}
                </Box>
            ))}
        </Box>
    );
}

export default Board;
