import styled from 'styled-components';

export const Container = styled.article`
  width: 100%;
  height: 522px;
  background-color: #1F1F1F; 
  background-image: url(images/bg-about.png);
  background-repeat: no-repeat;
  background-position: left top;
  background-size: 1080px 622px;

  padding: 2rem;
  margin-bottom: 4rem;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const Resume = styled.div`
  max-width: 671px;
  letter-spacing: 0.95px;
`;

export const TextH1 = styled.h1`
  font-size: 1.8rem;
  color: #63DC3E;
  margin-bottom: 0.85rem;
`;

export const TextP = styled.p``;
