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