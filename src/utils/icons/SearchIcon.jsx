// Downloaded SVG from https://freeicons.io/business-and-online-icons/search-icon-icon-3
import React from 'react';

function SearchIcon(props) {
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
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

export default SearchIcon;
