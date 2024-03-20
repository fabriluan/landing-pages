import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import { PreparatioGroup, PreparationSt } from '../Preparation/style';
import Center from '../../components/Center';
import Benefi from '../../components/Benefi';
import img1 from '../../assets/benefit.png';

export default function Benefit() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const styles = {
    transform: isInView ? 'none' : 'translateX(-200px)',
    opacity: isInView ? 1 : 0,
    transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
  };

  return (
    <PreparationSt id="benefit" ref={ref}>
      <Center>
        <h2 className="text_title">
          Os benefícios de ter nossa
          {' '}
          <b>Landing Page</b>
          ?
        </h2>

        <PreparatioGroup style={styles}>
          <Benefi img={img1} title="Adaptação ao Público-Alvo" text="adaptadas ao público-alvo personalizam mensagens, imagens e elementos de design para atrair efetivamente diferentes segmentos, garantindo uma conexão mais relevante e impactante." />
          <Benefi img={img1} title="Conversão" text="Impulsionam a conversão ao fornecer mensagens claras, chamadas de ação diretas e uma experiência focada, aumentando a probabilidade de os visitantes realizar a ação desejada." />
          <Benefi img={img1} title="Campanhas de Marketing" text="São peças fundamentais em campanhas de marketing, oferecendo foco específico e mensagens personalizadas para maximizar a conversão." />
        </PreparatioGroup>

      </Center>
    </PreparationSt>
  );
}
