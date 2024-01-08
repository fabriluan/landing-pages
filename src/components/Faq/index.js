import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { FaRegPlusSquare } from 'react-icons/fa';
import * as styles from './style';

export default function Faq({ title, text }) {
  const [show, setShow] = useState(false);

  const HandleShow = () => {
    setShow(!show);
  };

  return (
    <styles.FaqSt>
      <styles.FaqQuestion $isShow={show}>
        <h2>{title}</h2>
        <button type="button" aria-label="button" onClick={HandleShow}>
          <FaRegPlusSquare />
        </button>
      </styles.FaqQuestion>

      {show
        && (
        <styles.FaqResponse>
          <p>{text}</p>
        </styles.FaqResponse>
        )}

    </styles.FaqSt>
  );
}

Faq.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
