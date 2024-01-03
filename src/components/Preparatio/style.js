import styled from 'styled-components';

export const PreparatioSt = styled.div`
  background-color: ${(props) => props.theme.background};
  box-shadow: 0px 0px 10px 2px ${(props) => props.theme.layoutPink};
  border-radius: 0.5rem;
  padding: 5px 15px 30px 15px;
  max-width: 27%;
  max-width: 400px;

  h3{
    font-family: 'Rubik', sans-serif !important;
    font-weight: 800;
    font-size: 130px;
    margin: -5px 0;
  }

  h4{
    font-size: 23px;
    font-weight: 900;
    color: ${(props) => props.theme.layoutPink};
  }

  p{
    margin-top: 10px;
    font-size: 18px;
  }
`;
