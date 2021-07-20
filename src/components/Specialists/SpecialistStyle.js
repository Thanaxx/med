import styled from "styled-components";

export const SearchContainer = styled.div`
    background-color: #4A90E2;
    width: 100%;
    position: static;
    top: 80px;
    left: 0;
    height: 55px;
`;

export const SearchBox = styled.div`
    float: right;
    background-color: white;
    padding: 4px 8px;
    display: flex;
    border-radius: 4px;
    margin: 10px 30px;

    input{
        border: none;
        outline: none;
        width: 350px;
    }

    button{
        border: 1px solid #4A90E2;
        outline: none;
        color: white;
        padding: 5px 10px;
        background-color: #4A90E2;
        cursor: pointer;
        border-radius: 4px;
    }
`;  

export const DoctorsContainer = styled.div`
    min-height: 100vh;
    margin: 50px 80px;

    @media screen and (max-width:1050px){
        margin: 50px 20px;
    }
`;

export const DoctorsName = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const DoctorAbout = styled.div`
    margin: auto;
    width: 44%;
    padding: 50px 30px;
    display: flex;

    @media screen and (max-width:1050px){
        padding: 30px 50px;
        width: 100%;
    }

    @media screen and (max-width:760px){
        padding: 50px 10px;
    }
`;

export const Info = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;

    img{
        width: 200px;
    }

    Button{
        margin: 5px 0;
    }
`;

export const Details = styled.div`
    flex: 1;
`;

