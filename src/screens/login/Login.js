import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../login/Login.css'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function Login() {
    const classes = useStyles();
    const [email, setEmail] = React.useState("");
    const [emailError, setEmailError] = React.useState(false);
    const [password, setPassword] = React.useState("");
    const [unfilled, setUnfilled] = React.useState(false)
    const handleLogin = async() => {
        if (email == "" || password == "") {
            setUnfilled(true)
            return
        }
       const inValidEmail = await validateEmail(email)
        if(inValidEmail){
            return
        }
        console.log(email,password)
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
        <div id='login_container'>
            <form id="login-form" className={classes.root} noValidate autoComplete="off">
                <div className="input-field">
                    <TextField error={emailError} onChange={(e) => { 
                         
                        setEmail(e.target.value) }} id="standard-basic" label="Email" helperText={emailError?"Enter valid Email":""} />
                    <div className={(unfilled && email == "")?"helper-text":"helper-ignore"}>Please fill out this field</div>
                </div>
                <div className="input-field">
                    <TextField type={'password'} onChange={(e) => { setPassword(e.target.value) }} id="standard-basic" label="Password" helperText="" />
                    <div className={(unfilled && password == "")?"helper-text":"helper-ignore"}>Please fill out this field</div>
                </div>
                <Button id="login-btn" onClick={handleLogin} variant="contained" color="primary">
                    LOGIN
                </Button>

            </form>
        </div>
    );

}