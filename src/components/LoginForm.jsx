import React, {useState, useContext} from 'react';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import GlobalContext from '../state/GlobalContext';

const mockedUser = {
    id: '123',
    name: 'Wizeline',
    avatarUrl: 'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
};

async function loginApi(username, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === 'wizeline' && password === 'Rocks!') {
          return resolve(mockedUser);
        }
        return reject(new Error('Username or password invalid'));
      }, 500);
    });
  }

const LoginForm = (props) => {

    const { dispatch, state } = useContext(GlobalContext);
    const {closeLoginModal} = props; //Used to close the login modal, passed from App component
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginButton = () => {
        loginApi(username, password)
        .then(usuario => {
            dispatch({
                type: 'LOG_IN_USER',
                payload: {
                  id: usuario.id,
                  name: usuario.name,
                  avatar: usuario.avatarUrl,
                  loggedIn: true,
                },
            });
            closeLoginModal();
        }).catch(error => {
            console.log(error);
        });
    }

    const handleLogoutButton = () => {
        dispatch({
            type: 'LOG_OUT_USER',
        });
    }

    return (
        <>
        {(!state.user.loggedIn) ? (<form >
            
            <div style={{margin: 5}}>
                <h2>Login</h2>
            </div>

            <div style={{margin: 5}}>
                <TextField id="username" label="Username" variant="outlined" onChange={(e) => setUsername(e.target.value)} />
            </div>
            
            <div style={{margin: 5}}>
                <TextField id="password" label="Password" variant="outlined" onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <Button onClick={closeLoginModal}>
                    Cancel
                </Button>
                <Button onClick={handleLoginButton}>
                    Login
                </Button>
            </div>
        </form>) : (
            <div>
            <div >
                You are logged in as {state.user.name}
            </div>
            <div>
                <Button onClick={handleLogoutButton}>
                    Logout
                </Button>
            </div>
            </div>
        )}
        </>
    )
}

const styledLoginForm = styled(LoginForm)`
    position: absolute;
    left: '50%';
    top: '50%';
`;

export default LoginForm;