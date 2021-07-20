import React from 'react';
import {DoctorAbout, Info, Details} from './SpecialistStyle';
import { Profile } from '../Button/Button';
import { Appform } from '../Button/Button';

function SpecialistNames(props) {

    
    return (
        <>
            <DoctorAbout>
                <Info>
                    <img 
                        src={props.image}
                        alt="Doctor" 
                    />

                    <Profile buttonStyle="btn--outline">View Doctor’s Profile</Profile>
                    <Appform buttonStyle='btn--primary'>Set an appointment</Appform>

                </Info>

                <Details>
                    <h2>{props.names}</h2>
                    <p>{props.label}</p>
                    <p>Specialty: {props.specialty}</p>
                    <p>Appointment Response Rate: {props.rate}</p>
                    <p>Clinics: {props.clinic}</p>
                </Details>
            </DoctorAbout>
        </>
    )
}

export default SpecialistNames;
