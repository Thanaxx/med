import styled from "styled-components";

export const BenefitsWrapper = styled.div`
    margin: 100px 50px;
`;

export const BenefitsTitle = styled.div`
    padding: 30px 0;
    display: flex;
    justify-content: center;
    align-items: center;

    p{
        width: 60%;
        text-align: center;
        font-size: 30px;

        @media screen and (max-width: 900px){
            width: 100%;
            font-size: 25px;
        }
    }

    span{
        color: #4A90E2;
        font-weight: bolder;
    }
`;

export const BenefitsImages = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const BenefitsName = styled.div`
    width: 45%;
    text-align: center;
    margin: auto;
    padding: 30px 20px;

    img{

    }

    h3{
        color: #4A90E2;
        font-size: 20px;
    }

    p{

    }

`;

