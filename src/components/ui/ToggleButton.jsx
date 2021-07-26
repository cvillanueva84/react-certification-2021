import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const GreenSwitch = withStyles({
  switchBase: {
    color: green[300],
    '&$checked': {
      color: green[500],
    },
    '&$checked + $track': {
      backgroundColor: green[500],
    },
  },
  checked: {},
  track: {},
})(Switch);

function ToggleButton() {
  const [checked, setChecked] = useState(false);

  const toggleChecked = () => {
    setChecked((state) => !state);
  };
  return (
    <FormControlLabel
      control={<GreenSwitch checked={checked} onChange={toggleChecked} />}
      label="Dark mode"
      disabled
    />
  );
}

export default ToggleButton;
