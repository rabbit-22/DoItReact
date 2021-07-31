import React, { Component } from 'react';

class StateExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 생성자에서 반드시 초기화해야함
      loading: true,
      formData: ' no data',
    };
    this.handleData = this.handleData.bind(this);
    setTimeout(this.handleData, 4000); // 4초 후 handleData() 호출
  }
  handleData() {
    const data = 'new data';
    const { formData } = this.state; // state 변경
    this.setState({
      // state값은 setState함수로 변경
      loading: false,
      formData: data + formData,
    });
    console.log('loading값', this.state.loading);
  }
  render() {
    return (
      <div>
        <span>로딩중: {String(this.state.loading)}</span>
        <span>결과: {this.state.formData}</span>
      </div>
    );
  }
}

export default StateExample;
