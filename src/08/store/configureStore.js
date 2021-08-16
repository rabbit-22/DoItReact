import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '../reducers';
import thunk from 'redux-thunk';
import notificationEffects from '../middlewares/notificationEffects';

import { middleware as reduxPackMiddleware} from 'redux-pack';
import searchFilterEffects from '../middlewares/searchFilterEffects';
import routerEffects from '../middlewares/routerEffects';

export default initStates => createStore(
  combineReducers(reducers),
  initStates,
  composeWithDevTools(applyMiddleware(thunk, reduxPackMiddleware,notificationEffects, searchFilterEffects,routerEffects)),
);