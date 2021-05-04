import { createStore, combineReducers } from "redux";
import countReducer from './count';
export * from './count';

const rootReducer = combineReducers({
  count: countReducer,
});

const store = createStore(
  rootReducer,
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__?.()
);

export type storeTypes = ReturnType<typeof rootReducer>

export default store;
