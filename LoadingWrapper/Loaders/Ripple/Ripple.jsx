import * as React from 'react';
import './Ripple.scss';

export default function Ripple({ color }) {
  console.log('ripple color', color);
  return (
    <div class="lds-ripple">
      <div style={{ borderColor: color }}></div>
      <div style={{ borderColor: color }}></div>
    </div>
  );
}
