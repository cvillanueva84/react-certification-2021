import React, { useState } from 'react';
import { useParams } from 'react-router';
import '../Header/Header.style.css';
import './VideoDetails.css';
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



export const VideoDetails = ({history, categoria}) => {

    const { videoId } = useParams();
    //const videoId = 'F4neLJQC1_E';
    const [mode, setMode] = useState('light');


    //const { items: videos } = useFetchVideos(categoria);


    return (
        <div>
            <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>
                <GlobalStyles />

                <div className="header">
                    <div className="contenedor-header">
                        <div className="left-header">
                            <HeaderButton onClick={() => { history.goBack() }} ><i className="fas fa-undo-alt"></i></HeaderButton>
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
                            <HeaderButton onClick={() => { alert('Proximanete...') }} ><i className="fas fa-user-graduate"></i></HeaderButton>
                        </div>

                    </div>
                </div>

                <div className="contenedor">

                    <div className="video-details">
                        <div clasName="video-details-vid">
                            <iframe
                                allowFullScreen
                                frameBorder="0"
                                title="rick roll"
                                src={`https://www.youtube.com/embed/${videoId}?autoplay=0`}
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            />

                        </div>
                        <div clasName="video-details-text">
                            <h2>Soy el titulo del video</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi harum, illo culpa 
                                saepe perferendis veniam possimus consequuntur reprehenderit dicta, quos corrupti 
                                ccusamus ab reiciendis ipsum iste nesciunt labore omnis fugiat.</p>
                        </div>
                    </div>
                    <hr/>
                </div>









            </ThemeProvider>
        </div>
    );
};
