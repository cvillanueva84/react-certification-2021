import styled from 'styled-components';


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