import styled, { css } from 'styled-components';

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
`;

export const SModalWrapper = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border-radius: 8px;
  box-shadow: 0 0 32px rgba(0,0,0,0.5);
  padding: 10px 30px 30px 30px;
  max-width: 280px;
  width: 100%;
  font-size: 26px;

  @media (min-width: 560px) {
    max-width: 380px;
  }

  @media (min-width: 768px) {
    max-width: 500px;
    padding: 20px 40px 40px 40px;
  }

  @media (min-width: 1024px) {
  }

  @media (min-width: 1280px) {
    max-width: 600px;
  }
`;