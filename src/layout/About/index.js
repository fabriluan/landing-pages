import React from 'react';
import * as styles from './style';
import Center from '../../components/Center';

import img from '../../assets/whiteText.png';

export default function About() {
  return (
    <styles.AboutSt>
      <Center>
        <styles.AboutGroupText>
          <h2 className="text_title">
            Por que
            {' '}
            <b>escolher</b>
            {' '}
            a nossa
            {' '}
            <b>Empresa?</b>
          </h2>

          <p>Valorizamos a singularidade de cada cliente. Ao escolher nossa empresa, você recebe uma abordagem personalizada, onde nos dedicamos a entender suas metas e criar uma landing page que reflita a identidade única do seu negócio.</p>
        </styles.AboutGroupText>

        <img src={img} alt="logo" />
      </Center>
    </styles.AboutSt>
  );
}
