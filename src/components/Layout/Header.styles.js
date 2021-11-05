import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 10px 0px;
  width: 100%;
  background-color: blue;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
`;
 
export const LogoLink = styled.div`
    padding-right: 10px;
    img {
        max-width: 50px;
        height: auto;
    }
`;
 
export const MenuToggle = styled.div`
    display: block;
    width: 50px;
    padding: 5px;
    margin-right: 10px;
    svg{
        height: auto;
        max-width: 100%;
    }
`;

export const ButtonToggle = styled.div`
    display: block;
    margin-left: auto;
    width: 30px;
    margin-right: 10px;
    svg{
        height: auto;
        max-width: 100%;
    }
`;
 
export const Input = styled.input`
  font-size: 16px;
  border: solid 1px #dbdbdb;
  border-radius: 3px;
  color: #262626;
  padding: 7px 33px;
  border-radius: 3px;
  color: #999;
  cursor: text;
  font-size: 14px;
  font-weight: 300;
  text-align: center;
  background: #fafafa;
 
  &:active,
  &:focus {
    text-align: left;
  }
`;
 
export const MenuLink = styled.a``;