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
  margin: 1.4rem;

  img {
    margin-bottom: 1rem;
  }
`;

export const TextP = styled.p`
  font-weight: bold;
  font-size: 2.2rem;
  color: #63DC3E;

  position: relative;
  span {
    font-weight: 300;
    margin-left: 2px;
  }

  &:after {
    content: "";
    width: 15%;
    height: 5px;
    left: 0;
    bottom: -4px;
    position: absolute;
    margin-left: 3px;
    z-index: 9;
    background: #5d5d5d;
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
