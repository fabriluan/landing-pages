import React from 'react';
import { Link } from 'react-scroll';
import Center from '../../components/Center';
import banner from '../../assets/banner.png';
import * as style from './style';

export default function Home() {
  return (
    <style.HomeSt>
      <Center>
        <style.HomeText>
          <h2>
            Crie sua
            {' '}
            <b>Landing Page</b>
            {' '}
            de Alta Performance
          </h2>

          <p>Crie agora sua landing page de alta performace e 100% profissional, uma landing page vai alanvançar o seu negócio em até 200%</p>

          <Link to="#1">Crie sua Landing Page agora!</Link>
        </style.HomeText>

        <img src={banner} alt="foto banner" />
      </Center>
    </style.HomeSt>
  );
}
