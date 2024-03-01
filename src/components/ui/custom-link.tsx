import { Link } from "react-router-dom";
import styled from "styled-components";

export const  CustomLink = styled(Link)`
    font-size: 16px;
    font-weight: 900;
    color: ${props => props.theme.colors.purple};
    text-decoration: none;
`