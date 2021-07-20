import React from 'react';
import { Button } from '../Button/Button';
import { FormWrapper, FormHeader, FormBody, FormContainer, ApptBtn } from './FileStyle';

function Form() {
    return (
        <>
            <FormWrapper>
                <FormContainer>
                    <FormHeader>
                        <h1>Appointment Form</h1>
                    </FormHeader>

                    <FormBody>
                        <form action="">
                            <input type="text" name="" id="" placeholder="Patient’s First Name" />
                            <input type="text" name="" id="" placeholder="Patient’s Last Name" />
                            <input type="number" name="" id="" placeholder="Mobile number(required)" />
                            <select name="" id=""> Gender
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                            <input type="date" name="" id="" placeholder="Birthday"/>
                            <input type="text" name="" id="" placeholder="Health Condition"/>
                            <input type="address" name="" id="" placeholder="Address"/>
                            <input type="email" name="" id="" placeholder="Email(required)"/>
                            <input type="password" name="" id="" placeholder="Password"/>

                            <input type="checkbox" name="policy" id="" />
                            <label htmlFor="policy">I read and agree to the Terms and Conditions of MEDCARE</label>

                            
                            <ApptBtn>
                                <Button buttonStyle="btn--primary">SEND</Button>
                                <Button buttonStyle="btn--outline">CANCEL</Button>
                            </ApptBtn>
                        </form>

                    </FormBody>
                </FormContainer>
            </FormWrapper>
        </>
    )
}

export default Form;
