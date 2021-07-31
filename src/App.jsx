import React, { Component } from 'react';
import './App.css';
import PropsComponent from './03/PropsComponent';
import BooleanCmoponent from './03/BooleanCmoponent';
import StateExample from './03/StateExample';
import Counter from './03/Counter';

class App extends Component {
  render() {
    return (
      <div>
        <PropsComponent name="두잇 리액트 예제" />
        <div>
          <b>지루할 때:</b>
          <BooleanCmoponent bored />
        </div>
        <div>
          <b>즐거울 때:</b>
          <BooleanCmoponent />
        </div>
        <StateExample />
        <Counter count={0} />
      </div>
    );
  }
}

export default App;
