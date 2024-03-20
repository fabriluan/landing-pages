import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import { PreparatioGroup, PreparationSt } from './style';
import Center from '../../components/Center';
import Preparatio from '../../components/Preparatio';

export default function Preparation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const styles = {
    transform: isInView ? 'none' : 'translateX(-200px)',
    opacity: isInView ? 1 : 0,
    transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
  };

  return (
    <PreparationSt id="preparation" ref={ref}>
      <Center>
        <h2 className="text_title">
          Como é feita a
          {' '}
          <b>Landing Page</b>
          ?
        </h2>

        <PreparatioGroup style={styles}>
          <Preparatio number="1" title="Brienfing" text="Iniciamos com um contato direto, onde exploramos o briefing do negócio do cliente. Essa abordagem assegura que cada página atenda às necessidades exclusivas de cada cliente." />

          <Preparatio number="2" title="Design" text="Desenvolvemos o design, focando em estética e funcionalidade. Permitindo que o cliente valide e ajuste o design de acordo com suas preferências antes da implementação final." />

          <Preparatio number="3" title="Construção e lançamento" text="Após a aprovação do design pelo cliente, implementamos a página, garantindo uma transição suave do desenvolvimento para o lançamento online." />
        </PreparatioGroup>

      </Center>
    </PreparationSt>
  );
}
