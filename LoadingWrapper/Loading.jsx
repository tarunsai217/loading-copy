import * as React from 'react';
import './Loading.scss';
// import DualRing from './Loaders/DualRing';
// import Ellipsis from './Loaders/Ellipsis';
// import Ring from './Loaders/Ring';
// import Ripple from './Loaders/Ripple';
// import Spinner from './Loaders/Spinner';

export default function Loading({
  loading,
  overlayColor,
  spinnerColor,
  ...props
}) {
  return loading ? (
    <div style={{ backgroundColor: overlayColor }} className="loading-overlay">
      Test 123
      {/* <Ripple color={spinnerColor} /> */}
      {/* <Spinner color={spinnerColor} /> */}
      {/* <DualRing color={spinnerColor} /> */}
      {/* <Ellipsis color={spinnerColor} /> */}
      {/* <Ring color={spinnerColor} /> */}
    </div>
  ) : (
    <>{props.children}</>
  );
}
