import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../components/Header/Header';
import { BrowserRouter, Route } from 'react-router-dom';
import { SWrapper } from './style';

const Home = (): JSX.Element => {
  return (
    <SWrapper>
      <Header />
    </SWrapper>
  );
}


export default Home;