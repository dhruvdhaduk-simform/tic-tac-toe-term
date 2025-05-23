import { Box } from 'ink';
import O from './O';
import X from './X';
import type { JSX } from 'react';

import type { CellOption } from '../gameTypes';

function Cell({
    option,
    isFocus,
    previewMark,
    isInWinningLine,
}: {
    option: CellOption;
    isFocus: boolean;
    previewMark: CellOption;
    isInWinningLine: boolean;
}) {
    let content: JSX.Element | '';
    switch (option) {
        case 'O':
            content = <O isInWinningLine={isInWinningLine} />;
            break;
        case 'X':
            content = <X isInWinningLine={isInWinningLine} />;
            break;
        default:
            if (isFocus) {
                switch (previewMark) {
                    case 'O':
                        content = <O isPreview={true} />;
                        break;
                    case 'X':
                        content = <X isPreview={true} />;
                        break;
                    default:
                        content = '';
                }
            } else {
                content = '';
            }
    }

    return (
        <Box
            width={13}
            height={7}
            borderColor={
                isFocus ? (option ? 'redBright' : 'greenBright') : 'white'
            }
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
