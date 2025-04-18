import { Text, Newline } from 'ink';

const O_BLOCK_ART = [
' ███ ',
'█   █',
'█   █',
'█   █',
' ███ '
];

function O({ isPreview, isInWinningLine }: { isPreview?: boolean, isInWinningLine?: boolean }) {
    return (
        <Text color={isInWinningLine ? 'greenBright' : isPreview ? 'blackBright' : 'whiteBright'}>
            {
                O_BLOCK_ART.map((line) => (
                    <>
                        { line }
                        <Newline />
                    </>
                ))
            }
        </Text>
    );
}

export default O;