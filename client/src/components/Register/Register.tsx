import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../actions/auth';
import './style.tsx';

import {
  SRegSubtitle,
  SRegForm,
  SRegTitle,
  SRegButton
}
  from './style';
import {
  SFormInput,
} from '../Login/style';

const Register = (): JSX.Element => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(register({ name, email, password }))
  }

  return (
    <Fragment>
      <SRegTitle>
        Расскажите немного о вашем домашнем питомце
      </SRegTitle>
      <SRegForm onSubmit={onSubmit}>
        <SRegSubtitle>
          Имя
        </SRegSubtitle>
        <SFormInput
          placeholder="Введите имя"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
          required
        />
        <SRegSubtitle>
          Почта
        </SRegSubtitle>
        <SFormInput
          placeholder="E-mail"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
          required
        />
        <SRegSubtitle>
          Пароль
        </SRegSubtitle>
        <SFormInput
          placeholder="Придумайте пароль"
          type="password"
          name="password"
          value={password}
          onChange={e => setPassword(e.currentTarget.value)}
          required
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
        <SRegButton
          type="submit"
        >
          test Войти
        </SRegButton>
      </SRegForm>
    </Fragment>
  );
}

export default Register;
