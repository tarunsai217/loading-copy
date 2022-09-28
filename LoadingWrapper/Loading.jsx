import * as React from 'react';
import './Loading.scss';
import Circle from './Loaders/Circle';

export default function Loading({ loading, ...props }) {
  return loading ? (
    <div className="loading-overlay">
      <Circle />
    </div>
  ) : (
    <>{props.children}</>
  );
}
