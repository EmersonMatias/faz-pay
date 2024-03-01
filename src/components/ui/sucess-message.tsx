import styled from "styled-components";

export const SucessMessage = styled.div`
    position: fixed;
    padding: 16px 40px;
    background-color: #0cb257;
    right: 80px;
    top: 40px;
    border-radius: 8px;
    font-weight: bold;
    color: ${props => props.theme.colors.white};
`