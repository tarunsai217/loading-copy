import * as React from 'react';
import './Loading.scss';
import DualRing from './Loaders/DualRing';
import Ellipsis from './Loaders/Ellipsis';
import Ring from './Loaders/Ring';
import Ripple from './Loaders/Ripple';
import Roller from './Loaders/Roller';
import Spinner from './Loaders/Spinner';

export default function Loading({
  loading,
  overlayColor,
  spinnerColor,
  ...props
}) {
  return loading ? (
    <div style={{ backgroundColor: overlayColor }} className="loading-overlay">
      <DualRing color={spinnerColor} />
      <Ellipsis color={spinnerColor} />
      <Ring color={spinnerColor} />
      <Ripple color={spinnerColor} />
      <Roller color={spinnerColor} />
      <Spinner color={spinnerColor} />
    </div>
  ) : (
    <>{props.children}</>
  );
}
