import { configureStore } from "@reduxjs/toolkit";
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from "history";
import countReducer from './count';
export * from './count';

export const history = createBrowserHistory();

const store = configureStore({
  reducer: {
    count: countReducer,
    router: connectRouter(history),
  },
  middleware: [
    routerMiddleware(history),
  ]
});

export type storeTypes = ReturnType<typeof store.getState>;

export default store;