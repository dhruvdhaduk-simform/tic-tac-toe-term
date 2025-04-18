import { Box } from 'ink';
import Cell from './Cell';
import type { CellOption, CellLocation, GameState } from '../gameTypes';

function Board({
    gameState,
    focusCell,
    previewMark,
}: {
    gameState: GameState;
    focusCell: CellLocation;
    previewMark: CellOption;
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
                            previewMark={previewMark}
                        />
                    ))}
                </Box>
            ))}
        </Box>
    );
}

export default Board;
