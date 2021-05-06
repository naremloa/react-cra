import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
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
    /* eslint-disable no-underscore-dangle */
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__?.(),
    /* eslint-enable no-underscore-dangle */
    applyMiddleware(routerMiddleware(history)),
  ),
);

export type StoreTypes = ReturnType<typeof rootReducer>;

export default store;
