import { render } from 'ink';
import App from './App';
import { createInterface } from 'readline';

async function prompPlayerNames(): Promise<[string, string]> {
    const r1 = createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    const ask = (question: string) => {
        return new Promise((resolve) => r1.question(question, resolve));
    };
    const player1NameResponse = await ask('Enter Player 1 name : ');
    const player2NameResponse = await ask('Enter Player 2 name : ');
    let player1Name: string;
    let player2Name: string;

    if (
        typeof player1NameResponse === 'string' &&
        player1NameResponse.trim() !== ''
    ) {
        player1Name = player1NameResponse;
    } else {
        player1Name = 'Player 1';
    }

    r1.close();

    if (
        typeof player2NameResponse === 'string' &&
        player2NameResponse.trim() !== ''
    ) {
        player2Name = player2NameResponse;
    } else {
        player2Name = 'Player 2';
    }

    return [player1Name.trim(), player2Name.trim()];
}

prompPlayerNames().then((playerNames) => {
    if (playerNames[0] === playerNames[1]) {
        console.error(
            'Please provide different names from Player 1 & Player 2.'
        );
        return;
    }
    console.clear();
    render(<App player1Name={playerNames[0]} player2Name={playerNames[1]} />);
});
