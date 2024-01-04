import styled from 'styled-components';

export const PlansSt = styled.section`
  background-color: ${(props) => props.theme.content};
  padding: 30px 0 50px 0;
`;

export const PlanGroup = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
