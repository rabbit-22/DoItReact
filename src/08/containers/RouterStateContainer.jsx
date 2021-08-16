import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setLocation } from '../actions/routerActions';
import { withRouter } from 'react-router';
import compose from 'recompose/compose';

class RouterState extends React.PureComponent {
  componentDidMount() {
    const { setLocation, location } = this.props;
    setLocation(location);
  }
  componentDidUpdate() {
    const { setLocation, location } = this.props;
    setLocation(location);
  }
  render() {
    return null;
  }
}

RouterState.propTypes = {
  setLocation: PropTypes.func,
  location: PropTypes.object,
};

export default compose(connect(null, { setLocation }), withRouter)(RouterState);
// 다중 하이어오더 컴포넌트 조합 방법 (리덕스 액션호출함수와 라우터 주소 변경 구독기능 함께 사용할 수 있도록 구현)
