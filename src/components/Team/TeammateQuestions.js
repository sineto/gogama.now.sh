import React from 'react';

import {
  ModalInfo,
  CardInfo,
  TextQuestion,
  TextAnswer
} from './style';


const questions= [
  'Qual o seu maior medo?',
  'O que quero aprender?',
  'O que posso ensinar?',
  'Suas expectativas para o VTEX Trainning Week:'
]

const TeammateQuestions = ({ answers }) => {
  return (
    <ModalInfo>
      {questions.map((quest, idx) => {
        return (
          <CardInfo>
            <TextQuestion>
              {quest}
            </TextQuestion>
            <TextAnswer>
              {answers ? answers[idx] : ''}
            </TextAnswer>
          </CardInfo>
        )
      })}
    </ModalInfo>
  );
};

export default TeammateQuestions;
