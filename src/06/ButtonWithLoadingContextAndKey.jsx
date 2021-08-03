// 하이어오더 컴포넌트로 소비자 만들기

import React from 'react';
import PropTypes from 'prop-types';
import Button from '../04/Button';
import withLoadingContextAndKey, { loadingPropTypes } from './withLoadingContextAndKey';
// 소비자와 추가될 프로퍼티 정보

function ButtonWithLoadingContext({ children, loading, setLoading }) {
  return <Button onPress={() => setLoading(!loading)}>{loading ? '로딩중' : children}</Button>;
}

ButtonWithLoadingContext.propTypes = {
  ...loadingPropTypes, // 하이어오더 컴포넌트에서 새롭게 추가된 프로퍼티를 함께 할당
  children: PropTypes.string,
};

export const ButtonWithDefaultLoadingContext =
  withLoadingContextAndKey('defaultLoadingKey')(ButtonWithLoadingContext);
// 이중 커링 구조의 생성 함수를 키값 없이 사용하여 기본 공급자와 연결된 버튼 컴포넌트 생성
export const ButtonWithLoading2Context =
  withLoadingContextAndKey('loading2')(ButtonWithLoadingContext);
// loading2 키값으로 생성된 공급자와 연결된 버튼 컴포넌트 생성 (어렵당,,,)
