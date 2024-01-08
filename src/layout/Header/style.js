import styled from 'styled-components';

export const HeaderSt = styled.header`
    width: 100%;
    height: 100px;
    z-index: 9;
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
`;

export const ButtonContact = styled.a`
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
`;
