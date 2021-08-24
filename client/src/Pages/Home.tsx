import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../components/Header/Header';
import Login from '../components/Login/Login';
import Register from '../components/Login/Login';
import { BrowserRouter, Route } from 'react-router-dom';
import {
  SWrapper,
  SJoinWrapper,
  STitle,
  SSubTitle,
  SJoinButton,
  SContainer
} from './style';
import BaseModalWrapper from '../components/Modal/BaseModalWrapper';

const Home = (): JSX.Element => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const toggleModal = () => {
    setIsModalVisible(wasModalVisible => !wasModalVisible)
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
          <SJoinButton onClick={toggleModal}>
            Присоединиться к нам
          </SJoinButton>
          <BaseModalWrapper
            isModalVisible={isModalVisible}
            onCloseClick={toggleModal} />
        </SJoinWrapper>
        <Login />
        {/* <Register /> */}
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