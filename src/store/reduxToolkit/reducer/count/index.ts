import { createReducer } from '@reduxjs/toolkit';
import { setCount } from './actions';

const reducer = createReducer(0, (builder) => {
  builder.addCase(setCount, (state, action) => {
    return action.payload;
  });
});

export default reducer;
export { setCount };
