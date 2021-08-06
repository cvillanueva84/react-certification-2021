import React, { useContext } from 'react'
import { GlobalContext } from './Context';

export const LoginScreen = () => {

    const {setUser} = useContext(GlobalContext);

    return (
        
        <div>
            <br/>
            <br/>
            <br/>
            <br/>
            <h1>Login Screnn</h1>
            <button
                onClick={() => setUser({
                    id: 1234,
                    name: 'Christian',
                    email: 'alonaranda@gmail.com'
                })}
            
            >Login</button>
        </div>
    )
}
