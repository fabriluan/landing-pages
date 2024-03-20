import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { MdOutlineClose } from 'react-icons/md';
import { FaBars } from 'react-icons/fa6';
import Center from '../../components/Center';
import logo from '../../assets/whiteText.png';
import {
  ButtonContact, ButtonMenu, HeaderNavApp, HeaderNavDesktop, HeaderSt,
} from './style';

export default function Header() {
  const [show, setShow] = useState(false);

  const links = [
    { href: 'home', name: 'Inicio' },
    { href: 'preparation', name: 'Preparo' },
    { href: 'benefit', name: 'Benefícios' },
    // { href: 'shope', name: 'Lojas' },
    { href: 'plan', name: 'Planos' },
    { href: 'faqs', name: 'FAQS' },
  ];

  const HandleShow = () => {
    setShow(!show);
  };

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

            <li><ButtonContact href="https://wa.me/554299235625?text=Gostaria%20de%20saber%20mais%20sobre%20os%20planos!" target="_blank">Entre em contato</ButtonContact></li>
          </ul>
        </HeaderNavDesktop>

        <ButtonMenu onClick={HandleShow}>
          <FaBars />
        </ButtonMenu>

        {show && (
          <HeaderNavApp>

            <button type="button" aria-label="button" onClick={HandleShow}>
              <MdOutlineClose />
            </button>

            <ul>
              {links.map((element) => (
                <li>
                  <Link
                    to={element.href}
                    smooth
                    offset={-80}
                    duration={700}
                    onClick={HandleShow}
                  >
                    {element.name}
                  </Link>
                </li>
              ))}

              <li><ButtonContact href="https://wa.me/554299235625?text=Gostaria%20de%20saber%20mais%20sobre%20os%20planos!" target="_blank">Entre em contato</ButtonContact></li>
            </ul>
          </HeaderNavApp>
        )}

      </Center>
    </HeaderSt>
  );
}
