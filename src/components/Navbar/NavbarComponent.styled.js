import styled from 'styled-components';


export const InputText = styled.input`
background-color: #060b26;
border: none;
color: #fff;
margin-left: 2rem;
padding: 0.5rem;
width: 60%;
transition: all 0.3s ease;
&::placeholder {
  color: #fff;
}
&:hover {
  width: 100%;
  border-bottom: 2px solid #fff;
}
`;
InputText.displayName = 'InputText';

export const LogoutBtn = styled.button`
  padding: 1rem;
  border-radius: 4px;
  background-color: #fff;
  color: #060b26;
  transition: all .3s ease;
  border: 1px solid transparent;
  &:hover{
    background-color: #060b26;
    color: #fff;
    border: 1px solid #fff;
  }
`;
LogoutBtn.displayName = 'LogoutBtn'