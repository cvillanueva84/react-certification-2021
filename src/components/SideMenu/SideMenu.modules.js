import styled from 'styled-components';

export const SideMenuContainer = styled.div`
  background-color: #c2c3ff;
  color: black;
  height: 100%;
  overflow: hidden;
`;

export const MenuItem = styled.div`
  margin: 20px;
`;

export const CloseIconContainer = styled.div`
  display: flex;
  height: 62px !important;
  justify-content: flex-end;
  margin-right: 10px;
  padding: 20px;
`;

export const CloseIconSpan = styled.span`
  cursor: pointer;
`;

export const MenuSeparator = styled.div`
  border: 1px solid #ffffff;
`;
