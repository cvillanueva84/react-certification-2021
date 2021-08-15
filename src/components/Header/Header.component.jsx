import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import { useStoreContext } from '../../state/Store.provider';
import { types } from '../../state/storeReducer';

const HeaderBody = styled.div`
  border-bottom: solid 1px #f1f1f1;
  display: flex;
  justify-content: space-between;
  padding: 0.75rem;
  @media (max-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
    gap: 0.5rem;
  }
`;
const HeaderItems = styled.div`
  display: flex;
  gap: 2rem;
  @media (max-width: 1000px) {
    display: none;
  }
`;
const Logo = styled.div`
  width: 14rem;
  height: 2rem;
  background-image: url('https://static.comunicae.com.mx/photos/notas/121673/1522087691_PRESS.wizeline_logo.png');
  background-position: center;
  background-size: 160px 70px;
  background-repeat: no-repeat;
`;

const Search = styled.input`
  padding: 16px 16px 16px 60px;
  border: 1px solid;
  border-radius: 3px;
  box-shadow: inset 0 -8px 1px rgba(248, 10, 10, 0.03);
  font-weight: 300;
  font-size: 15px;
  width: 400px;
  height: 30px;
  :hover {
    background-color: #f8f7f7;
  }
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #dbd8d8;
    font-weight: 300;
    font-size: 1.1rem;
  }
`;

const Button = styled.button`
  font-size: 1em;
  font-weight: 600;
  padding: 0.1rem 1rem;
  text-align: center;
  border: 2px solid black;
  border-radius: 5px;
  background-color: white;
  :hover {
    background-color: #f8f7f7;
  }
`;

const CheckBoxWrapper = styled.div`
  position: relative;
  top: 10px;
`;
const CheckBoxLabel = styled.label`
  position: absolute;
  left: 0;
  width: 42px;
  border-radius: 15px;
  background: #bebebe;
  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: red;
    &::after {
      content: '';
      display: flex;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;

function Header() {
  const [searchTermAux, setSearchTermAux] = useState('');
  const [store, dispatch] = useStoreContext();
  const history = useHistory();
  function handleChange(event) {
    setSearchTermAux(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    dispatch({
      type: types.setSearchTerm,
      payload: searchTermAux,
    });
    history.push('/');
  }
  function handleToggle() {
    dispatch({
      type: types.setTheme,
      payload: store.theme === 'light' ? 'dark' : 'light',
    });
  }
  return (
    <HeaderBody>
      <Logo />
      <form data-testid="form-form" onSubmit={handleSubmit}>
        <Search
          data-testid={store.searchTerm === 'Love of lesbian' ? '' : 'search'}
          onChange={handleChange}
          placeholder="Search..."
          aria-label="search-input"
        />
      </form>
      <HeaderItems data-testid={store.theme === 'light' ? 'lightTheme' : 'darkTheme'}>
        Dark mode
        <CheckBoxWrapper>
          <CheckBox id="checkbox" type="checkbox" onChange={handleToggle} />
          <CheckBoxLabel htmlFor="checkbox" />
        </CheckBoxWrapper>
        <Button>Login</Button>
      </HeaderItems>
    </HeaderBody>
  );
}

export default Header;
