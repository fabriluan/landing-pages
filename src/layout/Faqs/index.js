import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import * as styles from './style';
import Center from '../../components/Center';
import Faq from '../../components/Faq';

export default function Faqs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stylesA = {
    transform: isInView ? 'none' : 'translateX(-200px)',
    opacity: isInView ? 1 : 0,
    transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
  };

  return (
    <styles.FaqsSt id="faqs" ref={ref}>
      <Center>
        <h2 className="text_title">
          Perguntas
          {' '}
          <b>Frequentes</b>
        </h2>

        <styles.FaqsGroup style={stylesA}>
          <Faq title="A dúvida do usuário?" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in risus eu libero vulputate gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in risus eu libero vulputate gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in risus eu libero vulputate gravida." />
          <Faq title="A dúvida do usuário?" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in risus eu libero vulputate gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in risus eu libero vulputate gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in risus eu libero vulputate gravida." />
          <Faq title="A dúvida do usuário?" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in risus eu libero vulputate gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in risus eu libero vulputate gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in risus eu libero vulputate gravida." />
          <Faq title="A dúvida do usuário?" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in risus eu libero vulputate gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in risus eu libero vulputate gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in risus eu libero vulputate gravida." />

        </styles.FaqsGroup>
      </Center>
    </styles.FaqsSt>
  );
}
