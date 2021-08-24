import styled, { css } from 'styled-components';

export const SModalWrapper = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border-radius: 8px;
  box-shadow: 0 0 32px rgba(0,0,0,0.5);
  padding: 40px;
  width: 500px;
  height: 600px;
  font-size: 26px;

  @media (min-width: 560px) {

  }

  @media (min-width: 768px) {

  }

  @media (min-width: 1024px) {
  }

  @media (min-width: 1280px) {
  }
`;

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.82);
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 560px) {

  }

  @media (min-width: 768px) {

  }

  @media (min-width: 1024px) {
  }

  @media (min-width: 1280px) {
  }
`;