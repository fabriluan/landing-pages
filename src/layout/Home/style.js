import styled from 'styled-components';

export const HomeSt = styled.section`
  padding: 60px 0 20px 0;
  height: 85vh !important;
  min-height: 600px;


  .center{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  img{
    width: 100%;
    max-width: 600px;
  }
`;

export const HomeText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  
  h2{
    font-family: 'Rubik', sans-serif !important;
    font-weight: 300;
    display: flex;
    flex-direction: column;
    font-size: 33px;

    b{
      font-family: 'Rubik', sans-serif !important;
      font-weight: 800;
      font-size: 35px;
      text-transform: uppercase;
      margin: 2px 0;
    }
  }

  p{
    margin-top: 25px;
    font-size: 20px;
    width: 100%;
    max-width: 650px;
  }

  a{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 420px;
    background-color: transparent;
    border: 1px solid ${(props) => props.theme.layoutBlue};
    color: ${(props) => props.theme.layoutBlue};
    font-size: 20px;
    margin-top: 35px;
    font-weight: 700;
    padding: 10px 0;
    border-radius: 0.5rem;
    position: relative;
    z-index: 0;

    &::before{
      position: absolute;
      content: '';
      width: 0%;
      z-index: -1;
      height: 100%;
      left: 50%;
      top: 0%;
      border-radius: 0.5rem;
      background-color: ${(props) => props.theme.layoutBlue};
    }

    &:hover{
      transition: 0.7s;
      color: ${(props) => props.theme.white};

      &::before{
        transition: 0.7s;
        width: 100%;
        left: 0%;
      }
    }
  }
`;
