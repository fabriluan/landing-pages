import styled from 'styled-components';

export const PreparationSt = styled.section`
  background-color: ${(props) => props.theme.content};
  padding: 30px 0;
`;

export const PreparatioGroup = styled.div`
  width: 100%;
  margin-top: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 770px){
    flex-direction: column;
  }
`;
