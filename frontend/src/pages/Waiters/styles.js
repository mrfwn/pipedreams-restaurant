import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;    
`;

export const HeadContainer = styled.div`
    width: 100%;
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    h2 {
        text-align: center;
        width: 100%;
    }

    h3 {
        margin-right: auto;
        margin-left: 50px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: underline;  
        svg{
            margin-right: 5px;
        }
    }

    @media screen and (max-width: 600px) {
        
        h3 {
            margin-left: 15px;
        }
    }
`;