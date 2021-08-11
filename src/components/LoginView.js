import React, { useContext } from 'react';
import { useForm } from '../hooks/useForm';
import '../style/LoginView.css'
import { GlobalContext } from './Context';

export const LoginView = ({history}) => {

    const { myStateReducer, dispatch } = useContext(GlobalContext);

    const initialForm = {
        textUser: '',
        textPass: ''
    }
    const[formValues, handleInputChange] = useForm(initialForm);
    const { textUser, textPass } = formValues;



    const handlelogin = (e) => {
        const lastPath = localStorage.getItem('lastPath') || '/';
        e.preventDefault();
        dispatch({
            type: 'actionLogin',
            payload: {
                ...myStateReducer,
                user: textUser
            }
        });
        history.replace(lastPath);
    }
    


    return (
        <section className="contenedor-login">
            <h1>Login!</h1>
            <div className="login">

                <form onSubmit={handlelogin} className="login-form">

                    <div className="form-group">
                        <label>
                            <strong>Username:</strong>
                            <input 
                                required 
                                type="text"
                                placeholder="Your username"
                                name="textUser"
                                value={textUser}
                                onChange={handleInputChange}
                            />
                        </label>
                    </div>


                    <div className="form-group">
                        <label>
                            <strong>Password:</strong>
                            <input 
                                required 
                                type="password"
                                placeholder="Your password"
                                name="textPass"
                                value={textPass}
                                onChange={handleInputChange}
                            />
                        </label>
                    </div>

                    <button 
                        type="submit"
                        onClick={handlelogin}
                >Login</button>

                </form>

            </div>
        </section>
    )
}
