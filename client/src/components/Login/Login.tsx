import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import './style.tsx';
import {
  SFormButton,
  SFormSubtitle,
  SFormTitle,
  SFormWrapper,
  SForm,
  SFormInput
} from './style';


export interface ILogin {
  history: any;
  auth: any;
  login: any; //поменять
}

const Login = ({ history, auth, login }: ILogin): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (auth.isAuthenticated) {
      history.push('/')
    }
  }, [auth]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login({ email, password })
  }

  return (
    <SFormWrapper>
      <SFormTitle>
        Уже есть аккаунт?
      </SFormTitle>
      <SFormSubtitle>
        Найдите друзей и гуляйте вместе
      </SFormSubtitle>

      <SForm onSubmit={onSubmit}>
        <SFormInput
          placeholder="E-mail"
          type="e-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <SFormInput
          placeholder="Password"
          type="password"
          name="password"
          value={email}
          onChange={e => setPassword(e.target.value)}
          required
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