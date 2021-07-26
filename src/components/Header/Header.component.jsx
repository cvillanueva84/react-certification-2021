import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { Link } from "react-router-dom";

import {
    StyledHeader,
    InputHeader,
    ButtonMenu,
    UserLogIn,
    RightSection,
    Bars,
    LeftSection
} from './Header.styles';

function Header() {
    const [state, setState] = React.useState(false);

    const handleChange = (event) => {
        setState({ ...state, [event.target]: event.target.checked });
    };

    return (
        <>
            <StyledHeader>
                <LeftSection>
                    <Bars />
                    <Link to="/">
                        <ButtonMenu>
                            <img
                                alt="logo"
                                src="/images/video-camera.png" />
                            <h1>Pentax</h1>
                        </ButtonMenu>
                    </Link>
                </LeftSection>
                <InputHeader placeholder='Search here' />
                <RightSection>
                    <FormControl component="fieldset">
                        <FormGroup>
                            <FormControlLabel
                                control={<Switch color="primary" checked={state.checked} onChange={handleChange} name="dark-mode" />}
                                label="Dark mode"
                            />
                        </FormGroup>
                    </FormControl>
                    <UserLogIn>
                        <a>Log In</a>
                    </UserLogIn>
                </RightSection>
            </StyledHeader >
        </>
    );
}

export default Header;