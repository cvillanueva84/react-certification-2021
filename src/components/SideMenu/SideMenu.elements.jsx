import React from 'react';
import styled from 'styled-components';

export const SideMenuContainer = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  position: fixed;
  top: ${(props) => props.theme.navbar_height};
  left: 0;
  height: calc(100vh - ${(props) => props.theme.navbar_height});
  width: ${(props) => props.theme.sidemenu_width};
  background: ${(props) => props.theme.background_color};
`;

const SideMenuOption = styled.li`
  color: ${(props) => props.theme.icon_color};
  text-decoration: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  user-select: none;
  font-weight: bold;
  width: 100%;

  &:hover {
    background: ${({ theme }) => theme.scrollbar_thumb_hover_color};
  }
`;

export function SideMenuItem({ Icon, text }) {
  return (
    <SideMenuOption>
      <Icon size="2rem" />
      {text}
    </SideMenuOption>
  );
}
