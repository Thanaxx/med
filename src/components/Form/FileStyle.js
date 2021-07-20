import styled from "styled-components";

export const FormWrapper = styled.div`
    min-height: 100vh;
`;

export const FormContainer = styled.div`
    width: 60%;
    margin: auto;

    @media screen and (max-width: 1050px){
        width: 90%;
    }
`;

export const FormHeader = styled.div`
    h1{
        color: gray;
    }
`;

export const FormBody = styled.div`
    form{
        width: 100%;
        margin: auto;

        input, select{
            width: 47%;
            padding: 10px 3px;
            margin: 7px;
            background-color: transparent;
            border: 1px solid #D2D2D2;
            outline: none;
            border-radius: 4px;

            @media screen and (max-width: 1050px){
                width: 97%;
            }
        }

        input[type="email"], input[type="password"], input[type="address"]{
            width: 97%;
            padding: 10px 3px;
        }

        input[type="password"]{
            margin-bottom: 20px;
        }

        input[type="checkbox"]{
            width: 3%;
            background-color: blue;
            text-align: right;
            padding: 20px 0;
        }
        label{
                text-align: left;
        }

        Button{
            margin: 20px 10px;
        }
    }
`;

export const ApptBtn = styled.div`
    text-align: right;
`;
