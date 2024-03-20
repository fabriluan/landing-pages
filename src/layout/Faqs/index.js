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
          <Faq title="Quanto tempo leva para construir meu site?" text="O site depende muito da complexibilidade. Normalmente, leva entre 3 a 7 dias para concluir um projeto." />

          <Faq title="Preciso ter domínio e hospedagem?" text="Sim, nosso equipe te auxiliara para compra de dominio e hospedagem " />

          <Faq title="Qual é a política de reembolso?" text="Nossa política de reembolso é muito simples: se você solicitar um reembolso antes do projeto ser iniciado, teremos o maior prazer em reembolsá-lo. Depois que o projeto é criado, não há reembolso. Todos os projetos criados e entregues aos clientes não são reembolsáveis porque não há como recuperar nossos custos depois de criar o projeto." />

          <Faq title="Qual é a estrutura de criação do site?" text="É feita preferêncialmente pelo WordPress que é a ferramenta de criação de sites mais utilizadas do mundo, porém trabalhamos com sites via ReactJs também" />

        </styles.FaqsGroup>
      </Center>
    </styles.FaqsSt>
  );
}
