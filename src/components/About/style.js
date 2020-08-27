import styled from 'styled-components';

export const Container = styled.article`
  max-width: 100%;
  height: auto;
  background-color: #1F1F1F; 
  background-image: url(images/bg-about.png);
  background-repeat: no-repeat;
  background-position: left top;
  background-size: cover;

  padding: 1rem;
  margin-bottom: 3rem;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  img {
    max-width: 100%;
    padding: 1rem;
  }

  @media (min-width: 400px) {
    justify-content: center;
  }
`;

export const Resume = styled.div`
  max-width: 671px;
  letter-spacing: 0.95px;
  margin: 1rem;
`;

export const TextH1 = styled.h1`
  font-size: 1.8rem;
  color: #63DC3E;
  margin: 1.2rem 0 0.85rem 0;
`;

export const TextP = styled.p`
  font-size: 0.95rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;
