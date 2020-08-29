import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 500px;
  color: #5d5d5d;
`;

export const TextH1 = styled.h1`
  font-size: 2.2rem;
  font-weight: 700;
  color: #5d5d5d;
  padding: 1.5rem;
`;

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  width: 398px; 
  background-color: #1F1F1F;
  border-radius: 0.35rem;
  padding: 2rem;
  margin: 1rem;

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
  font-weight: 500;
  text-transform: uppercase;
  color: #63DC3E;
  border: 2px solid #63DC3E;
  padding: 0.45rem 0.85rem;
  cursor: pointer;

  &:hover {
    color: #1f1f1f;
    background: #63DC3E;
  }
`;

export const ModalCard = styled.div`
  font-size: 0.85rem;
  color: #c4c4c4;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ModalInfo = styled.div`
  max-width: 556px;
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

export const CardInfo = styled.div`
  padding: 0.5rem;
`;

export const ModalImg = styled.div`
  width: 380px;
  height: 480px;
  background-image: url(${props => props.avatarWithBg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  // float: right;
`;

export const TextQuestion = styled.p`
  font-weight: bold;
  color: #63DC3E;
`;

export const TextAnswer = styled.p`
  // margin-bottom: 1rem;
`;
