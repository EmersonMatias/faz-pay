import styled from "styled-components";

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.theme.colors.white};
    border-radius: 8px;
    padding: 0px 140px 40px 140px;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.6);
    position: relative;
    
    .errorLogin{
        text-align: center;
        margin-top: 16px;
        font-weight: 900;
        color: ${props => props.theme.colors.red};
    }

    @media screen and (max-width: 900px) {
        padding: 20px 40px;
        width: 90%;
        height: 80%;
        overflow-y: scroll;
    }
`

export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const FormContainerLogin = styled(FormContainer)`
    @media screen and (max-width: 900px) {
        height: 80dvh;
        overflow-y: scroll;
    }
`