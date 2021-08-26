import styled, { css } from 'styled-components';

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