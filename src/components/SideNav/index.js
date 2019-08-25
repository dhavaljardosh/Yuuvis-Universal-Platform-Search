import React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export default function SwitchPlatforms() {
  const [state, setState] = React.useState({
    slack: true,
    email: true,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend" style={{marginTop:10, fontWeight:800, color:'black', paddingBottom:10}}>Platforms</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={<Switch checked={state.email} onChange={handleChange('email')} value="email"  color="primary"/>}
          label="Email"
          style={{
              color:state.email ? 'blue' : 'gray', 
              fontWeight:state.email ? '400' : '700', 
          }}
        />
        <FormControlLabel
          control={
            <Switch checked={state.slack} onChange={handleChange('slack')} value="slack" color="primary" />
          }
          label="Slack"
          style={{
              color:state.slack ? 'blue' : 'gray', 
              fontWeight:state.slack ? 400 : 700,
          }}
        />
      </FormGroup>
    </FormControl>
  );
}