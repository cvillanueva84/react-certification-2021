import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  display: flex;
  margin-bottom: 8px;
  padding: 2px;
  border-bottom: 1px solid #e3e3;
  align-items: center;
  text-decoration: none;
`;

export const Image = styled.img`
  width: 45%;
  height: auto;
`;

export const Title = styled.h3`
  margin-left: 8px;
  font-size: 14px;
`;
