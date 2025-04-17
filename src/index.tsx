import { render } from 'ink';
import App from './App';
import consola from 'consola';

async function prompPlayerNames(): Promise<[string, string]> {
    const player1Name = await consola.prompt('Enter Player 1 name :', {
        default: 'Player 1',
        placeholder: 'Player 1',
        type: 'text',
    });

    const player2Name = await consola.prompt('Enter Player 2 name :', {
        default: 'Player 2',
        placeholder: 'Player 2',
        type: 'text',
    });

    console.log([player1Name, player2Name]);

    return [player1Name, player2Name];
}

prompPlayerNames().then((playerNames) => {
    console.clear();
    render(<App player1Name={playerNames[0]} player2Name={playerNames[1]} />);
});
