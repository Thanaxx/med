import styled from "styled-components";
import { Link } from 'react-router-dom';

export const AppointmentWrapper = styled.div`
    min-height: 85vh;
`;

export const ApptTitle = styled.div`
    padding: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;

    p{
        width: 60%;
        text-align: center;
        font-size: 30px;
    }
`;

export const ApptForm  = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    form{
        width: auto;
        margin: 0px 20px;
        
        input, select{
            background-color: #5A5A5A;
            color: white;
            width: 96%;
            padding: 12px 10px;
            margin: 8px 0;
            border: none;
            outline: none;

            ::placeholder{
                color: #9B9B9B;
            }
            
        }

        select{
            background-color: #5A5A5A;
            color: white;
            width: 100%;
            padding: 12px 10px;
            margin: 8px 0;
            border: none;
            outline: none;
        }
    }
`;

export const ApptBtn= styled.div`
    text-align: center;

    Button{
        margin-top: 15px;
    }   

`;

export const ApptDetails = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 0;
    margin-top: 100px;

`;

export const ApptInfo = styled.p`
        width: 50%;
        text-align: center;
        font-size: 30px;

        @media screen and (max-width: 760px){
            width: 90%;
            font-size: 25px;
        }
`;

export const ContactLink = styled(Link)`
        color: #4A90E2;
        font-weight: bolder;
        cursor: pointer;
        text-decoration: none;
`;