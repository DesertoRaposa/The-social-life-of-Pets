import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import pet from '../../img/pet.svg';
import './style.tsx';
import {
  SHeaderWrapper,
  SHeaderMenu,
  SMenuItem,
  SHeaderLogo
} from './style';

const Header = (): JSX.Element => {
  return (
    <SHeaderWrapper>
      <SHeaderLogo>
        <img src={pet} alt="logo" width="45" height="45" className="me-2"/>
        PetsLife
      </SHeaderLogo>
      <SHeaderMenu>
        <SMenuItem href="#">Home</SMenuItem>
        <SMenuItem href="#">Log in</SMenuItem>
        <SMenuItem href="#">All Posts</SMenuItem>
        <SMenuItem href="#">Feed</SMenuItem>
      </SHeaderMenu>
    </SHeaderWrapper>
  );
}

// const mapStateToProps = (state) => ({})

// export default connect(mapStateToProps)(Header);

export default Header;
