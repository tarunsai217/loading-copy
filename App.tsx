import * as React from 'react';
import './style.css';
import LoadingWrapper from './LoadingWrapper';

export default function App() {
  return (
    <LoadingWrapper loading={false}>
      <div>
        <h1>Hello StackBlitz!</h1>
        <p>Start editing to see some magic happen :)</p>
      </div>
    </LoadingWrapper>
  );
}
