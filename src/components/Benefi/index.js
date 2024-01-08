import React from 'react';
import { PropTypes } from 'prop-types';
import { BenefiSt } from './style';

export default function Benefi({ img, title, text }) {
  return (
    <BenefiSt>
      <img src={img} alt="imagem de beneficio" />
      <h4>{title}</h4>

      <p>{text}</p>
    </BenefiSt>
  );
}

Benefi.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
