import styled, { css } from 'styled-components';
import wave from '../img/wave.png';

export const SWrapper = styled.div`
  max-width: 100%;
  height: 2000px;
  background: url(${wave}) no-repeat;
  background-size: 1000px 772px;
  background-position: right top;
`;

export const STitle = styled.h1`
  font-weight: 700;
  font-size: 62px;

  @media (min-width: 1024px) {
    font-size: 85px;
  }
`;

export const SSubTitle = styled.h2`
  font-size: 20px;
  color: rgba(0, 0, 0, 0.46);
  max-width: 430px;
  font-size: 25px;
  margin-bottom: 30px;
`;

export const SJoinWrapper = styled.div`
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 70px;

  @media (min-width: 1024px) {
    max-width: 630px;
    padding-left: 70px;
    margin: 135px 0 0 0;
    display: block;
  }
`;

export const SJoinButton = styled.button`
  max-width: 284px;
  width: 100%;
  height: 71px;
  background: #000;
  border-radius: 47px;
  font-size: 22px;
  color: #fff;
  outline: none;
  border: none;
`;