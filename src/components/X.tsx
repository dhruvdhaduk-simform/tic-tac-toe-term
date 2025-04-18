import { Text, Newline } from 'ink';

const X_BLOCK_ART = [
'█   █',
' █ █ ',
'  █  ',
' █ █ ',
'█   █'
];

function X({ isPreview }: { isPreview?: boolean }) {
    return (
        <Text color={isPreview ? 'blackBright' : 'whiteBright'}>
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