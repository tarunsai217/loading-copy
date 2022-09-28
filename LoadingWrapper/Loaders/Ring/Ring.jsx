import * as React from 'react';
import './Ring.scss';

export default function Ring({ color }) {
  return (
    <div class="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
