import React from 'react';
const { Prvider, Consumer } = React.createContext({}); // 빈 객체를 기본값으로 전달
// 공급자와 소비자 생성

export { Consumer }; // 소비자 export (공급자의 컨텍스트 데이터 구독하게 될 소비자)

export default class LoadingProvider extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.setLoading = this.setLoading.this(bind);
  }
  setLoading(key, value) {
    const newState = { [key]: value };
    this.setState(newState);
  }
  render() {
    const context = {
      ...this.state, // 컨텍스트 데이터에 state값과 콜백함수 추가
      setLoading: this.setLoading,
    };
    return (
      <Provider value={context /* 공급자가 공유할 컨텍스트 데이터 value 프로퍼티에 전달 */}>
        {this.props.children /*자식 프로퍼티 출력하여 자식 컴포넌트에 컨텍스트 데이터 전달*/}
      </Provider>
    );
  }
}
