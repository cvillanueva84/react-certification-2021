import React from 'react';
import styled from 'styled-components';

const Element = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 3px;
  margin: 0.5rem 0;
  padding: 0.5rem;

  &:hover {
    background-color: hsl(0, 0%, 92%);
  }
`;
const Text = styled.p`
  margin: 0;
  margin-left: 0.5rem;
  color: hsl(0, 0%, 50%);
  font-weight: lighter;
`;


function SideBarOption(props: any) {

  const Icon = props.icon;
  const style = {
    color: 'hsl(0, 0%, 75%)'
  };

  return (
    <Element>
      <Icon style={style} />
      <Text>{props.children}</Text>
    </Element>
  );
}

export default SideBarOption;
