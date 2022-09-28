import React, { useState } from 'react';
import './style.css';
import LoadingWrapper from './LoadingWrapper';

export default function App() {
  const [loading, setloading] = useState(false);
  return (
    <div>
      <LoadingWrapper loading={loading}>
        <div>
          <h1>Hello StackBlitz!</h1>
          <p>Start editing to see some magic happen :)</p>
        </div>
      </LoadingWrapper>
      <button
        className="toggle-button"
        onClick={() => setloading((prev) => !prev)}
      >
        Toggle
      </button>
    </div>
  );
}
