import styled from 'styled-components';

export const Toggle = styled.section`
  display: inline;
  float: rigth;
  
  & .switch{ 
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  & .switch input { 
    opacity: 0;
    width: 0;
    height: 0;
  }

  & .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      -webkit-transition: .4s;
      transition: .4s;
  }

& .slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

& input:checked + .slider {
  background-color: #2196F3;
}

& input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

& input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}


& .slider.round {
  border-radius: 34px;
}

& .slider.round:before {
  border-radius: 50%;
}`;

export const Search = styled.section`
  display: inline;
  
  & .logoSearch {
    position: relative;
    z-index: 1;
    left: -25px;
    top: 1px;
    color: #7B7B7B;
    cursor:pointer;
    width: 0;
  }`;

/* header */

export const Header = styled.section`
  background-color: #fff;
  box-shadow: 1px 1px 4px 0 rgba(0,0,0,.1);
  position: fixed;
  width: 100%;
  z-index: 3;
  top: 0;

  & a{ 
    color: #000000;
    font-size: .5rem;
  }

  & ul {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: hidden;
    background-color: #fff;
  }

  & li a {
    display: block;
    padding: 20px 20px;
    border-right: 1px solid #f4f4f4;
    text-decoration: none;
  }

  & li a:hover, .menu-btn:hover {
    background-color: #f4f4f4;
  }

  & .logo {
    display: block;
    float: right;
    font-size: 2em;
    padding: 10px 20px;
    text-decoration: none;
  }

/* menu */

 & .menu {
    clear: both;
    max-height: 0;
    transition: max-height .2s ease-out;
  }

/* menu icon */

  & .menu-icon {
    cursor: pointer;
    display: inline-block;
    float: left;
    padding: 28px 20px;
    position: relative;
    user-select: none;
  }

  & .menu-icon .navicon {
    background: #333;
    display: block;
    height: 2px;
    position: relative;
    transition: background .2s ease-out;
    width: 18px;
  }

  & .menu-icon .navicon:before,
    .menu-icon .navicon:after {
      background: #333;
      content: '';
      display: block;
      height: 100%;
      position: absolute;
      transition: all .2s ease-out;
      width: 100%;
  }

  & .menu-icon .navicon:before {
    top: 5px;
  }

  & .menu-icon .navicon:after {
    top: -5px;
  }

/* menu btn */

  & .menu-btn {
    display: none;
  }

  & .menu-btn:checked ~ .menu {
    max-height: 240px;
  }

  & .menu-btn:checked ~ .menu-icon .navicon {
    background: transparent;
  }

  & .menu-btn:checked ~ .menu-icon .navicon:before {
    transform: rotate(-45deg);
  }

  & .menu-btn:checked ~ .menu-icon .navicon:after {
    transform: rotate(45deg);
  }

  & .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
    .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
    top: 0;
  }`;
