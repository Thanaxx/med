import styled from "styled-components";
import { Link } from 'react-router-dom';

export const FooterWrapper = styled.div`
    background-color: #5A5A5A;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const FooterTitle = styled.div`

    p{
        color: white;
    }
`;

export const FooterIcons = styled(Link)`
    img{
        width: 30px;
        padding: 0px 10px;
    }
`;