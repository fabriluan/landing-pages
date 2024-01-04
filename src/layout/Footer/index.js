import React from 'react';
import { Link } from 'react-scroll';
import { MdEmail } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';
import * as styles from './style';
import Center from '../../components/Center';
import logo from '../../assets/whiteText.png';

export default function Footer() {
  const links = [
    { href: '#home', name: 'Inicio' },
    { href: '#preparation', name: 'Preparo' },
    { href: '#benefit', name: 'Benefícios' },
    { href: '#shope', name: 'Lojas' },
    { href: '#plan', name: 'Planos' },
    { href: '#faqs', name: 'FAQS' },
  ];

  return (
    <styles.FooterSt>
      <Center>
        <styles.FooterGroup>

          <styles.FooterAbout>
            <img src={logo} alt="Webtyn" />
            <p>A webtyn é uma agênica de markenting digital com mais de 2 anos e vem mudando a forma como as pessoas compram e vender na internet</p>
          </styles.FooterAbout>

          <styles.FooterNav>
            <h3>Continue navegando</h3>

            <ul>
              {links.map((element) => (
                <li><Link to={element.href} offset="90px">{element.name}</Link></li>
              ))}
            </ul>
          </styles.FooterNav>

          <styles.FooterCall>
            <h3>Fale Conosco</h3>

            <p>
              <BsTelephoneFill />
              (00) 00000-0000
            </p>
            <p>
              <MdEmail />
              {' '}
              contato@webtyn.com
            </p>
          </styles.FooterCall>
        </styles.FooterGroup>

        <styles.FooterCopy>
          Todos os direitos reservados para WebTyn &copy; - CNPJ : 00.000.000/0001-00
        </styles.FooterCopy>
      </Center>
    </styles.FooterSt>
  );
}