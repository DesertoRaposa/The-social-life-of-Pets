import React from 'react';
import { createPortal } from 'react-dom';
import './style.tsx';


interface RegisterProps {
  onCloseClick: () => void;
  children: React.ReactNode;
}

const Register = ({ onCloseClick, children }: RegisterProps): JSX.Element => {
  return createPortal(
    <div
      className="wrapper"
      onClick={onCloseClick}
    >
      {children}
      <span>Hello! I'm a modal</span>
    </div>, document.body
  );
}

export default Register;

// document.getElementById('modal-root')!);