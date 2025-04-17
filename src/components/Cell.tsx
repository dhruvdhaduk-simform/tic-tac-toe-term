import { Box } from 'ink';
import O from './O';
import X from './X';

function Cell({ option }: { option: 'O' | 'X' }) {
    const content = option === 'O' ? <O /> : <X />;

    return (
        <Box
            width={14}
            height={7}
            borderColor="white"
            borderStyle="single"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
        >
            {content}
        </Box>
    );
}

export default Cell;
