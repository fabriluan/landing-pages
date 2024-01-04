import styled from 'styled-components';

export const PlanSt = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 15px;
  width: 100%;
  max-width: 400px;
  border: 1px solid ${(props) => props.theme.layoutBlue};
  border-radius: 0.5rem;
  ${(props) => (props.$isPremium ? `box-shadow: 0px 0px 10px 2px ${props.theme.layoutBlue}` : '')}

  ${(props) => (props.$isCustom ? `  color: ${props.theme.dark};
  background-color: ${props.theme.white};
  border: 1px solid ${props.theme.layoutPink};` : '')}
  
`;

export const PlanText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;

  span{
    font-size: 18px;
    font-weight: 300;

    b{
      font-weight: 900;
    }
  }

  h1{
    font-family: 'Rubik', sans-serif;
    font-weight: 900;
    font-size: 40px;
    text-transform: uppercase;
    margin-top: 10px;
  }

  h2{
    font-family: 'Rubik', sans-serif;
    font-weight: 900;
    font-size: 45px;
    color: ${(props) => (props.$isCustom ? props.theme.layoutPink : props.theme.layoutBlue)};
    text-transform: uppercase;
    margin: 10px 0 13px 0;
  }

  p{
    margin-top: 35px;
    font-size: 20px;
    font-weight: 500;
  }
`;

export const PlanBenefit = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  div{
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 15px;

    span{
      font-size: 20px;
      font-weight: 300;
    }

    svg{
      font-size: 20px;
      margin-right: 7px;
      color: ${(props) => props.theme.layoutPink};
    }
  }

  a{
    width: 100%;
    background-color: ${(props) => (props.$isCustom ? props.theme.layoutPink : props.theme.layoutBlue)};
    border-radius: 0.5rem;
    font-size: 18px;
    color: ${(props) => props.theme.white};
    font-weight: 700;
    text-align: center;
    margin: 30px 0 10px 0;
    padding: 12px;

    &:hover{
      transition: 0.7s;
      box-shadow: 0px 0px 5px 2px ${(props) => (props.$isCustom ? props.theme.layoutPink : props.theme.layoutBlue)};
    }
  }
`;

export const PlanCustom = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 15px;
  width: 100%;
  max-width: 400px;
  color: ${(props) => props.theme.dark};
  background-color: ${(props) => props.theme.white};
  border: 1px solid ${(props) => props.theme.layoutPink};
  border-radius: 0.5rem;
`;
