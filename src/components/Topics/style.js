import styled from 'styled-components';

export const TopicsSection = styled.section`
  padding: 2rem; 
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  img {
    max-width: 50%;
  }

  p {
    font-size: 1.5rem;
    font-weight: 600;
    color: #c4c4c4;
    span {
      color: #63DC3E;
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
    img {
      max-width: 100%;
      margin-bottom: 2rem;
    }
  }
`;

export const TopicsInfo = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

// FIX:
// I wanted to include this style with an ol list
// but for some reason break it
export const TopicsList = styled.ul`
  list-style-position: inside;

  li {
    font-size: 1.2rem;
    font-weight: 600;
    color: #c4c4c4;
    margin: 0.65rem 0;
    
    span {
      color: #171717;
      background: #63DC3E;
      padding: 0.1rem 0.35rem;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    li {
      font-size: 1rem;
    }
  }
`;
