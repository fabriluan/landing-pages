import styled from 'styled-components';

export const HeaderSt = styled.header`
    width: 100%;
    height: 100px;
    z-index: 9;
    top: 0;
    background-color: ${(props) => props.theme.background};
    position: fixed;

    .center{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    img{
        width: 100%;
        max-width: 110px;
    }

    @media screen and (max-width: 770px){
      height: 80px;

      img{
        max-width: 80px;
      }
    }
`;

export const HeaderNavDesktop = styled.nav`
    /* width: 100%; */
    font-size: 18px;

    ul{
        display: flex;
        align-items: center;
        list-style-type: none;

        a{
          padding: 0 5px;
          margin: 0 5px;
        }
    }

    @media screen and (max-width: 770px){
      display: none;
    }
`;

export const HeaderNavApp = styled.nav`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  bottom: 0;
  background-color: ${(props) => props.theme.content};
  font-size: 16px;

  button{
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    background-color: transparent;
    color: ${(props) => props.theme.white};
    position: absolute;
    right: 0;
    padding: 5px 0;
    font-size: 40px;
  }

  ul{
    width: 100%;
    height: 100%;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    /* justify-content: center; */
    list-style-type: none;

    :nth-of-type(1) a{
      border-top: 1px solid ${(props) => props.theme.background};
    }

    a{
      display: flex;
      width: 100vw;
      align-items: center;
      justify-content: center;
      border-bottom: 1px solid ${(props) => props.theme.background};
      font-size: 20px;
      padding: 30px 0;

      
    }
  }
`;

export const ButtonContact = styled.a`
  color: inherit;
  display: flex;
  justify-content: center;
  font-weight: 700;
  align-items: center;
  width: 100%;
  max-width: 220px;
  padding: 8px !important;
  border-radius: 0.5rem;
  margin-left: 15px !important;
  background-color: ${(props) => props.theme.layoutBlue};

  @media screen and (max-width: 770px){
    position: fixed;
    left: 0;
    bottom: 0;
    max-width: 100%;
    margin-left: 0 !important;
    padding: 20px 0 !important;
    border-radius: 0.5rem  0.5rem 0 0;
  }
`;

export const ButtonMenu = styled.button`
  display: none;
  color: ${(props) => props.theme.white};
  background-color: transparent;
  font-size: 30px;
  border: 0;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 770px){
    display: flex;
  }
`;
