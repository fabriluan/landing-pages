import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import { PlanGroup, PlansSt } from './style';
import Plan from '../../components/Plan';
import Center from '../../components/Center';

export default function Plans() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const styles = {
    transform: isInView ? 'none' : 'translateX(-200px)',
    opacity: isInView ? 1 : 0,
    transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
  };

  return (
    <PlansSt id="plan" ref={ref}>
      <Center>
        <h2 className="text_title">
          Escolha seu
          {' '}
          <b>Plano</b>
        </h2>

        <PlanGroup style={styles}>
          <Plan name="Basic" prince="R$ 299,99" princeX="27,99" />
          <Plan name="Basic" prince="R$ 329,99" princeX="27,99" premium />
          <Plan name="Custom" prince="R$ 599,99" princeX="27,99" custom />
        </PlanGroup>
      </Center>
    </PlansSt>
  );
}
