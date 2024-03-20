import styled from 'styled-components';

export const AboutSt = styled.section`
  padding: 40px 20px;
  background-color: ${(props) => props.theme.layout};

  > .center{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img{
    width: 30%;
    max-width: 300px;
  }

  @media screen and (max-width: 770px){
    > .center{
      flex-direction: column-reverse;
    }

    img{
      width: 100%;
    }
  }
`;

export const AboutGroupText = styled.div`
  width: 60%;
  margin-right: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2{
    text-align: left;
  }

  p{
    font-size: 23px;
    font-weight: 300;
  }

  @media screen and (max-width: 770px){
    width: 100%;
    margin-right: 0;
    margin-top: 15px;
  
    p{
      font-size: 20px;
    }
  }
`;
