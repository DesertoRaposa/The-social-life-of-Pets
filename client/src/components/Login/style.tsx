import styled, { css } from 'styled-components';

export const SFormWrapper = styled.div`
  max-width: 269px;
  background: #fff;
  border-radius: 28px;
  margin: auto;
  margin-top: 58px;
  display: flex;
  flex-direction: column;
  padding: 20px 25px 25px 25px;
  border: 1px solid #DFDFE1;
  @media (min-width: 450px) {
    margin-top: 30px;
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

export const SFormTitle = styled.div`
  font-weight: 500;
  @media (min-width: 1024px) {
    font-size: 20px;
  }
`;

export const SFormSubtitle = styled.div`
  font-size: 15px;
  margin-top: 5px;
`;

export const SForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export const SFormInput = styled.input`
  width: 100%;
  padding: 5px 10px;
  border: 1px solid #DFDFE1;
  border-radius: 8px;
  margin: 10px 0 10px 0;
  outline: none;
  font-size: 16px;
  &:hover:enabled,
  &:focus {
    border: 1px solid #834AD5;
  }
  &:active {
    border: 1px solid red;
  }
  @media (min-width: 1024px) {
    padding: 10px 10px;
  }
`;

export const SFormButton = styled.button`
  width: 80%;
  background: #000;
  color: #fff;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  margin-top: 10px;
  border: none;
`;