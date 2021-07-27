import React from 'react';
import { InputWrapper, Input, Slider, Label } from './styledTags/Toggle.style';

const Toggle = ({onChange}) => (
    <>
    <InputWrapper>
        <Input type="checkbox" onChange={onChange}/>
        <Slider/>
    </InputWrapper>
    <Label>Dark mode</Label>
    </>
)

export default Toggle;