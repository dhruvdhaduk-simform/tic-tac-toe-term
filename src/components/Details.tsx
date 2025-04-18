import { Box, Text } from 'ink';
import type {
    GameResult,
    GameStatistic,
    PlayerMarks,
    Turn,
} from '../gameTypes';

function Details({
    player1Name,
    player2Name,
    turn,
    playerMarks,
    gameStatistics,
    gameResult,
}: {
    player1Name: string;
    player2Name: string;
    turn: Turn;
    playerMarks: PlayerMarks;
    gameStatistics: GameStatistic;
    gameResult: GameResult;
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
                <Text>
                    {playerMarks.player1}: {player1Name}
                    {turn === 'player1' && "'s turn"}
                </Text>
                <Text>
                    {playerMarks.player2}: {player2Name}
                    {turn === 'player2' && "'s turn"}
                </Text>
                <Text>------------------------</Text>
                <Text>Total Games : {gameStatistics.totalGames}</Text>
                <Text>
                    {player1Name} won : {gameStatistics.player1Won}
                </Text>
                <Text>
                    {player2Name} won : {gameStatistics.player2Won}
                </Text>
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
