// 스토어 설정 파일

import {createStore,combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import reducers from './reducers';

export default initStates => createStore(
    combineReducers(reducers),
    initStates,
    composeWithDevTools(), // 리덕스 크롬확장도구
);