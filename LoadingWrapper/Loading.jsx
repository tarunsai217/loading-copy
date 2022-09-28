import * as React from 'react';
import './Loading.scss';
import Circle from './Loaders/Circle';

export default function Loading({ loading, ...props }) {
  return loading ? <p>Loading...</p> : <>{props.children}</>;
}
