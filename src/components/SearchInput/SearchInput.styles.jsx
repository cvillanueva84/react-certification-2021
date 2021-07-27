import styled from 'styled-components';

export const Wrapper = styled.div`
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.15);
  height: 35px;
  width: 100%;
  display: flex;
  padding-right: 8px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.25);
  }
  @media (min-width: 770px) {
    width: 240px;
  }
`;

export const Icon = styled.div`
  color: white;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
`;

export const Input = styled.input`
  background: transparent;
  border: none;
  outline: none;
  color: white;
  font-size: 18px;
  width: 100%;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #8faabb;
  }
`;
