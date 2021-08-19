import { css } from '@emotion/react';
import { createGlobalStyle } from 'styled-components';

export const override = css`
  display: block;
  margin: 20rem auto;
  border-color: #060b26;
`;

export const GlobalStyles = createGlobalStyle`
  body, #root {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    list-style: none;
  }
  a {
    color: ${({ theme }) => theme.text}
  }

  span {
    color: ${({ theme }) => theme.text}
  }

`;