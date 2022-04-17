import {createBrowserHistory} from "history";
import storage from 'redux-persist/lib/storage';
import {persistStore, persistReducer} from 'redux-persist';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import font from "./font/font.reducer";

export const history = createBrowserHistory();

export const reducers = combineReducers({
  font,
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [],
  whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const middlewareComponents: any[] = [
  thunk,
  // routerMiddleware(history)
];

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  middlewareComponents.push(logger);
}

export const middleware = applyMiddleware(...middlewareComponents);

const store = createStore(persistedReducer, middleware);

export const persistor = persistStore(store);

export default store;
