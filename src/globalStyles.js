import { createGlobalStyle } from 'styled-components';

const NAVBAR_HEIGHT = '70px';
const SIDE_MENU_WIDTH = '100px';

export const LightTheme = {
  background_color: 'white',
  text_color: 'black',
  icon_color: '#606060',
  scrollbar_track_color: 'white',
  scrollbar_thumb_color: '#666',
  scrollbar_thumb_hover_color: '#CCC',
  navbar_height: NAVBAR_HEIGHT,
  sidemenu_width: SIDE_MENU_WIDTH,
};

export const DarkTheme = {
  background_color: '#202020',
  text_color: 'white',
  icon_color: '#909090',
  scrollbar_track_color: 'black',
  navbar_height: NAVBAR_HEIGHT,
  sidemenu_width: SIDE_MENU_WIDTH,
};

export const themes = {
  light: LightTheme,
  dark: DarkTheme,
};

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-size: 16px;
    }

    body{
        background: ${(props) => props.theme.background_color};
    }

    body::-webkit-scrollbar {
        width: 0.75rem;
    }   

    body::-webkit-scrollbar-track {
        background: ${(props) => props.theme.scrollbar_track_color};
    }

    body::-webkit-scrollbar-thumb {
        background: ${(props) => props.theme.scrollbar_thumb_color};
        border-radius: 1.25rem;
        border: 0.15rem solid ${(props) => props.theme.scrollbar_track_color};
    }

    body::-webkit-scrollbar-thumb:hover {
        background: ${(props) => props.theme.scrollbar_thumb_hover_color};
    }
`;
