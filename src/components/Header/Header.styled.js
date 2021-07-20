import styled from 'styled-components';

export const NavBar = styled.nav`
  background: #212120;
  padding: 0.5rem 0.5rem;
  width: 100%;
  position: fixed;
  display: flex;
  height: auto;
  padding: 1 1rem;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  align-items: center;
  justify-content: center;
`;

export const HeaderTitle = styled.h1`
  position: absolute;
  left: 0;
  padding-top: 2px;
  padding-left: 4rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: #e83c42;
  margin: 0px;
`;

export const BarsIcon = styled.i`
  position: absolute;
  top: 0;
  left: 0;
  padding-top: 8px;
  font-size: 2rem;
  padding-left: 0.7rem;
  color: #e83c42;
  cursor: pointer;
`;
export const SearchContainer = styled.div`
  width: 50%;
  margin-left: auto;
  margin-right: auto;
`;

export const Icon = styled.i`
  position: absolute;
  margin: 5px 0px;
  padding-left: 5px;
  color: #e83c42;
  font-size: 1.4rem;
`;

export const SearchField = styled.input`
  background: rgba(255, 255, 255, 0.2);
  padding: 1px;
  width: 100%;
  padding-left: 2rem;
  font-size: 1.2rem;
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
  top: 0.8rem;
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

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const Check = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckLabel} {
    background: green;
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

  @media screen and (max-width: 500px) {
    display: none;
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
  @media screen and (max-width: 550px) {
    display: none;
  }
`;

export const ImgContainer = styled.div`
  width: 40px;
  height: 40px;
  padding: 0px;
  margin: 0px;
  position: absolute;
  right: 1.5rem;
`;

export const UserAvatar = styled.img`
  width: 100%;
  height: auto;
  cursor: pointer;
  @media screen and (max-width: 430px) {
    display: none;
  }
`;
