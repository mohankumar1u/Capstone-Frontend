import '../doctorList/Doctor.css'
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import React from 'react';

export default function DoctorList() {
    const [state, setState] = React.useState({
        age: '',
        name: 'hai',
      });
      const handleChange = (event) => {
        const name = event.target.name;
        setState({
          ...state,
          [name]: event.target.value,
        });
      };
    return (
        <div>
            <div id='doctor-dropDown'>
                <span>Select Speciality</span>
            <FormControl variant="filled" >
        <Select
          native
          //value={state.age}
          onChange={handleChange}
          inputProps={{
            id: 'filled-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>
            </div>
            
        </div>
    );
}