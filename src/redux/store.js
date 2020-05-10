import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import reducer from './root-reducer';

const middleware = [logger];

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export const persistor = persistStore(store);
