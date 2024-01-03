import React from 'react';
import { PreparatioGroup, PreparationSt } from './style';
import Center from '../../components/Center';
import Preparatio from '../../components/Preparatio';

export default function Preparation() {
  return (
    <PreparationSt>
      <Center>
        <h2 className="text_title">
          Como é feita a
          {' '}
          <b>Landing Page</b>
          {' '}
          ?
        </h2>

        <PreparatioGroup>
          <Preparatio />
          <Preparatio />
          <Preparatio />
        </PreparatioGroup>

      </Center>
    </PreparationSt>
  );
}
