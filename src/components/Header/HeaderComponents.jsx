import styled from 'styled-components';

export const HeaderContainer = styled.header`
  align-items: center;
  background-color: #1c5476;
  display: flex;
  justify-content: space-between;
  height: 64px;
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const HeaderColumn = styled.div`
  align-items: center;
  display: flex;
`;

export const MenuButton = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  font-size: 1.5rem;
  height: 48px;
  width: 48px;

  :hover {
    background-color: #ffffff17;
  }
`;

export const BtnOnMenu = styled.button`
  width: 40px;
  height: 40px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;
