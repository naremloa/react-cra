export const SETCOUNT = 'SETCOUNT';

export interface ActionsTypes {
  type: typeof SETCOUNT;
  payload: number;
}

export const setCount = (num: number): ActionsTypes => ({
  type: SETCOUNT,
  payload: num,
});
