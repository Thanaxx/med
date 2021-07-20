import React from 'react';
import SpecialistNames from './SpecialistNames';
import {SearchContainer, SearchBox, DoctorsContainer, DoctorsName} from './SpecialistStyle';

function Specialist() {
    return (
        <>
            <SearchContainer>
                <SearchBox>
                    <input type="search" name="search" placeholder="Ex. Specialist, Name, Doctor" />
                    <button>Search</button>
                </SearchBox>
            </SearchContainer>

            <DoctorsContainer>
                <DoctorsName>
                    <SpecialistNames
                        image = "/images/Doctor.jpg"
                        names = "Rose Francisco, MD"
                        label = "HMO"
                        specialty = "OB-GYNE"
                        rate = "100%"
                        path = "/contacts"
                        clinic = "Metropolitan Medical Center , TeleMedicine Inc."
                    />

                    <SpecialistNames
                        image = "/images/Doctor.jpg"
                        names = "Jerry Villanueva, MD"
                        label = "HMO"
                        specialty = "OB-GYNE"
                        rate = "100%"
                        clinic = "Metropolitan Medical Center , TeleMedicine Inc."
                    />

                    <SpecialistNames
                        image = "/images/Doctor.jpg"
                        names = "Rose Francisco, MD"
                        label = "HMO"
                        specialty = "OB-GYNE"
                        rate = "100%"
                        clinic = "Metropolitan Medical Center , TeleMedicine Inc."
                    />

                    <SpecialistNames
                        image = "/images/Doctor.jpg"
                        names = "Jerry Villanueva, MD"
                        label = "HMO"
                        specialty = "OB-GYNE"
                        rate = "100%"
                        clinic = "Metropolitan Medical Center , TeleMedicine Inc."
                    />

                    <SpecialistNames
                        image = "/images/Doctor.jpg"
                        names = "Rose Francisco, MD"
                        label = "HMO"
                        specialty = "OB-GYNE"
                        rate = "100%"
                        clinic = "Metropolitan Medical Center , TeleMedicine Inc."
                    />

                    <SpecialistNames
                        image = "/images/Doctor.jpg"
                        names = "Jerry Villanueva, MD"
                        label = "HMO"
                        specialty = "OB-GYNE"
                        rate = "100%"
                        clinic = "Metropolitan Medical Center , TeleMedicine Inc."
                    />

                </DoctorsName>

            </DoctorsContainer>
        </>
    )
}

export default Specialist;
