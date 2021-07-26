import React from 'react';
import styled from 'styled-components';

export const CardVideoDisplayerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  justify-content: center;
  padding-bottom: 2rem;

  top: ${(props) => props.theme.navbar_height};
  left: ${(props) => props.theme.sidemenu_width};

  width: calc(100vw - ${(props) => props.theme.sidemenu_width});
`;

export const CardVideoContainer = styled.div`
  width: calc((100vw - ${({ theme }) => theme.sidemenu_width}) / 1 - 4rem - 0.01px);
  aspect-ratio: 16/14;
  margin-top: 2rem;
  margin-left: 1rem;
  margin-right: 1rem;

  @media (min-width: 750px) {
    width: calc((100vw - ${({ theme }) => theme.sidemenu_width}) / 2 - 4rem - 0.01px);
  }

  @media (min-width: 1000px) {
    width: calc((100vw - ${({ theme }) => theme.sidemenu_width}) / 3 - 4rem - 0.01px);
  }

  &:hover {
    cursor: pointer;
  }
`;

export const CardVideoImage = styled.img`
  width: 100%;
  aspect-ratio: 16/9;
  height: auto;

  background: yellow;
`;

const CardVideoBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  aspect-ratio: 16/5;
  align-items: center;
  justify-content: center;
`;

const CardVideoTitle = styled.h2`
  color: ${(props) => props.theme.text_color};
  font-size: 1.2rem;
  padding: 0.5rem 0.3rem;
  text-align: center;
`;

const CardVideoDescription = styled.p`
  color: ${(props) => props.theme.text_color};

  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-bottom: 0.5rem;
  font-size: 1rem;
`;

export function CardVideoBottom({ title, description }) {
  return (
    <>
      <CardVideoBottomContainer>
        <CardVideoTitle>{title}</CardVideoTitle>
        <CardVideoDescription>{description}</CardVideoDescription>
      </CardVideoBottomContainer>
    </>
  );
}
