import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100dvh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors?.gray};

    .signupMessage{
        margin-top: 24px;
    }

    @media screen and (max-width: 900px) {
        margin-top: 0px;
        overflow-y: scroll;
    }
`

export const ImgLogo = styled.img`
    width: 200px;
    height: fit-content;
`