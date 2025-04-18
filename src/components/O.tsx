import { Text, Newline } from 'ink';

const O_BLOCK_ART = [
' ███ ',
'█   █',
'█   █',
'█   █',
' ███ '
];

function O({ isPreview }: { isPreview?: boolean }) {
    return (
        <Text color={isPreview ? 'blackBright' : 'whiteBright'}>
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