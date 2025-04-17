import { Box } from 'ink';
import O from './O';
import X from './X';
import type { JSX } from 'react';

import type { CellOption } from '../gameTypes';

function Cell({ option, isFocus }: { option: CellOption; isFocus: boolean }) {
    let content: JSX.Element | '';
    switch (option) {
        case 'O':
            content = <O />;
            break;
        case 'X':
            content = <X />;
            break;
        default:
            content = '';
    }

    return (
        <Box
            width={13}
            height={7}
            borderColor={isFocus ? 'greenBright' : 'white'}
            borderStyle={isFocus ? 'double' : 'single'}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
        >
            {content}
        </Box>
    );
}

export default Cell;
