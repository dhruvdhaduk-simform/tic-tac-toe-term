import { Text, Newline } from 'ink';

// prettier-ignore-start
const O_BLOCK_ART = [
' ███ ',
'█   █',
'█   █',
'█   █',
' ███ '
];
// prettier-ignore-end

function O() {
    return (
        <Text>
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