import React from 'react';
import PropTypes from 'prop-types';

import { Provider } from './FormContext';

class FormProvider extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      values: {}, // 입력된 값을 모두 저장하는 객체
      errors: {}, // 유효성 검사 함수가 반환한 오류 메시지저장 객체
    };
    this.reset = this.reset.bind(this);
    this.onChange = this.onChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  onChange(name, updatedValue) {
    //Input 컴포넌트에서 입력값이 변경될때 실행될 콜백함수
    this.setState(
      ({ values }) => ({
        values: {
          ...values,
          [name]: updatedValue, // 입력값을 values의 새 값으로 변경
        },
      }),
      () => this.validate(this.state.values), // state가 변경된 다음 변경된 state의 값으로 유효성 검사 함수 실행
    );
  }

  reset() {
    this.setState({ values: {}, errors: {} }); // 컨텍스트의 values, errors값을 초기화
  }

  submit() {
    this.props.onSubmit(this.state.values); // 소비자에서 submit() 함수가 호출되면 onSubmit 프로퍼티로 전달받은 콜백 함수에 현재 입력된 값을 인자로 전달
  }

  validate(values) {
    const { validate } = this.props;
    if (!validate) {
      return;
    }
    const errors = this.props.validate(values); // 유효성 오류 결과값 저장
    this.setState({
      errors,
    });
  }

  render() {
    const { values, errors } = this.state;
    return (
      <Provider
        value={{
          errors, // 컨텍스트 데이터에 오류메시지와 입력값 포함
          values,
          onChange: this.onChange, // 입력된 컨텍스트값 변경하는 함수, 초기화하는 함수, 폼 전송 콜백함수 전달
          reset: this.reset,
          submit: this.submit,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

FormProvider.propTypes = {
  validate: PropTypes.func,
  onSubmit: PropTypes.func.isRequired,
};

FormProvider.defaultProps = {
  validate: () => ({}),
};

export default FormProvider;
