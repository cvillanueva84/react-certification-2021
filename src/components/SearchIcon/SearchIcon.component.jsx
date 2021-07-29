import styled from 'styled-components';
import { ReactComponent as Icon } from './searchIcon.svg';

const SearchIcon = styled(Icon)`
  fill: #fff;
  position: absolute;
  z-index: 9;
  left: 32px;
  fill-opacity: 1;
`;

export default SearchIcon;
