import styled from 'styled-components';

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 5;
  border-bottom: 1px solid #333;

  .nav-item button {
    border: none;
    background-color: none;
  }

  .nav-item:hover {
    border: 1px solid #333;
    transition: ease 0.3s all;
  }
`;

export default StyledHeader;
