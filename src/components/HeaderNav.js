import React, { useReducer, useState } from 'react'
import { useContext } from 'react'
import { GlobalContext } from './Context'
import { Link } from "react-router-dom";
import '../style/HeaderNav.css';
import { functionReducer } from './functionReducer';



const init = () => {
    return [{
        search: '',
        mode: 'light'
    }]
}



export const HeaderNav = ({ setCategorias }) => {

    const [state , dispatch] = useReducer(functionReducer, [], init);
    console.log(state);
    const [inputValue, setValue] = useState('');

    const { mode, setMode, setSearch } = useContext(GlobalContext);

    const handleInputText = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newSearch = {
            search: inputValue,
            mode: mode
        }


        const addSearch = {
            type: 'addSearch',
            payload: newSearch
        }

        dispatch(addSearch);


        //console.log('Submit!', inputValue);
        if (inputValue.trim().length > 2) {
            setSearch(inputValue);
            setCategorias(categoria => [inputValue, ...categoria]);
            setValue('');
        }
    }

    return (
        <div className="header">
            <div className="contenedor-header">

                <div className="left-header">
                    <Link to='/' ><i className="fab fa-youtube"></i></Link>
                </div>

                <div className="center-header-left">
                    <div className="box_input">
                        <div className="align_box_input">

                            <form onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={handleInputText}
                                    placeholder="Search..."
                                ></input>
                            </form>

                            <span
                                className="square_input"
                            ><i onSubmit={handleSubmit} className="fas fa-search"></i></span>
                        </div>
                    </div>
                </div>


                <div className="center-header-right">
                    <div className="box_input_toggle">
                        <div className="align_box_input_toggle">
                            <button
                                onClick={() => setMode("light")}
                                className="toggle_left"
                            ><span role="img" aria-label="sun">🌞</span></button>
                            <button
                                onClick={() => setMode("dark")}
                                className="toggle_right"
                            ><span role="img" aria-label="moon">🌜</span></button>
                        </div>
                    </div>
                </div>



                <div className="right-header">
                    <button
                        onClick={() => { alert('Coming soon...') }}
                    ><i className="fas fa-user-graduate"></i></button>
                </div>

            </div>
        </div>
    )
}
