import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding: 120px 80px;

    @media screen and (max-width: 900px){
        padding: 120px 16px;
    }
`

export const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;

    h1{
        font-size: 32px;
        font-weight: 600;
    }

    @media screen and (max-width: 500px){
        flex-direction: column;
        align-items: center;

        h1{
            font-size: 24px;
            margin-bottom: 16px;
        }
    }
`