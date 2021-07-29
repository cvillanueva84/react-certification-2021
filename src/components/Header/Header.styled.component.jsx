/* eslint-disable import/no-extraneous-dependencies */
import styled from 'styled-components';
import { Menu } from '@styled-icons/boxicons-regular/Menu';

export const HeaderContainer = styled.header`
  background-color: #1c5476;
  color: white;
  min-height: 64px;
  width: 100%;
  display: flex;
  align-self: flex-between;
  padding: 0 24px;
`;

export const LeftHeaderContainer = styled.div`
  display: flex;
  justify-content: start;
  width: 100%;
`;

export const BurgerMenuContainer = styled.div`
  /* padding: 12px 20px; */
  display: flex;
  justify-content: center;
  min-width: 48px;
`;

export const BurgerMenu = styled(Menu)`
  color: ${(props) => props.color};
  margin-right: 16px;
  padding: 12px 0;
`;
