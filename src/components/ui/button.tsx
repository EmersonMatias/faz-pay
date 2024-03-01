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
`

export const ExitButton = styled(Button)`
    position: absolute;
    right: 24px;
    top: 24px;
    padding: 8px 24px;
    cursor: pointer;
`