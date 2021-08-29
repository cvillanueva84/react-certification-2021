import React from 'react';
import LoginForm from '../components/LoginForm';

const Login = (props) => {
    const {closeLoginModal} = props;

    return (
        <>
            <div style={{
                    position: 'absolute', 
                    left: '40%', 
                    top: '35%', 
                    backgroundColor: 'white',
                    padding: 20,
                }}>
                <LoginForm closeLoginModal={closeLoginModal} />
            </div>
        </>
    )
};

export default Login;