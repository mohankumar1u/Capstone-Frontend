import '../doctorList/Doctor.css'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {  withStyles } from '@material-ui/core/styles';
import { green  } from '@material-ui/core/colors';
import '../doctorList/Doctor.css'
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import DocterDetails from '../doctorList/DoctorDetails';
import BookAppointment from '../doctorList/BookAppointment';


const ViewDetailsBtn = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(green[700]),
    backgroundColor: green[700],
    '&:hover': {
      backgroundColor: green[900],
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  paper: {
      position: 'absolute',
      //width: "50vw",
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
  },
}));

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
  };
}


export default function DoctorList() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });
  const [mobel, setMobel] = React.useState(0)
  const handleClose = () => {
    setMobel(0);
};
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
        <div>Select Speciality</div>
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
      <Paper id='card'>
        <Typography>
          <div id='Docter-name'>Doctor Name:Name</div>
          <div>Speciality:Speciality</div>
          <div>Rating:<Rating name="read-only" value={3} readOnly /></div>
          <div><Button onClick={()=>{
            setMobel(1)
          }} variant="contained" color="primary">
          BOOK APPOINTMENT
                </Button><ViewDetailsBtn onClick={()=>{
            setMobel(2)
          }} variant="contained" color="green">
                VIEW DETAILS
                </ViewDetailsBtn></div>
                
                <Modal
                open={mobel}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div  style={modalStyle} className={classes.paper}>
                  {mobel==1?<BookAppointment/>:<DocterDetails/>
                  }
                  </div>
            </Modal>

        </Typography>
      </Paper>

    </div>
  );
}