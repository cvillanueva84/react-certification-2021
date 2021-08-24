import styled from 'styled-components';

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
const HeaderLeft = styled.div`
  display: flex;
  gap: 2rem;
`;
const HeaderItems = styled.div`
  display: flex;
  gap: 2rem;
  @media (max-width: 1000px) {
    display: none;
  }
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
  border-radius: 50%;
  background-image: url(${(props) => props.avatarUrl});
  background-position: center;
  background-size: 60px 50px;
  background-repeat: no-repeat;
  :hover {
    border: 2px solid black;
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

export {
  HeaderBody,
  HeaderLeft,
  HeaderItems,
  Search,
  Button,
  CheckBoxWrapper,
  CheckBoxLabel,
  CheckBox,
};
