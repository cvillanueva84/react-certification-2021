import styled from 'styled-components';

export const InputWrapper = styled.label`
    padding: 10px;
    margin: 10px 0 10px 0;
    margin-left: auto;
`

export const Label = styled.label`
    color: ${props => props.theme.text};
    padding: 10px 0;
    margin: 11px 30px 10px 4px;
    font-weight: bolder;
`

export const Input = styled.input`
    position: absolute;
    left: -9999px;
    top : -9999px;

    &:checked + span {
        background-color: ${props => props.theme.background};
        &:before{
            left: 27px;
        }
    }
    `
export const Slider = styled.span`
    display: flex;
    cursor: pointer;
    width: 50px;
    height: 25px;
    border-radius: 100px;
    background-color: ${props => props.theme.background};
    position: relative;
    transition: background-color .3s;

    &:before{
        content: "";
        position: absolute;
        top: 2px;
        left: 2px;
        width: 21px;
        height: 21px;
        border-radius: 21px;
        transition: 0.2s;
        background: ${props => props.theme.primary};
        
    }
`