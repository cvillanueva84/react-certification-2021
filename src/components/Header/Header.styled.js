import styled from 'styled-components';

export const NavBar = styled.nav`
  background: #ff5050;
  padding: 0.5rem 0.5rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  height: auto;
  padding: 1 1rem;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  align-items: center;
  align-content: center;
`;

export const HeaderTitle = styled.h1`
  font-size: 16px;
  font-weight: 700;
  color: white;
  margin: 0px;
  padding-left: 10px;
`;

export const BarsIcon = styled.i`
  font-size: 20px;
  padding-left: 0.7rem;
  color: white;
  cursor: pointer;
`;
export const SearchContainer = styled.div`
  padding-left: 1.5rem;
`;

export const Icon = styled.i`
  position: absolute;
  margin-top: 8px;
  padding-left: 5px;
  color: #cccccc;
  font-size: 0.8rem;
`;

export const SearchField = styled.input`
  background: rgba(255, 255, 255, 0.2);
  padding: 1px;
  padding-left: 1.5rem;
  font-size: 0.9rem;
  border: none;
  border-radius: 5px;
  color: white;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

export const SwitchWrapper = styled.div`
  position: absolute;
  right: 9rem;
  top: 0.6rem;
`;

export const CheckLabel = styled.label`
  position: absolute;
  width: 45px;
  height: 24px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;

  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;

export const Check = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckLabel} {
    background: #222;
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;

export const Container = styled.div`
  position: absolute;
  right: 10rem;
`;

export const Span = styled.span`
  color: white;
  font-weight: 500;
  font-size: 0.9rem;
`;

export const ImgContainer = styled.div`
  width: 35px;
  height: 35px;
  padding: 0px;
  margin: 0px;
  position: absolute;
  right: 1.5rem;
`;

export const UserAvatar = styled.img`
  width: 100%;
  height: auto;
  cursor: pointer;
`;
