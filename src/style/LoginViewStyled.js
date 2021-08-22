import styled from 'styled-components';

export const ContenedorLogin = styled.div`
  margin: auto;
  padding-top: 80px;
  width: 100%;
  height: 100vh;
  background-color: white;

  h1 {
    text-align: center;
    font-family: monospace;
  }
`;

export const Login = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;

  button {
    color: #008cba;
    border: 2px solid #008cba;
    margin: 10px 5px 40px 5px;
    padding: 10px 12px;
    border-radius: 8px;
    font-family: monospace;
    font-size: 30px;
  }

  button:hover {
  color: white;
  background-color: #008cba;
  transition-duration: 0.4s;
}
`;

export const FormGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 1rem;

  strong {
    display: block;
    margin-bottom: 0.4rem;
  }

  input {
    color: black;
    font-size: 1.2rem;
    width: 100%;
    padding: 0.4rem 0.6rem;
    border-radius: 4px;
    border: 1px solid #008cba;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const LoginGoogle = styled.div`
  p{
    font-family: monospace;
    text-align: center;
  }
`;

export const GoogleBtn = styled.div`
  cursor: pointer;
  margin-top: 5px;
  width: 255px;
  height: 42px;
  background-color: #4285f4;
  border-radius: 2px;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);
  transition: box-shadow 0.3s ease;
`;

export const IconoGoogle = styled.div`
  position: absolute;
  margin-top: 1px;
  margin-left: 1px;
  width: 40px;
  height: 40px;
  border-radius: 2px;
  background-color: white;
  
  img {
    position: absolute;
    margin-top: 11px;
    margin-left: 11px;
    width: 18px;
    height: 18px;
  }

`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

 export const Text = styled.p`
  float: right;
  margin: 11px 4px 0 0;
  color: black;
  font-size: 17px;
  letter-spacing: 0.2px;
`;
