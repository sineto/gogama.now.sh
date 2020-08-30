import React from 'react';
import { Modal } from 'antd';

import TeammateQuestions from './TeammateQuestions';

import {
  ModalCard,
  ModalImg,
} from './style';

const TeammateModal = ({ handleCloseModal, isOpenModal, person }) => {
  return (
    <Modal
      width='80%'
      title={`${person.firstname} ${person.lastname}`}
      footer={null}
      centered
      visible={isOpenModal}
      onCancel={() => handleCloseModal()}
      bodyStyle={{
        background: '#1f1f1f',
      }}
    >
      <ModalCard>
        <TeammateQuestions answers={person.answers} />
        <ModalImg avatarWithBg={person.avatarWithBg}>
        </ModalImg>
      </ModalCard>
    </Modal>
  );
};

export default TeammateModal;

