import { Box, Text } from 'ink';
import type {
    GameResult,
    GameStatistic,
    PlayerMarks,
    Turn,
} from '../gameTypes';
import { JSX } from 'react';

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
    let gameResultRender: JSX.Element;
    switch (gameResult.status) {
        case 'won':
            gameResultRender = (
                <>
                    <Text color="greenBright" bold>
                        {gameResult.winner === 'player1'
                            ? `${player1Name} Won.`
                            : `${player2Name} Won.`}
                    </Text>
                    <Text>Press "Enter" to start new game.</Text>
                </>
            );

            break;
        case 'draw':
            gameResultRender = (
                <>
                    <Text color="greenBright" bold>
                        Draw.
                    </Text>
                    <Text>Press "Enter" to start new game.</Text>
                </>
            );
            break;
        case 'playing':
            gameResultRender = (
                <>
                    <Text
                        bold={turn === 'player1'}
                        color={turn === 'player1' ? 'greenBright' : 'white'}
                    >
                        {playerMarks.player1}: {player1Name}
                        {turn === 'player1' && "'s turn"}
                    </Text>
                    <Text
                        bold={turn === 'player2'}
                        color={turn === 'player2' ? 'greenBright' : 'white'}
                    >
                        {playerMarks.player2}: {player2Name}
                        {turn === 'player2' && "'s turn"}
                    </Text>
                </>
            );
            break;
    }

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
                {gameResultRender}
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
