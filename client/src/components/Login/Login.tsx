import React from 'react';
import './style.tsx';
import {
  SLoginButton,
  SLoginSubtitle,
  SLoginTitle,
  SLoginWrapper,
  SLoginForm,
  SInputWrapper,
  SLoginInput
} from './style';

const Login = (): JSX.Element => {
  return (
    <SLoginWrapper>
      <SLoginTitle>
        Уже есть аккаунт?
      </SLoginTitle>
      <SLoginSubtitle>
        Найдите друзей и гуляйте вместе
      </SLoginSubtitle>

      <SLoginForm>
        <SInputWrapper>
          <SLoginInput
            placeholder="E-mail"
          />
          <SLoginInput
            placeholder="Password"
          />
        </SInputWrapper>
        <SLoginButton
        // type="submit"
        >
          Войти
        </SLoginButton>
      </SLoginForm>
    </SLoginWrapper>
  );
}

export default Login;