// Downloaded SVG from https://www.flaticon.es/icono-gratis/menu_545705?term=menu&page=1&position=12&page=1&position=12&related_id=545705&origin=search
import React from 'react';

function MenuIcon(props) {
  const { color } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height="100%"
      width="100%"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

export default MenuIcon;
