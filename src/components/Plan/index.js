import React from 'react';
import { FaCheckSquare, FaWindowClose } from 'react-icons/fa';
import { PropTypes } from 'prop-types';
import * as styles from './style';

export default function Plan({
  name, prince, princeX, premium, custom,
}) {
  return (
    <styles.PlanSt $isPremium={premium} $isCustom={custom}>
      <styles.PlanText $isCustom={custom}>
        <span>plano</span>
        <h1>{name}</h1>
        <h2>{prince}</h2>
        <span>
          em até 12x de
          {' '}
          <b>{princeX}</b>
        </span>

        <p>Quais meu benefícios?</p>
      </styles.PlanText>
      <styles.PlanBenefit $isCustom={custom} $isPremium={premium}>

        <div>
          <FaCheckSquare color="#CB13A4" />
          <span>Garantia de 10 dias</span>
        </div>
        <div>
          <FaCheckSquare color="#CB13A4" />
          <span>Garantia de 10 dias</span>
        </div>
        <div>
          <FaCheckSquare color="#CB13A4" />
          <span>Garantia de 10 dias</span>
        </div>
        <div>
          <FaCheckSquare color="#CB13A4" />
          <span>Garantia de 10 dias</span>
        </div>
        <div>
          <FaCheckSquare color="#CB13A4" />
          <span>Garantia de 10 dias</span>
        </div>

        <div>
          <FaWindowClose color="#2E2E2E" />
          <span>Garantia de 10 dias</span>
        </div>

        <div>
          <FaCheckSquare color="#CB13A4" />
          <span>Garantia de 10 dias</span>
        </div>

        <div>
          <FaWindowClose color="#2E2E2E" />
          <span>Garantia de 10 dias</span>
        </div>

        <div>
          <FaCheckSquare color="#CB13A4" />
          <span>Garantia de 10 dias</span>
        </div>

        <div>
          <FaWindowClose color="#2E2E2E" />
          <span>Garantia de 10 dias</span>
        </div>

        <div>
          <FaCheckSquare color="#CB13A4" />
          <span>Garantia de 10 dias</span>
        </div>

        <div>
          <FaWindowClose color="#2E2E2E" />
          <span>Garantia de 10 dias</span>
        </div>

        <a href="#1">Quero este plano</a>

      </styles.PlanBenefit>
    </styles.PlanSt>
  );
}

Plan.propTypes = {
  name: PropTypes.string.isRequired,
  prince: PropTypes.string.isRequired,
  princeX: PropTypes.string.isRequired,
  premium: PropTypes.bool.isRequired,
  custom: PropTypes.bool.isRequired,
};
