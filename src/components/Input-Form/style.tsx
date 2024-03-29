import styled from "styled-components";

 export const Container = styled.div`
    width: 500px;
    margin-bottom: 24px;

    label{
        color: ${props => props.theme.colors.black};
        font-weight: 500;
    }

    @media screen and (max-width: 900px) {
        width: 100%;
        margin-bottom: 16px;
  }
`

export const ErrorMessage = styled.p`
    font-weight: 600;
    color: ${props => props.theme.colors.red};
`