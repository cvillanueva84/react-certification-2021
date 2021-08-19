import React, { useContext, useState } from 'react';
import {
  FaHamburger, FaHome, FaRegMoon, FaSun, FaUserAstronaut, FaWindowClose
} from 'react-icons/fa';
import { FcLike } from 'react-icons/fc';
import { IconContext } from 'react-icons/lib';
import { Link, useHistory } from 'react-router-dom';
import LoginModal from '../../pages/Login';
import { useAuth } from '../../providers/Auth';
import Context from '../../providers/Theme/Theme.context';
import { VideoListContext } from '../../providers/VideoList/VideoList.provider';
import { InputText, LogoutBtn } from './NavbarComponent.styled';
import './NavbarComponent.styles.css';

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const toogleSideBar = () => setSidebar(!sidebar);
  const { setSearch } = useContext(VideoListContext);
  const { dispatch } = useContext(Context);
  const { authenticated, logout } = useAuth();
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;
    setSearch(inputValue);
    setInputValue('');
  };

  const handleClick = () => {
    dispatch({
      type: 'TOGGLE_DARK_MODE',
    });
  };

  const handleLogout = () => {
    logout();
    history.replace('/');
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff', size: '3rem' }}>
        <nav className="navbar">
          <div className="navbar__left-section">
            <div className="menu-bars">
              <FaHamburger onClick={toogleSideBar} />
            </div>
            <form onSubmit={handleSubmit}>
              <InputText
                type="text"
                name="search"
                placeholder="search a video..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </form>
          </div>

          <div className="navbar__right-section">
            <div className="toggle">
              <FaRegMoon className="moon-icon" size={20} />
              <label className="switch">
                <input type="checkbox" onClick={handleClick} />
                <span className="slider round"></span>
              </label>
              <FaSun className="sun-icon" size={20} />
            </div>
            {authenticated ? (
              <LogoutBtn type="button" onClick={handleLogout}>
                Logout
              </LogoutBtn>
            ) : (
              <>
                <FaUserAstronaut className="user-icon" onClick={() => setIsOpen(true)} />
                {isOpen && (
                  <div className="login">
                    <LoginModal open={isOpen} onClose={() => setIsOpen(false)} />
                  </div>
                )}
              </>
            )}
          </div>
        </nav>

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-menu-items" onClick={toogleSideBar}>
            <li
              className="navbar-toggle"
              style={{ cursor: 'pointer', marginLeft: '2rem' }}
            >
              <FaWindowClose />
            </li>
            <li className="nav-text">
              <Link to="/">
                <FaHome />
                <span style={{ color: '#fff' }}>Home</span>
              </Link>
            </li>
            {authenticated && (
              <li className="nav-text">
                <Link to="/favorite-videos">
                  <FcLike />
                  <span style={{ color: '#fff' }}>Fav Videos</span>
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
