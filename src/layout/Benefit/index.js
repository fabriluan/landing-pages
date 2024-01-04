import React from 'react';
import { PreparatioGroup, PreparationSt } from '../Preparation/style';
import Center from '../../components/Center';
import Benefi from '../../components/Benefi';

export default function Benefit() {
  return (
    <PreparationSt>
      <Center>
        <h2 className="text_title">
          Os benefícios de ter nossa
          {' '}
          <b>Landing Page</b>
          ?
        </h2>

        <PreparatioGroup>
          <Benefi />
          <Benefi />
          <Benefi />
        </PreparatioGroup>

      </Center>
    </PreparationSt>
  );
}
