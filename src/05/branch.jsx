import React from 'react';
import branch from 'recompose/branch';
import Button from '../04/Button';

function isLoading(props) {
  return props.isLoading;
}

function LoadingButton(props) {
  return <button disabled>로딩 중</button>;
}

export default branch(isLoading, () => LoadingButton)(Button);
