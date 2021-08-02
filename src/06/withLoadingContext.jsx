// 소비자를 반환하는 하이어오더 컴포넌트
import React from 'react';
import PropTypes from 'prop-types';

export const loadingPropTypes = {
  loading: PropTypes.bool,
  setLoading: PropTypes.func,
};

export default (WrappedComponent) => {
  const { displayName, name: componentName } = WrappedComponent;
  const wrappedComponentName = displayName || componentName;

  function WithLoadingContext(props, context) {
    const { loading, setLoading } = context;
    return <WrappedComponent {...props} loading={loading} setLoading={setLoading} />;
    // 컨텍스트로 전달받은 객체를 프로퍼티로 변환하여 전달
  }
  WithLoadingContext.displayName = `withLoadingContext(${wrappedComponentName})`;
  WithLoadingContext.contextTypes = loadingPropTypes;
  return WithLoadingContext;
};
