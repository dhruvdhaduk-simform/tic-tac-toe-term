import { Text, Newline } from 'ink';

const X_BLOCK_ART = [
'█   █',
' █ █ ',
'  █  ',
' █ █ ',
'█   █'
];

function X({ isPreview, isInWinningLine }: { isPreview?: boolean, isInWinningLine?: boolean }) {
    return (
        <Text color={isInWinningLine ? 'greenBright' : isPreview ? 'blackBright' : 'whiteBright'}>
           {
                X_BLOCK_ART.map((line) => (
                    <>
                        { line }
                        <Newline />
                    </>
                ))
            }
        </Text>
    );
}

export default X;