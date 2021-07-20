import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';
import { Container } from '../../Global.styles';

export const Nav = styled.nav`
  font-size: 18px;
  position: sticky;
  top: 0;
  z-index: 999;
  height: 80px;
  background-color: #1c5476;
  /* box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.5); */
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  ${Container};
`;

export const NavIcon = styled(BiSearch)`
  margin-right: 0.8rem;
  transition: all 0.5s ease;
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
  @media only screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? '0' : '-100%')};
    background-color: rgba(0, 0, 0, 0.9);
    transition: all 0.5s ease;
  }
`;

export const MenuItem = styled.li`
  list-style: none;
  height: 80px;
  @media only screen and (max-width: 1000px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`;

export const MenuItemRight = styled.li`
  list-style: none;
  margin-top: 10px;
  height: 80px;
  float: right;
`;

export const MenuLink = styled.div`
  text-decoration: none;
  font-weight: bold;
  font-size: 2rem;
  color: #fff;
  display: inline;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;
