import React from 'react';
import { Button } from '../Button/Button';
import { AppointmentWrapper, ApptTitle, ApptForm, ApptBtn, ApptDetails, ContactLink, ApptInfo } from './AppointmentStyle';

function Appointment() {
    return (
        <>
            <AppointmentWrapper>
                <ApptTitle>
                    <p>Get your appointment now !</p>
                </ApptTitle>

                <ApptForm>
                    <form action="">
                        <input type="text" placeholder="Location" />
                        <select placeholder="Specification">
                            <option value="OB-GYNE">OB-GYNE</option>
                            <option value="Dermatology">Dermatology</option>
                            <option value="Allergology">Allergology</option>
                            <option value="Cardiology">Cardiology</option>
                            <option value="Infectious Disease">Infectious Disease</option>
                            <option value="Pulmonology">Pulmonology</option>
                        </select>
                        <input type="text" placeholder="Doctor’s name or Hospital" />

                        <ApptBtn>
                            <Button buttonStyle='btn--primary' buttonSize='btn-medium'>Find your Doctor</Button>
                        </ApptBtn>
                    </form>
                </ApptForm>

                <ApptDetails>
                    <ApptInfo>
                        <ContactLink>Sign Up </ContactLink>
                        for a
                        <ContactLink> FREE </ContactLink>
                        account today. Need to Consult? Find your doctor
                        <ContactLink> here. </ContactLink>
                    </ApptInfo>
                </ApptDetails>

            </AppointmentWrapper>
        </>
    )
}

export default Appointment;
