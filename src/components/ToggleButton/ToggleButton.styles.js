import styled from 'styled-components';

const ToggleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 25px;
  > input {
    display: none;
  }
`;

const SliderRound = styled.span`
  position: absolute;
  cursor: pointer;
  background-color: #ccc;
  border-radius: 25px;
  top: 5px;
  bottom: 5px;
  right: 0;
  left: 0;
  transition: background-color 0.2s ease;
  ${({ dark }) => dark && `background-color: #000;`}
  &:before {
    position: absolute;
    content: '';
    left: 0;
    top: -5px;
    width: 25px;
    height: 25px;
    background-color: #fff;
    border-radius: 50%;
    transition: transform 0.3s ease;
    ${({ dark }) => dark && `transform: translateX(25px);`}
  }
`;

const Typography = styled.p`
  margin-left: 10px;
  font-size: 1rem;
`;

export { ToggleContainer, ToggleSwitch, SliderRound, Typography };
