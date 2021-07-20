import styled from "styled-components";

export const StepsWrapper = styled.div`
    min-height: 85vh;
    margin: 100px 50px;

    
    @media screen and (max-width:850px){
        margin: 50px 20px;
    }
`;

export const StepsTitle = styled.div`
    padding: 30px 0;
    display: flex;
    justify-content: center;

    p{
        width: 60%;
        text-align: center;
        font-size: 30px;
        color: #1E1E1E;

        @media screen and (max-width:940px){
            width: 100%;
        }
    }

    span{
        font-weight: bolder;
    }

`;

export const StepsImages = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0px 100px;

    @media screen and (max-width:850px){
        margin: 0px 0px;
    }
`;

export const StepsName = styled.div`
    margin: auto;
    width: 25%;
    text-align: center;
    line-height: 10px;

    @media screen and (max-width:850px){
        width: 50%;
    }

    h3{
        color: #4A90E2;
        font-size: 25px;
    }

    p{
        color: #050505;
        font-size: 20px;
    }
`;


