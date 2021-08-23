import styled from 'styled-components';

export const NavBar = styled.nav`
  background-color: var(--main-blue);
  height: 80px;
  display: flex;
  align-items: center;
`;

NavBar.displayName = 'NavBar'

export const NavbarLeftSection = styled.div`
  display: flex;
  width: 30%;
  align-items: center;
  padding: 1rem;

  @media only screen and (max-width: 1000px) {
    width: 80%;
    padding: 0 0.5rem;
    margin-left: -2rem;
  }
`;

NavbarLeftSection.displayName = 'NavbarLeftSection'

export const NavbarRightSection = styled.div`
  width: 70%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 5rem;
  @media only screen and (max-width: 1000px) {
    width: 20%;
    margin-right: -10px;
    margin-left: -10px;
  }
`
NavbarRightSection.displayName = 'NavbarRightSection'

export const MenuBars = styled.div`
  margin-left: 5rem;
  background: none;
  cursor: pointer;
`
MenuBars.displayName = 'MenuBars'

export const ToggleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 2rem;
`;
ToggleDiv.displayName = 'ToggleDiv'

export const InputText = styled.input`
background-color: var(--main-blue);
border: none;
color: var(--main-white);
margin-left: 2rem;
padding: 0.5rem;
width: 60%;
transition: all 0.3s ease;
&::placeholder {
  color: var(--main-white);
}
&:hover {
  width: 100%;
  border-bottom: 2px solid var(--main-white);
}
`;
InputText.displayName = 'InputText';

export const LogoutBtn = styled.button`
  padding: 1rem;
  border-radius: 4px;
  background-color: var(--main-white);
  color: var(--main-blue);
  transition: all .3s ease;
  border: 1px solid transparent;
  &:hover{
    background-color: var(--main-blue);
    color: var(--main-white);
    border: 1px solid var(--main-white);
  }
`;
LogoutBtn.displayName = 'LogoutBtn'