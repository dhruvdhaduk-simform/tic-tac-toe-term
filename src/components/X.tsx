import { Text, Newline } from 'ink';

const X_BLOCK_ART = [
'█   █',
' █ █ ',
'  █  ',
' █ █ ',
'█   █'
];

function X() {
    return (
        <Text>
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