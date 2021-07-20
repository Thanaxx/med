import React from 'react';
import StepsSample from './StepsSample';
import { StepsWrapper, StepsTitle, StepsImages } from './StepsStyle';

function Steps() {
    return (
        <>
            <StepsWrapper>
                <StepsTitle>
                    <p>How To Find your Doctor in <span>4 easy steps</span></p>    
                </StepsTitle>  

                <StepsImages>
                    <StepsSample 
                        image="/images/step.svg"
                        label="Step 1:"
                        text="Sign up for free !"
                    />

                    <StepsSample 
                        image="/images/step.svg"
                        label="Step 2:"
                        text="Search Doctor's name"
                    />

                    <StepsSample 
                        image="/images/step.svg"
                        label="Step 3:"
                        text="Set an appointment"
                    />

                    <StepsSample 
                        image="/images/step.svg"
                        label="Step 4:"
                        text="Pay transaction online"
                    />
                </StepsImages>
            </StepsWrapper>  
        </>
    )
}

export default Steps;
