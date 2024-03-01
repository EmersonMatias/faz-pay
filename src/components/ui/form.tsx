import styled from "styled-components";

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.theme.colors.white};
    border-radius: 8px;
    padding: 0px 140px 40px 140px;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.6);

    .errorLogin{
        text-align: center;
        margin-top: 16px;
        font-weight: 900;
        color: ${props => props.theme.colors.red};
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`