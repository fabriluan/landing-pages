import React from 'react';
import { ShopeGroup, ShopeSt } from './style';
import Shop from '../../components/Shop';

export default function Shope() {
  return (
    <ShopeSt>
      <h2 className="text_title">
        Nossas
        {' '}
        <b>Landing Pages</b>
      </h2>

      <ShopeGroup>
        <Shop />
      </ShopeGroup>
    </ShopeSt>
  );
}
