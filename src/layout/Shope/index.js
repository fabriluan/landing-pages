import React from 'react';
import Carousel from 'react-elastic-carousel';
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
        <Carousel initialActiveIndex={0}>
          <Shop />
          <Shop />
          <Shop />
        </Carousel>
      </ShopeGroup>
    </ShopeSt>
  );
}
