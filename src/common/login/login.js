import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../login/login.css'

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
    const [passwordError, setPasswordError] = React.useState(false);
    const [unfilled, setUnfilled] = React.useState(false)
    const handleLogin = () => {
        if (email == "" || password == "") {
            setUnfilled(true)
        }
    }
    return (
        <div id='login_container'>
            <form className={classes.root} noValidate autoComplete="off">
                <div className="input-field">
                    <TextField error={emailError} onChange={(e) => { setEmail(e.target.value) }} id="standard-basic" label="Email" helperText={emailError?"Incorrect entry.":""} />
                    <div className={(unfilled && email == "")?"helper-text":"helper-ignore"}>Please fill out this field</div>
                </div>
                <div className="input-field">
                    <TextField onChange={(e) => { setPassword(e.target.value) }} id="standard-basic" label="Password" helperText="" />
                    <div className={(unfilled && password == "")?"helper-text":"helper-ignore"}>Please fill out this field</div>
                </div>
                <Button id="login-btn" onClick={handleLogin} variant="contained" color="primary">
                    LOGIN
                </Button>

            </form>
        </div>
    );

}