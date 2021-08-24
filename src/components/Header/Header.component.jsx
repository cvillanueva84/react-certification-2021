import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useStoreContext } from '../../state/Store.provider';
import Navbar from '../../components/Navbar';
import LogMenuModal from '../../modals/LogMenu';
import LoginModal from '../../modals/Login';
import {
  HeaderBody,
  HeaderLeft,
  HeaderItems,
  Search,
  Button,
  CheckBoxWrapper,
  CheckBoxLabel,
  CheckBox,
} from './Header.styles';

function Header() {
  const [searchTermAux, setSearchTermAux] = useState('');
  const { store, setSearchTerm, setTheme } = useStoreContext();
  const history = useHistory();
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenForm, setIsOpenForm] = useState(false);
  function handleChange(event) {
    setSearchTermAux(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    setSearchTerm(searchTermAux);
    history.push('/');
  }
  function handleToggle() {
    setTheme();
  }
  function handleLogin() {
    setIsOpenMenu(false);
    setIsOpenForm(true);
  }
  function handleCloseMenu() {
    setIsOpenMenu(false);
  }
  return (
    <HeaderBody>
      <HeaderLeft>
        <Navbar />
        <form data-testid="form-form" onSubmit={handleSubmit}>
          <Search
            data-testid={store.searchTerm === 'Love of lesbian' ? '' : 'search'}
            onChange={handleChange}
            placeholder="Search..."
            aria-label="search-input"
          />
        </form>
      </HeaderLeft>
      <HeaderItems data-testid={store.theme === 'light' ? 'lightTheme' : 'darkTheme'}>
        Dark mode
        <CheckBoxWrapper>
          <CheckBox id="checkbox" type="checkbox" onChange={handleToggle} />
          <CheckBoxLabel htmlFor="checkbox" />
        </CheckBoxWrapper>
        <Button
          avatarUrl={store.sessionData.avatarUrl}
          onClick={() => setIsOpenMenu(true)}
        ></Button>
        <LogMenuModal open={isOpenMenu} login={handleLogin} closeMenu={handleCloseMenu}>
          {store.sessionData.id === '' ? 'Login' : 'Logout'}
        </LogMenuModal>
        <LoginModal open={isOpenForm} onClose={() => setIsOpenForm(false)} />
      </HeaderItems>
    </HeaderBody>
  );
}

export default Header;
