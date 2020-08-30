import React from 'react';

import { 
  TopicsSection, 
  TopicsInfo, 
  TopicsList 
} from './style';

const Topics = () => {
  return (
    <TopicsSection>
      <img src='/images/avatars/squad-meeting.png' alt='Meeting Print' />
      <TopicsInfo>
        <TopicsList>
          <li>1. Vontade de <span>fazer acontecer</span> na VTEX;</li>
          <li>2. Sangue no olho para <span>entregar o melhor resultado</span>;</li>
          <li>3. <span>Trabalho em equipe</span> com empatia e colaboração.</li>
        </TopicsList>
        <p>Somos <span>Os Impossíveis!</span></p>
      </TopicsInfo>
    </TopicsSection>
  );
};

export default Topics;

