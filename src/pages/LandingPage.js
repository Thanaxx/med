import React from 'react';
import Main from '../components/Main';
import Services from '../components/Services';
import Benefits from '../components/Benefits';
import Steps from '../components/Steps';
import Appointment from '../components/Appointment';

function LandingPage() {
    return (
        <>
            <Main />
            <Services />
            <Benefits />
            <Steps />
            <Appointment />
        </>
    )
}

export default LandingPage;
