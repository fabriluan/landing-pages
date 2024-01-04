import React from 'react';
import { BenefiSt } from './style';
import benefit from '../../assets/benefit.png';

export default function Benefi() {
  return (
    <BenefiSt>
      <img src={benefit} alt="imagem de beneficio" />
      <h4>Brienfing</h4>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in risus eu libero vulputate gravida. </p>
    </BenefiSt>
  );
}
