import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import DoctorList from '../doctorList/DoctorList';
import Appointment from '../appointment/Appointment';
import '../home/Home.css'

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

export default function Home() {
    const [tabValue, setTabValue] = React.useState(0);
    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };
   
        return ( 
            <div> <Paper square>
            <Tabs id="tabs" value={tabValue} onChange={handleTabChange} indicatorColor="primary"
                textColor="primary" aria-label="disabled tabs example">
                <Tab className="tab" label="DOCTORS" {...a11yProps(0)} />
                <Tab className="tab" label="APPOINTMENT"  {...a11yProps(1)} />
            </Tabs>
        </Paper>
        <TabPanel value={tabValue} index={0}>
           <DoctorList/>
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
            <Appointment/>
        </TabPanel></div>
         );
    
}