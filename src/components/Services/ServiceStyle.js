import styled from "styled-components";
import { Link } from 'react-router-dom';

export const ServiceContainer = styled.div`
    min-height: 100vh;
    margin: 50px;

    @media screen and (max-width: 1050px){
        margin: 50px 10px;
    }

`;

export const ServiceTitle = styled.div`
    padding: 30px 0;
    width: 100%;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 1050px){
        
    }

    p{
        text-align: center;
        font-size: 30px;
        width: 60%;

        span{
            font-size: 35px;
        }

        @media screen and (max-width: 1050px){
            width: 100%;
            font-size: 25px;
        }
    }

    span{
        color: #4A90E2;
        font-weight: bolder;
    }
`;

export const ServicesName = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const SampleImages = styled(Link)`
    width: 14%;
    padding: 30px 18px;
    margin: auto;
    cursor: pointer;
    text-decoration: none;

    :hover{
        transform: scale(1.1);
    }

    img{
        width: 100%;
    }

    p{
        text-align: center;
        color: #515050;
    }
`;
