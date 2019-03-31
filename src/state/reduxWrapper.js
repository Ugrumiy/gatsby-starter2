import React from 'react';
import { Provider } from 'react-redux';
import { createStore as reduxCreateStore, compose } from 'redux';
import rootReducer from '.';

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;

const createStore = () => reduxCreateStore(
  rootReducer,
  {},
  composeEnhancers(),
  );

export default ({ element }) => (
  <Provider store={createStore()}>{element}</Provider>
);
