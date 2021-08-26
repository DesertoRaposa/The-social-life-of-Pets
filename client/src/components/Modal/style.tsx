import styled, { css } from 'styled-components';

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

export const SRegSubtitle = styled.div`
  font-size: 15px;
  font-weight: 500;
`;


export const SRegTitle = styled.div`
  font-weight: 500;
  text-align: center;
  margin-bottom: 15px;
  font-size: 16px;
  line-height: 22px;

  @media (min-width: 560px) {
    margin-bottom: 25px;
    max-width: 310px;
  }

  @media (min-width: 768px) {
    font-size: 18px;
  }

  @media (min-width: 1024px) {
    font-size: 20px;
  }
`;

export const SRegForm  = styled.form`
  width: 100%;
  max-width: 300px;
  margin-bottom: 50px;

  @media (min-width: 768px) {
    margin-bottom: 60px;
    max-width: 400px;
  }

  @media (min-width: 1024px) {
    margin-bottom: 70px;
    max-width: 450px;
  }
`;

export const SRegButton = styled.button`
  width: 100%;
  font-size: 16px;
  max-width: 180px;
  background: #000;
  color: #fff;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  margin-top: 10px;
  border: none;
  
  @media (min-width: 768px) {
    max-width: 220px;
    font-size: 18px;
  }

  @media (min-width: 1024px) {
    max-width: 260px;
  }

  @media (min-width: 1280px) {
    max-width: 330px;
    font-size: 20px;
  }
`;