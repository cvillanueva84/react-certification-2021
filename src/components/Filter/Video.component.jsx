import React from 'react';
import { Input } from './Video.style';
import { useAppContext } from '../Layout/Layout.component';

function FilterVideo() {
  const { setInput } = useAppContext();
  const updateSearch = (event) => {
    setInput(event.target.value);
  };
  return <Input onChange={updateSearch} placeholder="Search..." />;
}
export default FilterVideo;
