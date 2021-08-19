import styled from 'styled-components';

export const Form = styled.form`
  width: fit-content;
  height: 32px;
  display: flex;
  margin-top: 10px;
  margin-left: 16px;

  div {
    width: 32px;
    height: 100%;
    background: black;
    cursor: pointer;
  }

  input {
    width: 205px;
    outline: none;
    border-radius: 50px;
    padding-left: 35px;
    background: white;
  }

  @media (min-width: 600px) {
    width: fit-content;
    height: 37px;
    display: flex;
    margin-top: 14px;
    margin-left: 50px;
  }
`;
