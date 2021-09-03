import React, { useState } from 'react';
import {
  SInfoModalWrapper
} from './style';

import {
SRegTitle
} from '../Register/style';

const InfoModal = (): JSX.Element => {

  return (
    <SInfoModalWrapper>
      <SRegTitle>
        Ура! Вы зарегистрировались. Скорее заходите в профиль и заполняйте аккаунт вашего питомца
      </SRegTitle>
    </SInfoModalWrapper>
  );
}

export default InfoModal;