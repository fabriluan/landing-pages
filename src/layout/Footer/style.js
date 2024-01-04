import styled from 'styled-components';

export const FooterSt = styled.footer`
  padding: 40px 0 20px 0;
  background-color: ${(props) => props.theme.dark};
`;

export const FooterGroup = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const FooterAbout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 350px;

  img{
    width: 100%;
    max-width: 150px;
  }

  p{
    margin-top: 10px;
  }
`;

export const FooterNav = styled.nav`
  width: 100%;
  max-width: 350px;

  h3{
    font-size: 21px;
    font-weight: 700;
  }

  ul{
    margin-top: 10px;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    li{
      margin: 3px 0;

      a{
        font-size: 17px;
        padding: 2px;
      }
    }
  }
`;

export const FooterCall = styled.div`
  display: flex;
  flex-direction: column;

  h3{
    font-size: 21px;
    font-weight: 700;
    margin-bottom: 15px;
  }

  p{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 7px 0;
    font-size: 17px;

    svg{
      margin-right: 10px;
    }
  }
`;

export const FooterCopy = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0 0 0;
`;
