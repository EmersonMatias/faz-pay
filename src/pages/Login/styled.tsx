import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors?.gray};
`

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.theme.colors.white};
    border-radius: 8px;
    padding: 0px 160px 60px 160px;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.6);
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`

export const ImgLogo = styled.img`
    width: 300px;
    height: fit-content;
`