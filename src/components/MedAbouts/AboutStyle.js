import styled from "styled-components";
import { Link } from 'react-router-dom';

export const MedAboutWrapper = styled.div`
    display: flex;
    min-height: 80vh;

    @media screen and (max-width: 1050px){
        flex-direction: column-reverse;
    }
`;

export const AboutInfo = styled.div`

    flex: 1;
    margin: auto;
    padding:10px 50px;

    h2{
        font-weight: bold;
        color: #2A2A2A;
    }

    p{
        text-align: justify;
        line-height: 25px;
    }
`;

export const AboutLink = styled.div`
    display: flex;
`;

export const LearnMore = styled(Link)`
    padding-right: 4px;
    text-decoration: none;
    color: #4A90E2;
    font-weight: bold;
`;

export const AboutImage = styled.div`
    flex: 1;
    margin: auto;
    padding: 0px 50px;

    @media screen and (max-width: 1050px){
        padding: 30px;
    }

    img{
        width: 100%;
    }
`;