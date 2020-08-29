import React from 'react';
import { Modal } from 'antd';

import {
  ModalCard,
  ModalInfo,
  CardInfo,
  ModalImg,
  TextQuestion,
  TextAnswer
} from './style';

const questions= [
  'Qual o seu maior medo?',
  'O que quero aprender?',
  'O que posso ensinar?',
  'Suas expectativas para o VTEX Trainning Week:'
]

const TeammateModal = ({ handleClose, visible, person }) => {
  return (
    <Modal
      width='80%'
      footer={null}
      title={`${person.firstname} ${person.lastname}`}
      centered
      visible={visible}
      onCancel={handleClose}
      bodyStyle={{
        background: '#1f1f1f',
      }}
    >
      <ModalCard>
        <ModalInfo>
          {questions.map((quest, idx) => {
            console.log('question:', quest, idx);
              return (
                <CardInfo>
                  <TextQuestion>
                    {quest}
                  </TextQuestion>
                  <TextAnswer>
                    {person.answers ? person.answers[idx] : 'teste'}
                  </TextAnswer>
                </CardInfo>
              )
          })}
        </ModalInfo>
        <ModalImg avatarWithBg={person.avatarWithBg}>
        </ModalImg>
      </ModalCard>
    </Modal>
  );
};

export default TeammateModal;

