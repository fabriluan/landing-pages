import styled from 'styled-components';

export const FaqSt = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const FaqQuestion = styled.div`
  width: 100%;
  margin-top: 35px;
  padding: 13px 30px;
  display: flex;
  border-radius: ${(props) => (props.$isShow ? '0.5rem 0.5rem 0rem 0rem' : '0.5rem')}; 
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => (props.$isShow ? props.theme.layoutPink : props.theme.layoutBlue)};

  h2{
    font-size: 19px;
    font-weight: 500;
  }

  button{
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }

  svg{
    color: ${(props) => props.theme.white};
    font-size: 23px;
  }
`;

export const FaqResponse = styled.div`
  border-bottom: 2px solid ${(props) => props.theme.layoutPink};
  border-left: 2px solid ${(props) => props.theme.layoutPink};
  border-right: 2px solid ${(props) => props.theme.layoutPink};
  border-radius: 0rem 0rem 0.5rem 0.5rem;
  padding: 20px;

  p{
    font-size: 19px;
  }
`;
