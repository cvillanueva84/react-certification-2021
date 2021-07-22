import styled from 'styled-components';

export const Nav = styled.div`
  width: 100%;
  height: 64px;
  background-color: rgb(33, 85, 117);
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.19), 0 5px 5px rgba(0, 0, 0, 0.23);
`;

export const Menu = styled.div`
  /* background-color: red; */
  height: 50px;
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: white;
  font-size: 20px;
  font-weight: lighter;
  font-family: 'Roboto', sans-serif;
`;
export const Menu2 = styled.div`
  margin-right: 22px;
  /* background-color: blue; */
  height: 50px;
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: white;
  font-size: 16px;
  font-weight: lighter;
  font-family: 'Roboto', sans-serif;
  @media screen and (max-width: 960px) {
    display: none;
  }
`;
export const ContainerInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.15);
  height: 35px;
  color: white;
  padding-left: 20px;

  font-size: 22px;
`;

export const Input = styled.input`
  border: none;
  background: transparent;
  outline: none;

  width: 180px;

  &::placeholder {
    color: rgb(142, 169, 185);
    font-size: 16px;
    font-weight: lighter;
    font-family: 'Roboto', sans-serif;
  }
`;

export const InputCheck = styled.input`
  margin: 10px;
  display: flex;
  align-items: center;
  appearance: none;
  width: 40px;
  height: 13px;
  border-radius: 20px;
  background: rgb(21, 54, 73);
  position: relative;
  box-sizing: border-box;

  &::before {
    content: '';
    width: 20px;
    height: 20px;
    background: #ffffff;
    border-radius: 50%;
    position: absolute;
    transition: all 0.3s ease-in-out;
  }

  &:checked {
    background: rgb(60, 120, 169);
    &::before {
      background: rgb(37, 133, 123);
      transform: translate(100%, 5%);
      transition: all 0.3s ease-in-out;
      box-shadow: 0px 1px 0px 1px rgba(0, 0, 0, 0.13);
    }
  }
`;

export const Image = styled.button`
  margin-left: 30px;
  margin-right: 10px;
  border-radius: 50%;
  border: none;
  height: 40px;
  width: 40px;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

export const ButtonMenu = styled.button`
  display: flex;
  text-align: center;
  justify-content: center;
  border-radius: 50%;
  padding: 12px;
  margin-right: 16px;
  background-color: transparent;
  color: white;
  margin-left: 12px;
  border: none;
  font-size: 1.5rem;
`;

export const NavMenu = styled.ul`
  display: flex;
  width: 100vw;
  height: 100vh;
  bottom: 0;
  position: absolute;
  display: ${({ click }) => (click ? 'flex' : 'none')};
  left: ${({ click }) => (click ? 0 : '-100vw')};
  opacity: 1;
  transition: all 0.5s ease;
  background: rgba(0, 0, 0, 0.5);
  justify-content: flex-start;
`;

export const NavItem = styled.div`
  position: absolute;
  left: 0;
  width: 250px;
  height: 100vh;
  background-color: #ffffff;
`;

export const DivItem = styled.div`
  width: 234px;
  height: 40px;

  color: black;
  position: absolute;
  top: 20px;
  display: flex;
  align-items: center;
  padding: 8px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.19), 0 1px 5px rgba(0, 0, 0, 0.19);
  font-size: 16px;
  font-weight: normal;
`;

export const SpanItem = styled.span`
  padding-left: 8px;
`;
