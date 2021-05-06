import { createAction } from '@reduxjs/toolkit';

const SETCOUNT = 'SETCOUNT';

export const setCount = createAction<number | undefined>(SETCOUNT);
