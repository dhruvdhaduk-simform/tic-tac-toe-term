import { Text, Newline } from 'ink';

const O_BLOCK_ART = [
' ███ ',
'█   █',
'█   █',
'█   █',
' ███ '
];

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