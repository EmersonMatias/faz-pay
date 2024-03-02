import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    background-color: ${props => props.theme.colors.purple30};
    position: fixed;
    top: 0;
    right: 0;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;

    img{
        height: 80px;
    }

    @media screen and (max-width: 400px) {
        justify-content: left;
        padding-left: 16px;
    }
`