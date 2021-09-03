import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../components/Header/Header';
import { BrowserRouter, Route } from 'react-router-dom';
import {
  SWrapper,
  SJoinWrapper,
  STitle,
  SSubTitle,
  SJoinButton,
  SContainer
} from './style';


import Modal from '../components/Modal/Modal';
import Register from '../components/Register/Register';

import Login from '../components/Login/Login';


const Home = (): JSX.Element => {
  const [regVisible, setRegVisible] = useState<boolean>(false);
  const [infoVisible, setInfoVisible] = useState<boolean>(false);
  
  const regClosed = (status: boolean) => {
    if (status) {
      setRegVisible(false)
      setInfoVisible(true)
    }
  }

  return (
    <SWrapper>
      <Header />
      <SContainer>
        <SJoinWrapper>
          <STitle>
            The social life <span><br />of Pets</span>
          </STitle>
          <SSubTitle>
            Hello! Here  you can create an account for your lovely pet
          </SSubTitle>
          <SJoinButton onClick={() => setRegVisible(true)}>
            Присоединиться к нам
          </SJoinButton>

          {regVisible && (
            <Modal onBackdropClick={() => setRegVisible(false)}>
              <Register onClose={(status) => regClosed(status)} />
            </Modal>
          )}
          {infoVisible && (
            <Modal onBackdropClick={() => setInfoVisible(false)}>
              All done
            </Modal>
          )}
        </SJoinWrapper>
        <Login />
      </SContainer>
      <SContainer>
        <SJoinWrapper>
          <STitle>
            Кого ты можешь<br />встретить <span>у нас</span>
          </STitle>
        </SJoinWrapper>
      </SContainer>
    </SWrapper>
  );
}


export default Home;