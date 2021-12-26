import React from 'react';
import '../doctorList/Doctor.css'
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
export default function BookAppointment() {
    const [selectedDate, handleDateChange] = React.useState(new Date());
    const [doctorName, setDoctorName] = React.useState('');
    const [unfilled, setUnfilled] = React.useState(false);
    const [medicalHistory, setMedicalHistory] = React.useState('');
    const [symptoms, setSymptoms] = React.useState('');
    const [slot, setSlot] = React.useState('None');
    const [slotError,setSlotError] = React.useState(false);

    const handleBooking = async() => {
        if (doctorName == "") {
            setUnfilled(true)
            return
        }if(slot== "None"){
            setSlotError(true)
            return
        }else{
            setSlotError(false)
        }
       
        console.log(selectedDate,
            doctorName,
            unfilled,
            medicalHistory,
            symptoms,
            slot,)
    }


    return (
        <div id='booking-holder'>
            <div id="model-header">Book an Appointment</div>
            <div id='book-appointment-container'>
                <form noValidate autoComplete="off">
                    <div id='docter-name-text'>
                        <TextField onChange={(e) => {

                            setDoctorName(e.target.value)
                        }} id="standard-basic"  label="Doctor Name *" />
                        <div className={(unfilled && doctorName == "") ? "helper-text" : "helper-ignore"}>Please fill out this field</div>
                    </div>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Date picker inline"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </MuiPickersUtilsProvider>
                    <div>
                        <FormControl error={slot==='None' && slotError}>
                            <InputLabel id="demo-simple-select-label">Timeslot </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={slot}
                                onChange={(e) => { setSlot(e.target.value) }}
                            >
                                <MenuItem value={"None"}>None</MenuItem>
                                <MenuItem value={10}>10:00-11:00AM</MenuItem>
                                <MenuItem value={20}>11:00-12:00AM</MenuItem>
                                <MenuItem value={30}>12:00-1:00PM</MenuItem>
                            </Select>
                            {(slot==='None' && slotError) &&<FormHelperText>Error</FormHelperText>}
                        </FormControl>
                    </div>

                    <div >
                        <TextField 
                        onChange={(e) => { setMedicalHistory(e.target.value) }} 
                        id="standard-multiline-static"
                        label="Multiline"
                        multiline
                        rows={4} label="Medical History" />
                        {/* <div className={(unfilled && medicalHistory == "") ? "helper-text" : "helper-ignore"}>Please fill out this field</div> */}
                    </div>
                    <div >
                        <TextField 
                        onChange={(e) => { setSymptoms(e.target.value) }}  
                        id="standard-multiline-static"
                        label="Multiline"
                        multiline
                        rows={4} label="Symptoms" />
                        {/* <div className={(unfilled && symptoms == "") ? "helper-text" : "helper-ignore"}>Please fill out this field</div> */}
                    </div>
                    <Button onClick={handleBooking} id='from-btn' variant="contained" color="primary">
                        BOOK APPOINTMENT
                </Button>

                </form>
            </div>
        </div>
    );
}