import { createContext } from 'react';

export const DimensionContext = createContext({
    width: process.stdout.columns,
    height: process.stdout.rows,
});
