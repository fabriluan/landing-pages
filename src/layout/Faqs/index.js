import React from 'react';
import * as styles from './style';
import Center from '../../components/Center';
import Faq from '../../components/Faq';

export default function Faqs() {
  return (
    <styles.FaqsSt>
      <Center>
        <h2 className="text_title">
          Perguntas
          {' '}
          <b>Frequentes</b>
        </h2>

        <styles.FaqsGroup>
          <Faq />
          <Faq />
          <Faq />
          <Faq />
        </styles.FaqsGroup>
      </Center>
    </styles.FaqsSt>
  );
}
