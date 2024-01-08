import React, { useRef } from 'react';
import { Link } from 'react-scroll';
import { useInView } from 'framer-motion';
import Center from '../../components/Center';
import banner from '../../assets/banner.png';
import * as style from './style';

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const styles = {
    transform: isInView ? 'none' : 'translateX(-200px)',
    opacity: isInView ? 1 : 0,
    transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
  };

  return (
    <style.HomeSt id="home">
      <Center>
        <style.HomeText ref={ref} style={styles}>
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

        <img src={banner} alt="foto banner" style={styles} />
      </Center>
    </style.HomeSt>
  );
}
