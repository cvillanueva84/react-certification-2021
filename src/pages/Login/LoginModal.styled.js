import styled from 'styled-components';

export const CloseBtn = styled.button`
    background-color: var(--red-btn);
    color: var(--light-gray);
    padding: 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all .3s ease;
    &:hover{
        box-shadow: 5px 5px 15px 0px var(--black);
        transform: translate(2px);
    }
    @media only screen and (max-width: 800px) {
      width: 40%;
      display: flex;
      flex-direction: column;
    }
`;

CloseBtn.displayName = 'CloseBtn'

export const LoginBtn = styled.button`
    background: green;
    color: var(--light-gray);
    padding: 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all .3s ease;
    &:hover{
        box-shadow: 5px 5px 15px 0px var(--black);
        transform: translate(2px);
    }
    @media only screen and (max-width: 800px) {
      width: 40%;
      display: flex;
      flex-direction: column;
    }
`;

LoginBtn.displayName = 'LoginBtn'

export const ErrorDiv = styled.div`
    background-color: var(--red-btn);
    padding: 2rem;
    text-align: left ;
    border-radius: 4px;
    margin: 1.5rem 0;
`;

ErrorDiv.displayName ='ErrorDiv'

export const ErrorSpan = styled.span`
    margin-left: 0px;
    color: var(--main-white);
    font-size: 1.6rem;
`

export const OverlayDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--overlay-black);
  z-index: 1000;
`;
OverlayDiv.displayName = 'OverlayDiv';

export const LoginSection = styled.section`
  width: 40%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--main-white);
  padding: 50px;
  z-index: 1000;
  @media only screen and (max-width: 1000px) {
    width: 60%;
  }
`;

LoginSection.displayName = 'LoginSection'

export const LoginH1 = styled.h1`
  text-align: center;
  letter-spacing: -1px;
  color: var(--main-blue);
  font-size: 2rem;
  margin-bottom: 3rem;
`;

LoginH1.displayName = 'LoginH1'

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

LoginForm.displayName = 'LoginForm'

export const LoginFormGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

LoginFormGroup.displayName = 'LoginFormGroup'

export const FormStrong = styled.strong`
  display: block;
  font-weight: 700;
  text-transform: capitalize;
  margin-bottom: 0.4rem;
  color: var(--main-blue);
  font-size: 2rem;
`;

FormStrong.displayName = 'FormStrong'

export const FormInput = styled.input`
  font-size: 1.2rem;
  width: 100%;
  padding: 0.4rem 0.6rem;
  border-radius: 3px;
  border: 1px solid white;
  background-color: var(--lighter-gray);
  color: var(--main-blue);
`;

FormInput.displayName = 'FormInput'

export const FormBtns = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 1000px) {
        display: flex;
        justify-content: space-around;
        width: 90%; 
    }
`;

FormBtns.displayName = 'FormBtns'