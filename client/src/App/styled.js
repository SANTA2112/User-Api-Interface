import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 20px;
`;

export const Card = styled.div`
  display: grid;
  grid-row-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-top: 20px;
  @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;
