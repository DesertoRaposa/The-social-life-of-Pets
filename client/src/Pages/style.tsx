import styled, { css } from 'styled-components';
import wave from '../img/wave.png';

export const SWrapper = styled.div`
  max-width: 100%;
  height: 2000px;
  background: url(${wave}) no-repeat;
  background-size: 1000px 640px;
  background-position: right top;

  @media (min-width: 560px) {
    background-size: 1000px 772px;
  }
`;

export const STitle = styled.h1`
  font-weight: 700;
  font-size: 32px;

  @media (min-width: 560px) {
    font-size: 48px;
    line-height: 50px;
  }

  @media (min-width: 1024px) {
    font-size: 85px;
    line-height: 100px;
  }

  span {
    color: rgb(33, 37, 41);

    @media (min-width: 1144px) {
      color: #7A46CE;
    }
  }
`;

export const SSubTitle = styled.h2`
  margin: 10px 0 20px 0;
  color: rgba(0, 0, 0, 0.46);
  max-width: 430px;
  font-size: 20px;
  font-weight: 700;
  max-width: 278px;

  @media (min-width: 560px) {
    margin: 20px 0 30px 0;

  }

  @media (min-width: 768px) {
    font-size: 22px;
    max-width: 320px;
  }
`;

export const SJoinWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 50px 0 50px;
  align-items: center;

  @media (min-width: 560px) { 
    max-width: 490px; 
    margin: auto;
  }

  @media (min-width: 1024px) {
    max-width: 100%;
    padding-left: 240px;
    margin: 135px 0 0 0;
    display: block;
  }
`;

export const SJoinButton = styled.button`
  font-size: 16px;
  max-width: 220px;
  width: 100%;
  height: 51px;
  background: #000;
  border-radius: 47px;
  color: #fff;
  outline: none;
  border: none;

  @media (min-width: 560px) {
    font-size: 18px;
    max-width: 244px;
    height: 51px;
  }

  @media (min-width: 1024px) {
    max-width: 284px;
    height: 71px;
    font-size: 18px;
  }
`;