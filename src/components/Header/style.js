import styled from 'styled-components';

export const MainHeader = styled.header`
  width: 100%;
`;

export const Hero = styled.div`
  max-width: 100%;
  padding: 10rem 0;
  display: flex;
  justify-content: center;

  img { 
    max-width: 100%;
    padding: 2rem;
    margin: 0 auto;
  }

  @media (max-width: 890px) {
    padding: 5rem 0;
  }

  @media (max-width: 665px) {
    padding: 2rem 0;
  }
`;
