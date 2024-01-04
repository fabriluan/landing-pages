import React from 'react';
import * as styles from './style';
import computer from '../../assets/computer.png';
import phone from '../../assets/phone.png';

export default function Shop() {
  return (
    <styles.ShopSt>
      <styles.ShopText>
        <h2 className="text_title">
          Fabricio
          {' '}
          <b>Cipriano</b>
        </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in risus eu libero vulputate gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in risus eu libero vulputate gravida. </p>
        <button type="button">Ver online</button>
      </styles.ShopText>

      <styles.ShopImg $isComputer={computer} $isPhone={phone}>
        <div className="computer" />
        <div className="phone" />
      </styles.ShopImg>
    </styles.ShopSt>
  );
}
