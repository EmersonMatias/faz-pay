import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors?.gray};

    .signupMessage{
        margin-top: 24px;
    }
`

export const ImgLogo = styled.img`
    width: 200px;
    height: fit-content;
`