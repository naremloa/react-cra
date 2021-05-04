import { configureStore } from "@reduxjs/toolkit";
import countReducer from './count';
export * from './count';

const store = configureStore({
  reducer: {
    count: countReducer,
  },
});

export type storeTypes = ReturnType<typeof store.getState>;

export default store;