import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 500px;
  color: #5d5d5d;  
`;

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  background-color: #1F1F1F;
  border-radius: 0.35rem;
  padding: 2rem;
  margin: 2rem;

  img {
    margin-bottom: 1rem;
  }
`;

export const TextP = styled.p`
  font-weight: bold;
  font-size: 1.8rem;
  color: #63DC3E;
  span {
    font-weight: normal;
    margin-left: 2px;
  }
`;

export const Infos = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a:not(:first-child) {
    color: #5D5D5D;
  }
  margin-top: 2rem;
`;

export const BtnVerMais = styled.a`
  font-size: 0.85rem;
  text-transform: uppercase;
  color: #63DC3E;
  border: 2px solid #63DC3E;
  padding: 0.45rem 0.85rem;
`;
