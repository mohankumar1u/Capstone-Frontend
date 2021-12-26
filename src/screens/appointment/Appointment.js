import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import RateAppointment from './RateAppointment';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';

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

export default function Appointment() {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [mobelOpen, setMobel] = React.useState(false)
    return (
        <div>
            <div>
                <Paper>
                    <div>Dr: name.</div>

                    <div>Date:2021-08-02</div>

                    <div>Symptoms:</div>


                    <div>priorMedicalHistory:</div>

                    <Button onClick={() => {
                        setMobel(true)
                    }} id='from-btn' variant="contained" color="primary">
                        RATE APPOINTMENT
                </Button>
                    <Modal
                        open={mobelOpen}
                        onClose={() => {
                            setMobel(false)
                        }}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                    >
                        <div style={modalStyle} className={classes.paper}>
                            <RateAppointment />
                        </div>
                    </Modal>
                </Paper>
            </div>
        </div>
    );
}