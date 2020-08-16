import styled from 'styled-components';

export const SignInContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    width: 60vw;
  }
`;

export const SignInTitle = styled.h2`
  margin: 10px 0;

  @media screen and (max-width: 768px) {
    margin: 0;
  }
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }

`;
