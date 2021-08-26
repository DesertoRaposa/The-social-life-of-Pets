import React from 'react';
import './style.tsx';
import {
  SFormButton,
  SFormSubtitle,
  SFormTitle,
  SFormWrapper,
  SForm,
  SFormInput
} from './style';

const Login = (): JSX.Element => {
  return (
    <SFormWrapper>
      <SFormTitle>
        Уже есть аккаунт?
      </SFormTitle>
      <SFormSubtitle>
        Найдите друзей и гуляйте вместе
      </SFormSubtitle>

      <SForm>
        <SFormInput
          placeholder="E-mail"
        />
        <SFormInput
          placeholder="Password"
        />
        <SFormButton
        // type="submit"
        >
          Войти
        </SFormButton>
      </SForm>
    </SFormWrapper>
  );
}

export default Login;