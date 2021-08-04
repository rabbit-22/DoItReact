import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

class ReduxApp02 extends PureComponent {
  store = createStore(
    (state) => state,
    { loading: false, name: '두잇 리액트' },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
  componentDidMount() {
    this.store.dispatch({
      type: 'SET_LOADING',
      payload: true,
    });
  }
  render() {
    return <Provider store={this.store}>리덕스 예제</Provider>;
  }
}

export default ReduxApp02;
