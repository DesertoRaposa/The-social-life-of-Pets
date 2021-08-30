import React from 'react';
import Register from '../Register/Register';
import Modal from './Modal';

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
      <Register />
    </Modal>
  );
}

export default BaseModalWrapper;