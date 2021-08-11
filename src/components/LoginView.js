import React, { useContext } from 'react';
import { useForm } from '../hooks/useForm';
import '../style/LoginView.css'
import { GlobalContext } from './Context';

export const LoginView = ({ history }) => {

    const { myStateReducer, dispatch } = useContext(GlobalContext);

    const initialForm = {
        textUser: '',
        textPass: ''
    }
    const [formValues, handleInputChange, reset] = useForm(initialForm);
    const { textUser, textPass } = formValues;



    const handlelogin = (e) => {
        e.preventDefault();

        if (textUser === 'Wizeline' && textPass === 'Rocks!') {
            const lastPath = localStorage.getItem('lastPath') || '/';
            dispatch({
                type: 'actionLogin',
                payload: {
                    ...myStateReducer,
                    user: textUser
                }
            });
            history.replace(lastPath);
        } else {
            alert('Usuario no valido');
            reset();
        }

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
                                autoComplete="off"
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
                                autoComplete="off"
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
