import styled, { css } from 'styled-components';

export const SLoginWrapper = styled.div`
  max-width: 269px;
  background: #fff;
  border-radius: 28px;
  margin: auto;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  padding: 20px 25px 25px 25px;
  border: 1px solid #DFDFE1;

  @media (min-width: 450px) {
    margin-top: 30px;
  }

  @media (min-width: 768px) {

  }

  @media (min-width: 1024px) {
    max-width: 369px;
    padding: 25px 35px 35px 35px;
    margin-top: 160px;
    margin-right: 30px;
    
  }

  @media (min-width: 1920px) {
    margin-right: 100px;
  }
`;

export const SLoginTitle = styled.div`
  font-weight: 500;

  @media (min-width: 560px) {

  }

  @media (min-width: 768px) {

  }

  @media (min-width: 1024px) {
    font-size: 20px;
  }

  @media (min-width: 1280px) {
  }
`;

export const SLoginSubtitle = styled.div`
  font-size: 15px;
  margin-top: 5px;

  @media (min-width: 560px) {

  }

  @media (min-width: 768px) {

  }

  @media (min-width: 1024px) {
  }

  @media (min-width: 1280px) {
  }
`;

export const SLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 560px) {

  }

  @media (min-width: 768px) {

  }

  @media (min-width: 1024px) {
  }

  @media (min-width: 1280px) {
  }
`;

export const SInputWrapper = styled.div`

  @media (min-width: 560px) {
  
  }

  @media (min-width: 768px) {

  }

  @media (min-width: 1024px) {
  }

  @media (min-width: 1280px) {
  }
`;

export const SLoginInput = styled.input`
  width: 100%;
  padding: 5px 10px;
  border: 1px solid #DFDFE1;
  border-radius: 8px;
  margin: 10px 0 10px 0;
  outline: none;

  &:hover:enabled,
  &:focus {
    border: 1px solid #834AD5;
  }

  &:active {
    border: 1px solid red;
  }

  @media (min-width: 560px) {

  }

  @media (min-width: 768px) {

  }

  @media (min-width: 1024px) {
    padding: 10px 10px;
  }

  @media (min-width: 1280px) {
  }
`;

export const SLoginButton = styled.button`
  width: 80%;
  background: #000;
  color: #fff;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  margin-top: 10px;
  border: none;
  
  @media (min-width: 560px) {

  }

  @media (min-width: 768px) {

  }

  @media (min-width: 1024px) {
  }

  @media (min-width: 1280px) {
  }
`;