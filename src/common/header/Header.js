import React from 'react';
import './Header.css'
import logo from '../../assets/logo.jpeg'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Login from '../../screens/login/Login';
import Register from '../../screens/register/Register'


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

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
    },
}));

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={2}>
                    <Typography component={'span'} variant={'body2'}>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
export default function Header() {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [tabValue, setTabValue] = React.useState(0);

    const handleOpen = () => {
        debugger
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };
    const body = (
        <div style={modalStyle} className={classes.paper}>
            <div id="login_Header">Authentication</div>
            <div id="simdivle-modal-description">
                <Paper square>
                    <Tabs value={tabValue} onChange={handleTabChange} indicatorColor="secondary"
                        textColor="primary" aria-label="disabled tabs example">
                        <Tab className='auth-tab' label="LOGIN" {...a11yProps(0)} />
                        <Tab className='auth-tab' label="REGISTER"  {...a11yProps(1)} />
                    </Tabs>
                </Paper>
                <TabPanel value={tabValue} index={0}>
                    <Login />
                </TabPanel>
                <TabPanel value={tabValue} index={1}>
                    <Register />
                </TabPanel>
            </div>
        </div>
    );

    return (
        <div id='Header_container'>
            <div>
                <div id='heading'><img src={logo} alt="" /><div id='title'> Docter Finder</div></div>
            </div>
            <Button onClick={handleOpen} variant="contained" color="primary">
                LOGIN
                </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );

}
