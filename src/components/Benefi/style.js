import styled from 'styled-components';

export const BenefiSt = styled.div`
  background-color: ${(props) => props.theme.background};
  box-shadow: 0px 0px 10px 2px ${(props) => props.theme.layoutBlue};
  border-radius: 0.5rem;
  padding: 20px 15px 30px 15px;
  max-width: 27%;
  max-width: 400px;
  min-height: 345px;

  img{
    width: 100%;
    max-width: 120px;
    border-radius: 4.5rem;
  }

  h4{
    font-size: 23px;
    font-weight: 900;
    margin-top: 10px;
    color: ${(props) => props.theme.layoutBlue};
  }

  p{
    margin-top: 10px;
    font-size: 18px;
  }

  @media screen and (max-width: 770px){
    margin-bottom: 30px;
    min-height: 100px;
    padding: 10px 10px 35px 10px;
  }
`;
