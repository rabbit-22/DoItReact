import React from 'react';
import AsyncComponent from './AsyncComponent';

export default function AsyncMainPage() {
  return <AsyncComponent loader={() => import('../08/components/main/MainPage')} />;
}
