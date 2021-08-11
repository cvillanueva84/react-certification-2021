import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaHamburger, FaWindowClose, FaHome, FaUserNinja } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import './Navbar.styles.scss';
import { InputText } from './styledComponents';
import { VideoListContext } from '../../providers/VideoList/VideoList.provider';
import { useHistory } from 'react-router-dom';

// ##### Im thinking about refactoring this component into another component as I think it's kind of complex to read ####

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const toogleSideBar = () => setSidebar(!sidebar);
  const { setSearch } = useContext(VideoListContext);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(inputValue);
    setInputValue('');
    history.push('/');
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
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
            </div>
            <Link to="/">
              <FaUserNinja />
            </Link>
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
                <span>Home</span>
              </Link>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
