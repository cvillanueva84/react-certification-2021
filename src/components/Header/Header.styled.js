import styled from 'styled-components';

const HeaderWrapper = styled.div`
  background-color: transparent;
  height: 60px;
  display: flex;
  width: 100%;
  align-items: center;
  padding: 10px 20px;
  justify-content: space-between;
  border-bottom: 1px solid #dcdcdc;
`;

const FlexCentered = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  padding: 10px;
  width: 400px;
  border: 1px solid #8e8e8e;
  height: 41px;
`;

const Button = styled.button`
  padding: 10px;
  background: none;
  border: 1px solid #8e8e8e;
  width: 70px;
  background-color: #8e8e8e;
  height: 41px;
`;

export { Button, Input, FlexCentered, HeaderWrapper };
