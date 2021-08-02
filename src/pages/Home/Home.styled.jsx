import styled from 'styled-components';

export const Homepage = styled.section`
  width: 100%;
  text-align: center;
  justify-content: center;
  &:h2 {
    font-size: 3.75rem;
    font-weight: 300px;
    line-height: 1.2;
    font-family: 'Roboto', 'Helvetica';
  }
`;

export const InputSearch = styled.input`
  color: white;
  border-radius: 4px;
  border: 0;
  height: 1.1876em;
  margin: 0;
  display: block;
  padding: 10px 7px 8px 48px;
  min-width: 0;
  background: none;
  box-sizing: content-box;
  &:focus {
    border: 0;
    outline: none;
  }
`;
