import React from 'react';
import Register from '../Register/Register';
import Modal from './Modal';
import {
  SModalWrapper,
  SRegSubtitle,
  SRegForm,
  SRegTitle,
  SRegButton
}
  from './style';
import {
  SFormInput,
} from '../Login/style';

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
        <SRegTitle>
          Расскажите немного о вашем домашнем питомце
        </SRegTitle>
        <SRegForm>
          <SRegSubtitle>
            Имя
          </SRegSubtitle>
          <SFormInput
            placeholder="Введите имя"
          />
          <SRegSubtitle>
          Почта
          </SRegSubtitle>
          <SFormInput
            placeholder="E-mail"
          />
          <SRegSubtitle>
          Пароль
          </SRegSubtitle>
          <SFormInput
            placeholder="Придумайте пароль"
          />
          <SRegSubtitle>
          Порода/Пока неактивно
          </SRegSubtitle>
          <SFormInput
            placeholder="Какая порода"
          />
          <SRegSubtitle>
          О питомце/Пока неактивно
          </SRegSubtitle>
          <SFormInput
            placeholder="Барни любит..."
          />
        </SRegForm>
        <SRegButton
        // type="submit"
        >
          Войти
        </SRegButton>
      </SModalWrapper>
    </Modal>
  );
}

export default BaseModalWrapper;