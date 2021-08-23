import React from 'react';
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

const Home = (): JSX.Element => {
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
          <SJoinButton>
            Присоединиться к нам
          </SJoinButton>
        </SJoinWrapper>
        <Login />
        {/* <Register /> */}
      </SContainer>
      <SContainer>
        <SJoinWrapper>
          <STitle>
            Кого ты можешь<br />встретить у нас
          </STitle>
        </SJoinWrapper>
      </SContainer>
    </SWrapper>
  );
}


export default Home;