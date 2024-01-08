import React from 'react';
import { Link } from 'react-scroll';
import Center from '../../components/Center';
import logo from '../../assets/whiteText.png';
import { ButtonContact, HeaderNavDesktop, HeaderSt } from './style';

export default function Header() {
  const links = [
    { href: 'home', name: 'Inicio' },
    { href: 'preparation', name: 'Preparo' },
    { href: 'benefit', name: 'Benefícios' },
    { href: 'shope', name: 'Lojas' },
    { href: 'plan', name: 'Planos' },
    { href: 'faqs', name: 'FAQS' },
  ];
  return (
    <HeaderSt>
      <Center>
        <img src={logo} alt="" />

        <HeaderNavDesktop>
          <ul>
            {links.map((element) => (
              <li>
                <Link
                  to={element.href}
                  smooth
                  offset={-90}
                  duration={700}
                >
                  {element.name}
                </Link>

              </li>
            ))}

            <li><ButtonContact>Entre em contato</ButtonContact></li>
          </ul>
        </HeaderNavDesktop>
      </Center>
    </HeaderSt>
  );
}
