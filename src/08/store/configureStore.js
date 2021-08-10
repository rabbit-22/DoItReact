import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '../reducers';
import thunk from 'redux-thunk';

export default initStates => createStore(
  combineReducers(reducers),
  initStates,
  composeWithDevTools(applyMiddleware(thunk)),
);