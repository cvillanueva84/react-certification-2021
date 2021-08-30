import React from 'react';
import {
    ContenedorLogin,
    Login,
    FormGroup,
    LoginGoogle,
    GoogleBtn,
    IconoGoogle,
    FormStyled,
    Text
  } from '../../style/LoginViewStyled';

export const LoginViewUi = ({handleInputChange, handlelogin, handleGooglelogin, textUser, textPass}) => {
    return (
        <ContenedorLogin>
            <h1>Login!</h1>
            <Login>
                <FormStyled onSubmit={handlelogin}>
                    <FormGroup>
                        <label>
                            <strong>Username:</strong>
                            <input
                                required
                                type="text"
                                placeholder="Your username"
                                name="textUser"
                                value={textUser}
                                onChange={handleInputChange}
                                autoComplete="off"
                            />
                        </label>
                    </FormGroup>

                    <FormGroup>
                        <label>
                            <strong>Password:</strong>
                            <input
                                required
                                type="password"
                                placeholder="Your password"
                                name="textPass"
                                value={textPass}
                                onChange={handleInputChange}
                                autoComplete="off"
                            />
                        </label>
                    </FormGroup>

                    <button type="submit" onClick={handlelogin}>
                        Login
                    </button>

                    <LoginGoogle>
                        <p>Login with Google:</p>
                        <GoogleBtn onClick={handleGooglelogin}>
                            <IconoGoogle>
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                                    alt="google button"
                                />
                            </IconoGoogle>
                            <Text>
                                <b>Sign in with google</b>
                            </Text>
                        </GoogleBtn>
                    </LoginGoogle>
                </FormStyled>
            </Login>
        </ContenedorLogin>
    )
}
