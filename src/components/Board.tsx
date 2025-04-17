import { Box } from 'ink';
import Cell from './Cell';
import type { FocusCell, GameState } from '../gameTypes';

function Board({
    gameState,
    focusCell,
}: {
    gameState: GameState;
    focusCell: FocusCell;
}) {
    return (
        <Box
            borderColor="blackBright"
            borderStyle="single"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            paddingX={2}
        >
            {gameState.map((gameStateRow, rowIndex) => (
                <Box gap={1}>
                    {gameStateRow.map((gameStateCell, colIndex) => (
                        <Cell
                            option={gameStateCell}
                            isFocus={
                                focusCell.row === rowIndex &&
                                focusCell.col === colIndex
                            }
                        />
                    ))}
                </Box>
            ))}
        </Box>
    );
}

export default Board;
