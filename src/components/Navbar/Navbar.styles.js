import styled from 'styled-components';
import { MdAccountCircle } from 'react-icons/md';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 5%;
  background: #7289da;
  font-size: 10px;
  opacity: 0.95;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const NavLeft = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  order: 1;
  margin-right: auto;

  img {
    width: 100%;
    height: 65px;
    flex-shrink: 0;
    padding: 0px 50px;
  }
`;

const NavIcon = styled.div`
  cursor: pointer;
`;

const NavCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  order: 2;
`;

const SearchForm = styled.form`
  display: flex;
  padding: 0px 20px;
  width: 500px;

  button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }
`;

const SearchButton = styled.button`
  width: 65px;
  cursor: pointer;
  border-radius: 0 2px 2px 0;
  background: #323232;
  border: 0;
  line-height: 1.2;
`;

const StyledInput = styled.input`
  width: 80%;
  height: 33px;
  border: none;
  padding: 0.2em 0.5em;
  font-size: 16px;
  border-radius: 2px 0 0 2px;
`;

const NavRight = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  order: 3;
  margin-left: auto;
`;

const Avatar = styled.div`
  svg {
    width: 100%;
    height: 65px;
    flex-shrink: 0;
    padding: 0px 20px;
  }
`;

const AvatarButton = styled(MdAccountCircle)`
  cursor: pointer;
  font-size: 60px;
`;

export {
  Nav,
  NavIcon,
  NavLeft,
  NavCenter,
  SearchForm,
  SearchButton,
  StyledInput,
  NavRight,
  Avatar,
  AvatarButton,
};
