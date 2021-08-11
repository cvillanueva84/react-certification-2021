import React from 'react';
import '../style/LoginView.css'

export const LoginView = () => {
    return (
        <section className="contenedor-login">
            <h1>Login!</h1>
            <div className="login">

                <form className="login-form">

                    <div className="form-group">
                        <label>
                            <strong>Username:</strong>
                            <input required type="text"/>
                        </label>
                    </div>


                    <div className="form-group">
                        <label>
                            <strong>Password:</strong>
                            <input required type="password"/>
                        </label>
                    </div>

                    <button type="submit">Login</button>

                </form>

            </div>
        </section>
    )
}
