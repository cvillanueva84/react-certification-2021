import React, { useState, useContext } from 'react';
import { GlobalContext } from './Context';
import { Link, useHistory } from 'react-router-dom';
import {
  HeaderStyled,
  HeaderContenedorStyled,
  PartHeaderStyled,
  BoxInput,
  AlignBoxInput,
  BoxInputToggle,
  AlignBoxInputToggle,
  RightHeader,
  ButtonHome,
} from '../style/HeaderNavStyled';



export const HeaderNav = () => {
  const { myStateReducer, dispatch } = useContext(GlobalContext);
  const [inputValue, setValue] = useState('');
  const history = useHistory();

  const handleInputText = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'actionAddSearch',
      payload: {
        ...myStateReducer,
        search: inputValue,
      },
    });
    setValue('');
  };

  const lightMode = () => {
    dispatch({
      type: 'actionLightMode',
      payload: {
        ...myStateReducer,
      },
    });
  };

  const darkMode = () => {
    dispatch({
      type: 'actionDarkMode',
      payload: {
        ...myStateReducer,
      },
    });
  };

  const handleLogout = () => {
    dispatch({
      type: 'actionLogout',
      payload: {
        ...myStateReducer,
        mode: 'light',
      },
    });

    history.replace('/login');
  };

  return (
    <HeaderStyled>
      <HeaderContenedorStyled>

        <ButtonHome>
          <Link to="/">
            <i className="fab fa-youtube"></i>
          </Link>
        </ButtonHome>

        <PartHeaderStyled className="search">
          <BoxInput>
            <AlignBoxInput>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  value={inputValue}
                  onChange={handleInputText}
                  placeholder="Search..."
                ></input>
              </form>

              <span className="square_input">
                <i className="fas fa-search"></i>
              </span>
            </AlignBoxInput>
          </BoxInput>
        </PartHeaderStyled>

        <BoxInputToggle>
          <AlignBoxInputToggle>
            <button onClick={lightMode} className="toggle_left">
              <span role="img" aria-label="sun">
                🌞
              </span>
            </button>
            <button onClick={darkMode} className="toggle_right">
              <span role="img" aria-label="moon">
                🌜
              </span>
            </button>
          </AlignBoxInputToggle>
        </BoxInputToggle>

        <RightHeader>
          <small>{myStateReducer.user}</small>
          <button id="logout" onClick={handleLogout}>
            <span>Logout</span>
          </button>
        </RightHeader>

      </HeaderContenedorStyled>
    </HeaderStyled>
  );
};
