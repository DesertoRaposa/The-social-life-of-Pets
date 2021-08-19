import styled, { css } from 'styled-components';

export const SHeaderWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction:column;
  justify-content: center;
  margin: 0 auto;
  max-width: 1440px;
  padding: 13px 20px;

  @media (min-width: 480px) {
    padding: 4px 20px;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 6px 60px;
  }

  @media (min-width: 1280px) {
    padding: 16px 60px;
  }
`;

export const SHeaderMenu = styled.div`
  display: flex;
  
  @media (min-width: 1024px) {
    max-width: 690px;
    width: 100%;
    justify-content: space-evenly;
  }
`;

export const SMenuItem = styled.a`
  display: flex;
  font-size: 18px;
  line-height: 30px;
  margin-right: 30px;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out;
  color: rgba(255,255,255,.55);
  text-decoration: none;
  position: relative;

  &:hover {
    color: rgba(255,255,255,.75);
  }

  &:hover:before {
    transform: scale(1);
  }

  &:before {
    content: "";
    width: 100%;
    position: absolute;
    bottom: -5px;
    left: 0;
    height: 1px;
    transition: .3s transform ease;
    background: #fff;
    transform: scale(0);
  }

  &:first-child {
    display: inline-block;
  }

  @media (min-width: 1024px) {
    display: inline-block;
    font-size: 18px;
    line-height: 30px;
  }

  &:last-child {
    margin-right: 0;
  }

`;

export const SHeaderLogo = styled.div`
  color:#212123;
  font-weight: 500;
`;


/* .nav-link:hover:before {
  transform: scale(1);
}

.nav-link::before {
  content: "";
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 1px;
  transition: .3s transform ease;
  background: #fff;
  transform: scale(0);
}

@media (min-width: 780px) {

}

@media (min-width:  1280px) {

} */