import React, { Component } from 'react';
import './App.css';
import PropsComponent from './03/PropsComponent';
import BooleanCmoponent from './03/BooleanCmoponent';
import StateExample from './03/StateExample';
import Counter from './03/Counter2';
import NewCounter from './03/NewCounter';
import Todolist from './03/Todolist';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 1 };
    this.resetCount = this.resetCount.bind(this);
  }
  resetCount() {
    this.setState(({ count }) => ({ count: count + 10 }));
  }
  increaseCount() {
    this.setState(({ count }) => ({ count: count + 1 }));
  }
  render() {
    return (
      <div>
        <Counter count={this.state.count} onAdd={this.increaseCount.bind(this)} />
        <NewCounter count={this.state.count} />{' '}
        {/* newCounter만 갱신된 프로퍼티값을 동기화해서 갱신 값 적용 */}
        <button onClick={this.resetCount}>{this.state.count + 10}으로 초기화</button>
        <Todolist />
      </div>
    );
  }
}

export default App;
