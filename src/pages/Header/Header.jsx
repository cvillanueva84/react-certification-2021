import React, { useState } from 'react';
//import PropTypes from 'prop-types';
import './Header.style.css';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
//import { useFetchVideos } from '../../hooks/useFetchVideos';

const commontheme = {
  fontFam: 'Arial',
};

const lightTheme = {
  ...commontheme,
  bg: '#fff',
  text: '#121212',
};

const darkTheme = {
  ...commontheme,
  bg: '#242526',
  text: '#fff',
};

const HeaderButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 36px;
  cursor: pointer;
  color: white;
`;

const GlobalStyles = createGlobalStyle`
  body {
    font-family: ${(props) => props.theme.fontFam};
    color: ${(props) => props.theme.text};
    background-color: ${(props) => props.theme.bg};

    transition: 0.8s;
  }
`;


export const Header = ({setCategorias}) => {

  const [inputValue, setValue] = useState('');

  const [mode, setMode] = useState('light');

  const handleInputText = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log('Submit!', inputValue);
    if(inputValue.trim().length > 2){
      setCategorias(categoria => [inputValue, ...categoria]);
      setValue('');
    }
  }


  return (
      <div>
      <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles/>
        <div className="header">
          <div className="contenedor-header">



              <div className="left-header">
                <HeaderButton><i className="fab fa-youtube"></i></HeaderButton>
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

                  <span className="square_input"><i onSubmit={handleSubmit} className="fas fa-search"></i></span>
                </div>
              </div>
              </div>


              <div className="center-header-right">
                <div className="box_input_toggle">
                  <div className="align_box_input_toggle">
                    <HeaderButton
                      onClick={() => setMode("light")}
                      className="toggle_left"
                    ><span role="img" aria-label="sun">🌞</span></HeaderButton>
                    <HeaderButton
                      onClick={() => setMode("dark")}
                      className="toggle_right"
                    ><span role="img" aria-label="moon">🌜</span></HeaderButton>
                  </div>
                </div>

              </div>



              <div className="right-header">
                <HeaderButton><i className="fas fa-user-graduate"></i></HeaderButton>
              </div>

          </div>
        </div>
      </ThemeProvider>
    </div>
  )
}
