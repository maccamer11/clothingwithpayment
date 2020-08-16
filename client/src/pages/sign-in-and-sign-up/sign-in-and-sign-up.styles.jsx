import styled from 'styled-components';

export const SignInAndSignUpContainer = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;

  @media screen and (max-width: 768px) {
    width: 65vw; 
    display: grid;
    grid-gap: 30px;
    align-content: center;
  }
`;
