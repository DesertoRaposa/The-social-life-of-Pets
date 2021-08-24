import React from 'react';
import { createPortal } from 'react-dom';
import { Overlay } from './style';


export interface ModalProps {
  onCloseClick: () => void;
  children: React.ReactNode;
}

const Modal = ({ onCloseClick, children }: ModalProps): JSX.Element => {
  return createPortal(
    <Overlay
      className="wrapper"
      onClick={onCloseClick}
    >
      {children}
    </Overlay>, document.body);
}

export default Modal;

