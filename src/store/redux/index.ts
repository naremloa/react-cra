import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history'
import countReducer from './count';
export * from './count';

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  count: countReducer,
  router: connectRouter(history),
});

const store = createStore(
  rootReducer,
  compose(
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__?.(),
    applyMiddleware(routerMiddleware(history)),
  ),
);

export type storeTypes = ReturnType<typeof rootReducer>

export default store;
