export const SETCOUNT = 'SETCOUNT';

export interface actionsTypes {
  type: typeof SETCOUNT,
  payload: number,
}

export const setCount = (num: number): actionsTypes => ({
  type: SETCOUNT,
  payload: num,
})