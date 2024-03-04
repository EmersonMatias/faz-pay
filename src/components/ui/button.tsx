import styled from "styled-components";

export const Button = styled.button`
    border-radius: 8px;
    background-color: ${props => props.theme.colors.purple};
    color: ${props => props.theme.colors.white};
    font-weight: bold;
    padding: 16px 80px;
    border: none;
   font-size: 18px;
   position: relative;
   cursor: pointer;

   @media screen and (max-width: 900px) {
        padding: 16px 40px;
    }
`

export const ExitButton = styled(Button)`
    position: absolute;
    right: 24px;
    top: 24px;
    padding: 8px 24px;
`

export const CreateProductButton = styled(Button)`
padding: 8px 24px;
`