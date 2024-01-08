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
          <Preparatio number="1" title="Brienfing" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in risus eu libero vulputate gravida." />
          <Preparatio number="1" title="Brienfing" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in risus eu libero vulputate gravida." />
          <Preparatio number="1" title="Brienfing" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in risus eu libero vulputate gravida." />
        </PreparatioGroup>

      </Center>
    </PreparationSt>
  );
}
