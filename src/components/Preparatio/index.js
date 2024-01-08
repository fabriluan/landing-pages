import React from 'react';
import { PropTypes } from 'prop-types';
import { PreparatioSt } from './style';

export default function Preparatio({ number, title, text }) {
  return (
    <PreparatioSt>
      <h3>{number}</h3>
      <h4>{title}</h4>

      <p>{text}</p>
    </PreparatioSt>
  );
}

Preparatio.propTypes = {
  number: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
