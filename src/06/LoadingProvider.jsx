// 컴포넌트에서 공급자 분리
import React from 'react';
import PropTypes from 'prop-types';

class LoadingProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = { loading: false };
    this.setLoading = this.setLoading.bind(this);
  }

  getChildContext() {
    // 홈페이지 컴포넌트에 사용된 공급자 데이터 항목
    return {
      loading: this.state.loading,
      setLoading: this.setLoading,
    };
  }

  setLoading(loading) {
    this.setState({ loading });
  }

  render() {
    return this.props.children; // 자식 프로퍼티 노드 출력
  }
}

LoadingProvider.childContextTypes = {
  loading: PropTypes.bool,
  setLoading: PropTypes.func,
};

export default LoadingProvider;
