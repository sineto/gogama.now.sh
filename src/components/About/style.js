import styled from 'styled-components';

export const Container = styled.article`
  max-width: 100%;
  height: auto;
  background-color: #1F1F1F; 
  background-image: url(images/bg-about.png);
  background-repeat: no-repeat;
  background-position: left top;
  background-size: cover;

  padding: 2rem;
  margin-bottom: 4rem;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  img {
    max-width: 100%;
    padding: 1rem;
  }

  @media (min-width: 680px) {
    justify-content: center;
  }
`;

export const Resume = styled.div`
  max-width: 671px;
  letter-spacing: 0.95px;
  padding: 2rem;
`;

export const TextH1 = styled.h1`
  font-size: 1.8rem;
  color: #63DC3E;
  margin-bottom: 0.85rem;
`;

export const TextP = styled.p`
`;
