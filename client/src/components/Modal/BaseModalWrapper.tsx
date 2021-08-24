import React from 'react';
import Register from '../Register/Register';
import Modal from './Modal';
import { SModalWrapper } from './style';

interface BaseModalWrapperProps {
  isModalVisible: boolean;
  onCloseClick: () => void;
}

const BaseModalWrapper = ({ onCloseClick, isModalVisible }: BaseModalWrapperProps): JSX.Element => {
  if (!isModalVisible) {
    return null!;
  }

  return (
    <Modal onCloseClick={onCloseClick}>
      <SModalWrapper>
        hi hi hi!!
      </SModalWrapper>
    </Modal>
  );
}

export default BaseModalWrapper;