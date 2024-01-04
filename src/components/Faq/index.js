import React, { useState } from 'react';
import { FaRegPlusSquare } from 'react-icons/fa';
import * as styles from './style';

export default function Faq() {
  const [show, setShow] = useState(false);

  const HandleShow = () => {
    setShow(!show);
  };

  return (
    <styles.FaqSt>
      <styles.FaqQuestion $isShow={show}>
        <h2>A dúvida frequente que o usuáriko vai ter </h2>
        <button type="button" aria-label="button" onClick={HandleShow}>
          <FaRegPlusSquare />
        </button>
      </styles.FaqQuestion>

      {show
        && (
        <styles.FaqResponse>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum ultrices nisi id cursus. Maecenas hendrerit consequat velit. Nullam congue risus neque, sed iaculis risus elementum eget. Vivamus at purus lectus. Nunc porttitor nunc quis dui tincidunt lobortis. Nulla et odio non urna imperdiet feugiat. Nullam aliquet neq</p>
        </styles.FaqResponse>
        )}

    </styles.FaqSt>
  );
}
