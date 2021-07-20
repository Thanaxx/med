import styled from "styled-components";

export const MainWrapper = styled.div`

    min-height: 80vh;
    display: flex;

    @media screen and (max-width:940px){
        flex-direction: column;
    }

    @media screen and (max-width:1050px){
        
    }
    
`;

export const RightTitle = styled.div`
    flex: 2;
    margin: auto;
    padding: 0px 60px;

    p{
        font-size: 14px;
        color: #525861;
        font-weight: bolder;
    }

    h1{
        font-size: 60px;
        font-weight: 900;
        line-height: 70px;

        @media screen and (max-width:1050px){
            font-size: 45px;
        }

        @media screen and (max-width:850px){
            font-size: 42px;
        }
    }

    span{
        color: #4A90E2;
    }

    h2{
        font-size: 22px;
        font-weight: lighter;
        color: #636363;

        @media screen and (max-width:1050px){
            font-size: 18px;
        }

        @media screen and (max-width:760px){
        
        }
    }

    Button{
        margin-top: 20px;
    }

`;

export const MainImage = styled.div`
    flex: 1;
    margin: auto;
    padding: 0px 50px;

    @media screen and (max-width:850px){
        padding: 20px;
    }
`;


