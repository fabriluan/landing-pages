import React from 'react';
import { PlanGroup, PlansSt } from './style';
import Plan from '../../components/Plan';
import Center from '../../components/Center';

export default function Plans() {
  return (
    <PlansSt>
      <Center>
        <h2 className="text_title">
          Escolha seu
          {' '}
          <b>Plano</b>
        </h2>

        <PlanGroup>
          <Plan name="Basic" prince="R$ 299,99" princeX="27,99" />
          <Plan name="Basic" prince="R$ 329,99" princeX="27,99" premium />
          <Plan name="Custom" prince="R$ 599,99" princeX="27,99" custom />
        </PlanGroup>
      </Center>
    </PlansSt>
  );
}
