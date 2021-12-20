import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../register/Register.css'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function REegister() {
    const classes = useStyles();
    const [email, setEmail] = React.useState("");
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [emailError, setEmailError] = React.useState(false);
    const [password, setPassword] = React.useState("");
    const [contactNumber, setContactNumber] = React.useState("");
    const [unfilled, setUnfilled] = React.useState(false)
    const handleRegister = async() => {
        if (email === "" || password === ""|| firstName === ""|| lastName === ""|| contactNumber === "") {
            setUnfilled(true)
            return
        }
       const inValidEmail = await validateEmail(email)
        if(inValidEmail){
            return
        }
        console.log(email,password,firstName, lastName, contactNumber)
    }
    const validateEmail=(email)=>{
        const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
        const result = pattern.test(email);
        if(result===true){
            setEmailError(false)
            return false
        } else{
            setEmailError(true)
            return true
        }
    }
    return (
        <div id='register_container'>
           <form id='login-form' className={classes.root} noValidate autoComplete="off">
            <div className="input-field">
                    <TextField onChange={(e) => { 
                         
                        setFirstName(e.target.value) }} id="standard-basic" label="First Name" />
                    <div className={(unfilled && firstName === "")?"helper-text":"helper-ignore"}>Please fill out this field</div>
                </div>
                <div className="input-field">
                    <TextField onChange={(e) => { 
                         
                        setLastName(e.target.value) }} id="standard-basic" label="Last Name" />
                    <div className={(unfilled && lastName === "")?"helper-text":"helper-ignore"}>Please fill out this field</div>
                </div>

                <div className="input-field">
                    <TextField error={emailError} onChange={(e) => { 
                         
                        setEmail(e.target.value) }} id="standard-basic" label="Email" helperText={emailError?"Enter valid Email":""} />
                    <div className={(unfilled && email === "")?"helper-text":"helper-ignore"}>Please fill out this field</div>
                </div>
                <div className="input-field">
                    <TextField type={'password'} onChange={(e) => { setPassword(e.target.value) }} id="standard-basic" label="Password" helperText="" />
                    <div className={(unfilled && password === "")?"helper-text":"helper-ignore"}>Please fill out this field</div>
                </div>
                <div className="input-field">
                    <TextField type="number" onChange={(e) => {
                        setContactNumber(e.target.value) }} id="standard-basic" label="Contact number" />
                    <div className={(unfilled && contactNumber === "")?"helper-text":"helper-ignore"}>Please fill out this field</div>
                </div>
                <Button id="login-btn" onClick={handleRegister} variant="contained" color="primary">
                REGISTER
                </Button>

            </form>
        </div>
    );

}