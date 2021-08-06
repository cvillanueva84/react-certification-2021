import React from 'react';
import { useContext } from 'react';
import { GlobalContext } from './Context';


export const HomeScreen = () => {

    const {user} = useContext(GlobalContext);
    console.log(user);

    return (
        <div>
            <br/>
            <br/>
            <br/>
            <br/>
            <h1>HomeScreen</h1>
            <hr/>
            <pre>
                {JSON.stringify(user, null, 3)}
            </pre>

        </div>
    )
}
