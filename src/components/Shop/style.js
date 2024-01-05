import styled from 'styled-components';

export const ShopSt = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  /* max-width: 1200px; */
  margin: 0 20px;
  height: 500px;
  padding: 30px 50px;
  background-color: ${(props) => props.theme.background};
  box-shadow: 0px 0px 10px 2px ${(props) => props.theme.layoutPink};
`;

export const ShopText = styled.div`
  width: 100%;
  max-width: 400px;
  
  h2{
    text-align: left;
  }

  p{
    font-size: 20px;
  }

  button{
    margin-top: 20px;
    width: 100%;
    max-width: 300px;
    background-color: transparent;
    border: 1px solid ${(props) => props.theme.layoutBlue};
    color: ${(props) => props.theme.layoutBlue};
    font-size: 18px;
    font-weight: 700;
    padding: 9px;
    border-radius: 0.5rem;
    cursor: pointer;
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

export const ShopImg = styled.div`
  height: 100%;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
  .computer{
    position: absolute;
    /* background-color: red; */
    height: 80%;
    width: 90%;
    bottom: 10%;
    background-position: center;
    background-size: 140% 170%;
    background-repeat: no-repeat;
    background-image: url(${(props) => props.$isComputer});
  }

  .phone{
    position: absolute;
    right: 0;
    bottom: 10%;
    height: 70%;
    width: 100%;
    max-width: 200px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${(props) => props.$isPhone});
  }
`;
