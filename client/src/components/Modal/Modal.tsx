import React from 'react';
import { createPortal } from 'react-dom';
import {
  Overlay,
  SModalWrapper
} from './style';

export interface ModalProps {
  onBackdropClick: () => void;
  children: React.ReactNode;
}

const Modal = ({ onBackdropClick, children }: ModalProps): JSX.Element => {
  return createPortal(
    <Overlay
      className="wrapper"
      onClick={onBackdropClick}
    >
      <SModalWrapper onClick={e => e.stopPropagation()}>
        {children}
      </SModalWrapper>
    </Overlay>, document.body);
}

export default Modal;

