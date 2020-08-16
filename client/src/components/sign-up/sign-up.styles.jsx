import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  @media screen and (max-width: 768px) {
    width: 60vw;
    display: grid;
  }
`;

export const SignUpTitle = styled.h2`
  margin: 10px 0;
`;
