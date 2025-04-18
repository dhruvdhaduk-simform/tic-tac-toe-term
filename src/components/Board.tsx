import { Box } from 'ink';
import Cell from './Cell';
import type {
    CellOption,
    CellLocation,
    GameState,
    GameResult,
} from '../gameTypes';

function Board({
    gameState,
    focusCell,
    previewMark,
    gameResult,
}: {
    gameState: GameState;
    focusCell: CellLocation;
    previewMark: CellOption;
    gameResult: GameResult;
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
                    {gameStateRow.map((gameStateCell, colIndex) => {
                        let isInWinningLine = false;
                        if (gameResult.winningLine) {
                            gameResult.winningLine.forEach((cell) => {
                                if (
                                    cell.row === rowIndex &&
                                    cell.col === colIndex
                                ) {
                                    isInWinningLine = true;
                                    return;
                                }
                            });
                        }

                        return (
                            <Cell
                                option={gameStateCell}
                                isFocus={
                                    focusCell.row === rowIndex &&
                                    focusCell.col === colIndex
                                }
                                previewMark={previewMark}
                                isInWinningLine={isInWinningLine}
                            />
                        );
                    })}
                </Box>
            ))}
        </Box>
    );
}

export default Board;
