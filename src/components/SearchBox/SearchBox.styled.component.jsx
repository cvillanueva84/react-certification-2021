/* eslint-disable import/no-extraneous-dependencies */
import styled from 'styled-components';
import { Search } from '@styled-icons/boxicons-regular/Search';

export const SearchBoxContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.15);
  margin: 12px 20px;
  display: flex;
  justify-content: start;
  border-radius: 4px;
  padding-left: 16px;
  width: 100%;
  @media (min-width: ${(props) => props.minWidth}) {
    width: auto;
  }
`;

export const SearchInput = styled.input`
  padding: 8px 8px 8px 0px;
  width: 100%;
  padding-left: calc(1em + 16px);
  outline: 0;
  background: transparent;
  border: none;
  ::placeholder {
    color: rgba(255, 255, 255, 0.85);
    font-size: 1rem;
  }
`;

export const SearchIcon = styled(Search)`
  width: 24px;
`;
